import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Dashboard.css';

function Dashboard () {
  return (
    <div className="dashboard">
      <h2>Emoji Critic — всё об эмодзи</h2>
      <p>
        #1 среди авторов обзоров на эмодзи в этом году!
      </p>
      {/* <Link to="/reviews"> */}
      <Link to="/learning-react-router/reviews">
        Нажмите, чтобы увидеть самые свежие ревью!
      </Link>
      <br />

    </div>
  )
}

export default Dashboard;