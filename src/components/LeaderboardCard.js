import React from 'react';
import { connect } from 'react-redux';

const LeaderboardCard = ({
  name,
  avatarURL,
  numQuestions,
  numAnswers,
  total,
  position
}) => {
  return (
    <div className='col-md-10 offset-md-1 col-12 mt-1'>
      <div
        className='card flex-md-row mb-4 shadow-sm h-md-250'
        style={{
          background:
            position === 1
              ? '#d4af37'
              : position === 2
              ? '#c0c0c0'
              : position === 3
              ? '#cd7f32'
              : 'none'
        }}>
        <img
          className='card-img-left flex-auto d-none d-lg-block rounded-circle m-3'
          alt='Thumbnail [200x200]'
          src={avatarURL}
          style={{ width: '200px', height: '200px' }}
        />
        <div className='card-body d-flex flex-column align-items-start'>
          <h1 className='d-inline-block mb-2 text-primary'>{name}</h1>
          <h3 className='mb-0'>Answered Questions: {numAnswers}</h3>
          <hr />
          <h3 className='mb-0'>Created Questions: {numQuestions}</h3>
        </div>
        <div
          className='card col-md-3 col-12 p-0 m-1'
          style={{
            background:
              position === 1
                ? '#d4af37'
                : position === 2
                ? '#c0c0c0'
                : position === 3
                ? '#cd7f32'
                : 'none'
          }}>
          <div className='card-header bg-primary white-text '>
            <h5 className='text-center'>Score</h5>
          </div>
          <div className='card-body '>
            <div className='row'>
              <div
                className='badge badge-primary badge-pill p-md-5 center'
                style={{
                  fontSize: '2em'
                }}>
                {total}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps({ users }, { id }) {
  const name = users[id].name;
  const avatarURL = users[id].avatarURL;
  const numQuestions = users[id].questions.length;
  const numAnswers = Object.keys(users[id].answers).length;
  return {
    name,
    avatarURL,
    numQuestions,
    numAnswers
  };
}

export default connect(mapStateToProps)(LeaderboardCard);
