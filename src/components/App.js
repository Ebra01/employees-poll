import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { handleInitialData } from '../actions/shared';
import Dashboard from './Dashboard';
import NavBar from './NavBar';
import Leaderboard from './Leaderboard';
import Poll from './Poll';
import NewPoll from './NewPoll'
import UserProfile from './UserProfile';
import NotFound from './NotFound';
import Login from './Login';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  return (
    <Router>
      <NavBar />
      <div className='container mt-5'>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/add" element={<NewPoll />} />
          <Route exact path="/leaderboard" element={<Leaderboard />} />
          <Route exact path="/questions/:id" element={<Poll />} />
          <Route exact path="/user/:id" element={<UserProfile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
