import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

function Leaderboard() {
  const authedUser = useSelector((state) => state.authedUser);
  const users = useSelector((state) => state.users);
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    if (authedUser == null || authedUser === undefined) {
      navigate("/login", { state: {from: location.pathname}});
    }
  }, [navigate, location, authedUser])

  const sortedUsers = Object.values(users).sort((a, b) => {
    const scoreA = Object.keys(a.answers).length + a.questions.length;
    const scoreB = Object.keys(b.answers).length + b.questions.length;
    return scoreB - scoreA;
  })

  return (
    <div className="container mt-4">
      <h2 className="page-title text-center mb-5">Leaderboard:</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>User</th>
            <th>Total Polls Answered</th>
            <th>Total Polls Created</th>
            <th>Total Points</th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map((user) => (
            <tr key={user.id}>
              <td>
                <div data-testid="user-id" className="d-flex align-items-center">
                  <img src={user.avatarURL} alt={user.name} className="user-avatar" style={{ width: "60px", height: "60px" }}/>
                  <span className="ml-2">{user.name} {user.id === authedUser ? "(Me)" : ""}</span>
                </div>
              </td>
              <td>{Object.keys(user.answers).length}</td>
              <td>{user.questions.length}</td>
              <td>{Object.keys(user.answers).length + user.questions.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;
