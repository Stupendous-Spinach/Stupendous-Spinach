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
    const incrementOrDecrement = liked ? 'decrement' : 'increment';
    const putOrPost = liked ? 'put' : 'post';
    const axiosLikeOrDislike = liked ? `/api/removelike/${id}` : `/api/addlike/${id}`;

    this.props[incrementOrDecrement](i);
    axiosAction(putOrPost, axiosLikeOrDislike, null, (response) => {
      console.log('successfully from the database', response);
    });
  }

  render() {
    const { url, like_count, comment_count, id, caption, liked, age } = this.props.photo;
    const commentId = `/comments/${id}`;
    const { i } = this.props;
    const heart = liked ? "fa fa-heart heart" : "glyphicon glyphicon-heart-empty heart";

    return (
      <div className="img-rounded">
        <div>
          <span className="dateAndTime">Date And Time</span>
          <img src={ url } className='img-thumbnail'/>
        </div>
        <div className="likeCaptionComment">
          <div>
            <span className="profile">Steven</span>
          </div>
          <CSSTransitionGroup transitionName="like" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
            <span key={ like_count } className={ heart } aria-hidden="true" onClick={ this.likeOrDislike.bind(this, i, liked, id) }></span>
          </CSSTransitionGroup>
          <div className="likeDiv">
            <span className="likes">{ !like_count ? '' : like_count + ' '}</span>
            <span className="likeCount">Likes</span>
          </div>
          { caption ? <h6 className='h6-nearbyPhotoCard'>{ caption }</h6> : '' }
          { 
            comment_count ? 
              <Link to={ commentId }>
                <span className="commentCount">{ !comment_count ? '' : comment_count }</span>
                <span className="comments">Comments</span>
              </Link> : ''
          }
        </div>
      </div> 
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ increment, decrement }, dispatch);
};

export default connect(null, mapDispatchToProps)(NearbyPhotoCard);

