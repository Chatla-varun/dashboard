import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Sample.css'; // Import Sample.css for component styling

const Sample = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { data } = location.state;

  const handleClose = () => {
    // Navigate back to the previous location (e.g., issues page)
    navigate(-1);
  };

  return (
    <div className="sample-container">
      <div className="sample-header">
        <h2>Ticket Details</h2>
        <button className="close-button" onClick={handleClose}>
          Close
        </button>
      </div>
      <div className="ticket-details">
        <p><strong>Name:</strong> {data.name}</p>
        <p><strong>Email:</strong> {data.email}</p>
        <p><strong>Issue Type:</strong> {data.issueType}</p>
        <p><strong>Issue:</strong></p>
        <div className="issue-description">
          <p>{data.issue}</p>
        </div>
        <p><strong>Status:</strong> {data.status}</p>
      </div>
      <textarea
        rows="10"
        cols="30"
        placeholder="Enter your notes here..."
        className="response-input"
      />
    </div>
  );
};

export default Sample;
