import React, { Component } from 'react';
import Comments from './Comments';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions/likeAction';
import { bindActionCreators } from 'redux';
import { axiosAction } from '../helpers/axiosAction';

import CSSTransitionGroup from 'react-addons-css-transition-group';

require('../styles/main.css');

class NearbyPhotoCard extends Component {
  constructor(props) {
    super(props);
  }

  likeOrDislike(i, liked, id) {
    const likeOrDislike = liked ? 'decrement' : 'increment';
    const putOrPost = liked ? 'put' : 'post';
    const axiosLikeOrDislike = liked ? `/api/removelike/${id}` : `/api/addlike/${id}`;

    this.props[likeOrDislike](i);
    axiosAction(putOrPost, axiosLikeOrDislike, null, (response) => {
      console.log('successfully from the database', response);
    });
  }

  render() {
    const { url, like_count, comment_count, id, caption, liked } = this.props.photo;
    const commentId = `/comments/${id}`;
    const { i } = this.props;
    const heart = liked ?  "fa fa-heart heart" : "glyphicon glyphicon-heart-empty heart";
    return (
      <div className="img-rounded">
        <img src={ url } className='img-thumbnail'/>

        <CSSTransitionGroup transitionName="like" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
          <span key={like_count} className={heart} aria-hidden="true" onClick={ this.likeOrDislike.bind(this, i, liked, id) }> </span>
        </CSSTransitionGroup>

        <span>{ like_count } </span>
     
        <span className="fa fa-comment comment" aria-hidden="true">
          <Link to={ commentId }>{ comment_count }<span className="comments">Comments</span></Link>
        </span>
        
        <h6 className='text'> { caption }</h6>
      </div> 
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ increment, decrement }, dispatch);
};



export default connect(null, mapDispatchToProps)(NearbyPhotoCard);

