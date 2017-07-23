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

    const { url, like_count, comment_count, id, caption, liked, distance, age, first } = this.props.photo;
    const commentId = `/comments/${id}`;
    const { i } = this.props;
    const heart = liked ? 'fa fa-heart heart' : 'glyphicon glyphicon-heart-empty heart';

    let timeLapse = null;

    if (age.days) {
      timeLapse = age.days + ' days';
    } else if (age.hours) {
      timeLapse = age.hours + ' hours';
    } else if (age.minutes) {
      timeLapse = age.minutes + ' minutes';
    } else if (age.seconds) {
      timeLapse = age.minutes + ' seconds';
    } else {
      timeLapse = age[Object.keys(age)[0]];
    }
    let distanceTime = ' ' + `${distance} mi, ${timeLapse }` + ' ';
    return (
      <div> 
        <span className='dateAndTime'>{ distanceTime }</span>
        <img src={ url } className='img-thumbnail'/>
        <div className='likeCaptionComment'>
          <span className='profile'> { first }</span>
          <CSSTransitionGroup transitionName='like' transitionEnterTimeout={500} transitionLeaveTimeout={500}>
            <span key={ like_count } className={ heart } aria-hidden='true' onClick={ this.likeOrDislike.bind(this, i, liked, id) }></span>
          </CSSTransitionGroup>
          <div className='likeDiv'>
            <span className='likes'>{ !like_count ? '' : like_count + ' '}</span>
            <span className='likeCount'></span>
          </div>
          { caption ? <h6 className='h6-nearbyPhotoCard'>{ caption }</h6> : '' }
          { 
            comment_count ? 
              <Link to={ commentId }>
                <span className='commentCount'>{ !comment_count ? '' : comment_count }</span>
                <span className='comments'>Comments</span>
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

