// Issues.js
import React from 'react';
import Ticket from './Ticket';
import './Issues.css'; // Import Issues.css for table styling

function Issues({ tickets, updateStatus }) {
  if (!tickets || !Array.isArray(tickets) || tickets.length === 0) {
    return <div className="issues-container">No issues reported yet.</div>;
  }

  const handleStatusUpdate = (ticketId, newStatus) => {
    updateStatus(ticketId, newStatus);
  };

  // Function to generate sequential ticketId starting from 1000
  const generateTicketId = (index) => {
    return 1000 + index;
  };

  return (
    <div className="issues-container">
      <h2>Cloud4coolkids - Issues Reported by IT Team</h2>
      <table className="issues-table">
        <thead>
          <tr>
            <th>Ticket ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Issue Type</th>
            <th>Issue</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket, index) => (
            <Ticket
              key={ticket.id}
              ticket={{
                ...ticket,
                ticketId: generateTicketId(index) // Generate sequential ticketId starting from 1000
              }}
              onUpdateStatus={handleStatusUpdate}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Issues;
