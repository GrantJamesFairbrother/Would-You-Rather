import React from 'react';
import { connect } from 'react-redux';
import YourVote from './YourVote';

const ViewQuestionResults = ({
  author,
  optionOne,
  optionTwo,
  avatarURL,
  optionOneVotes,
  optionTwoVotes,
  totalVotes,
  userVote,
  percentageOne,
  percentageTwo
}) => {
  return (
    <div className='offset-md-2 col-md-8 mt-3'>
      <div className='card'>
        <div className='card-header'>Asked by {author}</div>
        <div className='card-body'>
          <div className='row'>
            <div className='border-right p-2 col-4 '>
              <img
                className='card-img-left flex-auto d-none d-lg-block rounded-circle center'
                alt='Thumbnail [150x150]'
                src={avatarURL}
                style={{ width: '150px', height: '150px' }}
              />
            </div>
            <div className='col-md-7 ml-4'>
              <h2 className='mb-3'>Results:</h2>
              <div className='card'>
                {userVote === 'optionOne' && <YourVote />}

                <div
                  className={
                    'card-body' +
                    (userVote === 'optionOne' ? ' bg-primary' : ' bg-light')
                  }>
                  <p>
                    <strong>{optionOne}?</strong>
                  </p>
                  <div
                    className='progress'
                    style={{
                      height: '30px',
                      fontSize: '1.3em'
                    }}>
                    <div
                      className='progress-bar progress-bar-striped bg-success p-3'
                      role='progressbar'
                      style={{ width: `${percentageOne}` }}>
                      {percentageOne}
                    </div>
                  </div>
                  <div className='w-100 text-center mt-2'>
                    <small>
                      {optionOneVotes.length} out of {totalVotes} votes
                    </small>
                  </div>
                </div>
              </div>
              <div className='card mt-2'>
                {userVote === 'optionTwo' && <YourVote />}

                <div
                  className={
                    'card-body' +
                    (userVote === 'optionTwo' ? ' bg-primary' : ' bg-light')
                  }>
                  <p>
                    <strong>{optionTwo}?</strong>
                  </p>
                  <div
                    className='progress'
                    style={{
                      height: '30px',
                      fontSize: '1.3em'
                    }}>
                    <div
                      className='progress-bar progress-bar-striped bg-success p-3'
                      role='progressbar'
                      style={{ width: `${percentageTwo}` }}>
                      {percentageTwo}
                    </div>
                  </div>
                  <div className='w-100 text-center mt-2'>
                    <small>
                      {optionTwoVotes.length} out of {totalVotes} votes
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps({ users, questions, authedUser }, { id }) {
  const authorId = questions[id] && questions[id].author;
  const author = questions[id] && users[authorId].name;
  let optionOne = questions[id] && questions[id].optionOne.text;
  let optionTwo = questions[id] && questions[id].optionTwo.text;
  const avatarURL = questions[id] && users[authorId].avatarURL;
  const optionOneVotes = questions[id] && questions[id].optionOne.votes;
  const optionTwoVotes = questions[id] && questions[id].optionTwo.votes;
  const totalVotes = optionOneVotes.length + optionTwoVotes.length;
  let userVote = null;
  const percentageOne =
    JSON.stringify(Math.round((optionOneVotes.length / totalVotes) * 100)) +
    '%';
  const percentageTwo =
    JSON.stringify(Math.round((optionTwoVotes.length / totalVotes) * 100)) +
    '%';

  if (optionOneVotes.indexOf(authedUser) >= 0) userVote = 'optionOne';
  else if (optionTwoVotes.indexOf(authedUser) >= 0) userVote = 'optionTwo';

  optionOne =
    optionOne[0].toUpperCase() + optionOne.substr(1, optionOne.length);

  optionTwo =
    optionTwo[0].toUpperCase() + optionTwo.substr(1, optionTwo.length);

  return {
    author,
    optionOne,
    optionTwo,
    avatarURL,
    optionOneVotes,
    optionTwoVotes,
    totalVotes,
    userVote,
    percentageOne,
    percentageTwo
  };
}

export default connect(mapStateToProps)(ViewQuestionResults);
