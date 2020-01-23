import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Question = ({ questionOneText, author, authorAvatarURL, id }) => {
  return (
    <div className='card mt-1'>
      <div className='card-header'>{author} Asks...</div>
      <div className='card-body'>
        <div className='row'>
          <div className='border-right p-2 col-5 '>
            <img
              className='card-img-left flex-auto d-none d-lg-block rounded-circle center'
              alt='Thumbnail [150x150]'
              src={authorAvatarURL}
              style={{ width: '150px', height: '150px' }}
            />
          </div>
          <div className='col-md-7 col-12 w-100'>
            <strong>Would you rather...</strong>
            <p className='mt-3'>{questionOneText} OR...</p>
            <Link to={`/question/${id}`} className='btn w-100 btn-primary mt-3'>
              View Poll
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps({ users, questions, authedUser }, { id }) {
  const questionOneText = questions[id].optionOne.text;
  const authorId = questions[id].author;
  const author = users[authorId].name;
  const authorAvatarURL = users[authorId].avatarURL;

  return {
    questionOneText,
    author,
    authorAvatarURL
  };
}

export default connect(mapStateToProps)(Question);
