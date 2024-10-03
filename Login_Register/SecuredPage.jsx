import React from "react";

function SecuredPage({ user, onLogout }) {
  return (
    <div className="container">
      <h2>Welcome, {user}!</h2>
      <p className="secured-page">This is a secured page. You have successfully logged in.</p>
      <button className="logout-btn" onClick={onLogout}>Logout</button>
    </div>
  );
}

export default SecuredPage;
