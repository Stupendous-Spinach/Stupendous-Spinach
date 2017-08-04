import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { newMessage, resetMessage } from '../../actions/msgAction';
import { urlAction } from '../../actions/urlAction';
import io from 'socket.io-client';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      send_id: null,
      receive_id: null
    };
    this.socket = io.connect(window.location.hostname);
//     this.socket = io.connect('/');
    this.handleMessageEvent = this.handleMessageEvent.bind(this);
  }

  componentWillMount() {
    this.props.urlAction('chat');
    this.setState({
      send_id: this.props.profile.myId.id,
      receive_id: this.props.profile.profileId
    }, () => {
      this.socket.emit('fetchMessages', this.state);
    });
    this.handleMessageEvent();
  }

  componentWillUnmount() {
    this.props.resetMessage([]);
  }

  handleMessageEvent() {
    this.socket.on('messages', (inboundMessage) => {
      console.log('inboundMessage ', inboundMessage);
      this.props.newMessage(inboundMessage);
    });
  }

  handleOnChange(e) {
    this.setState({ text: e.target.value });
  }

  handleOnSubmit(e) {
    e.preventDefault();
    this.socket.emit('sendMessages', this.state);
    this.setState({ text: '' });
  }

  render() {
    const { messageArray } = this.props.messages;
    const messages = messageArray.map((message, i) => {
      const receivedUser = message.receive_id === this.props.profile.profileId;
      if (receivedUser) {
        return (
          <li className="chatting-li" key={i}>
            <div className='chatting-li-right'>
              <span className="comment-combined">
                {message.text} &nbsp;
                <strong>{ this.props.profile.myId.first }</strong>
              </span>
              <img src={ this.props.profile.myId.photo } className="comments-icon" />
            </div>
          </li>
        );
      } else {
        return (
          <li className="chatting-li" key={i}>
            <div className='chatting-li-left'>
              <img src={ this.props.profile.profileUrl } className="comments-icon" />
              <span className="comment-combined">
                <strong>{ this.props.profile.profileInfo }</strong> &nbsp;
                {message.text}
              </span>
            </div>
          </li>
        );
      }
    });
    return (
      <div className="chat-component">
        <div>
          <ul className="chatting-Ul">
            { messages }
          </ul>
        </div>
        <form role="form" onSubmit={this.handleOnSubmit.bind(this)}className="comments-form">
          <div className="row">
            <div className="col-xs-12">
              <div className="input-group input-group-lg">
                <input type="text" className="form-control input-lg" placeholder="Write a message..." value={this.state.text} onChange={this.handleOnChange.bind(this)}/>
                <span className="input-group-btn">
                  <button className="btn btn-default btn-lg" type="submit" onClick={this.handleOnSubmit.bind(this)}>Send</button>
                </span>
              </div>
            </div>
          </div>
        </form>
        {/* <form onSubmit={this.handleOnSubmit.bind(this)} className="comments-form">
          <input placeholder="What SUP!..." type="text" value={this.state.text} onChange={this.handleOnChange.bind(this)} className="comments-input"/>
          <span className="comments-button glyphicon glyphicon-ok" type="submit" onClick={this.handleOnSubmit.bind(this)}></span>
        </form> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages,
    profile: state.profile
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ newMessage, urlAction, resetMessage }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
