import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { handleInitialData } from '../actions/shared';
import Dashboard from './Dashboard';
import Login from './Login';
import NavBar from './NavBar';
import Leaderboard from './Leaderboard';
import Poll from './Poll';
import NewPoll from './NewPoll'
import UserProfile from './UserProfile';

function App() {
  const dispatch = useDispatch();
  const authedUser = useSelector((state) => state.authedUser);

  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  return (
    <Router>
      <NavBar />
      <div className='container mt-5'>
        {authedUser === null ? (
          <Login />
        ) : (
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route exact path="/add" element={<NewPoll />} />
            <Route exact path="/leaderboard" element={<Leaderboard />} />
            <Route exact path="/questions/:id" element={<Poll />} />
            <Route exact path="/user/:id" element={<UserProfile />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
