import React from 'react';
import { connect } from 'react-redux';
import LeaderboardCard from './LeaderboardCard';

const Leaderboard = ({ users }) => {
  let leaderboard = [];
  let position = 0;
  Object.values(users).map(user =>
    leaderboard.push({
      id: user.id,
      total: user.questions.length + Object.keys(user.answers).length
    })
  );
  leaderboard.sort((a, b) => b.total - a.total);

  return (
    <>
      {leaderboard.map(user => {
        position++;
        return (
          <LeaderboardCard
            key={user.id}
            id={user.id}
            total={user.total}
            position={position}
          />
        );
      })}
    </>
  );
};

function mapStateToProps({ users }) {
  return {
    users
  };
}

export default connect(mapStateToProps)(Leaderboard);
