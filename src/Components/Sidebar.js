// Sidebar.js
import React, { useState } from 'react';
import './Sidebar.css'; // Create this CSS file for styling
import logo from '../Components/images/logo.png';
import profile from '../Components/images/profile.jpg';

const Sidebar = () => {
    const [selectedProductFolder, setSelectedProductFolder] = useState('Roadmap');

  const handleProductFolderChange = (event) => {
    setSelectedProductFolder(event.target.value);
  };
  return (
    <div className="sidebar">
      <div className="top-section">
        <img src={logo} alt="Logo" className="logo" />
        <div className="info">
          <span className="company-name">INC</span>
          <span className="company-name">InnovateHub</span>
          </div>
          <img src={profile} alt="Profile" className="profile-pic" />
      </div>

      <div className="teams">
        <div className="team">Designing Team <button>+1</button></div>
        <div className="team">Marketing Team <button>+3</button></div>
        <div className="team">Developing Team <button>+5</button></div>
        <button className="create-team">Create New Team</button>
      </div>

      <div className="folders">
        <h3>Folders</h3>
        <ul>
          <li>Product 
          <select
              value={selectedProductFolder}
              onChange={handleProductFolderChange}
            >
              <option value="Roadmap">Roadmap</option>
              <option value="Feedback">Feedback</option>
              <option value="Performance">Performance</option>
              <option value="Team">Team</option>
              <option value="Analytics">Analytics</option>
            <button className="create-subfolder">Create Subfolder</button>
            </select>
          </li>
          <li>Sales
          <select
              value={selectedProductFolder}
              onChange={handleProductFolderChange}
            >
              <option value="Roadmap">Roadmap</option>
              <option value="Feedback">Feedback</option>
              <option value="Performance">Performance</option>
              <option value="Team">Team</option>
              <option value="Analytics">Analytics</option>
            </select>
          </li>
          <li>Design
          <select
              value={selectedProductFolder}
              onChange={handleProductFolderChange}
            >
              <option value="Roadmap">Roadmap</option>
              <option value="Feedback">Feedback</option>
              <option value="Performance">Performance</option>
              <option value="Team">Team</option>
              <option value="Analytics">Analytics</option>
            </select>
          </li>
          <li>Office
          <select
              value={selectedProductFolder}
              onChange={handleProductFolderChange}
            >
              <option value="Roadmap">Roadmap</option>
              <option value="Feedback">Feedback</option>
              <option value="Performance">Performance</option>
              <option value="Team">Team</option>
              <option value="Analytics">Analytics</option>
            </select>
          </li>
          <li>Legal
          <select
              value={selectedProductFolder}
              onChange={handleProductFolderChange}
            >
              <option value="Roadmap">Roadmap</option>
              <option value="Feedback">Feedback</option>
              <option value="Performance">Performance</option>
              <option value="Team">Team</option>
              <option value="Analytics">Analytics</option>
            </select>
          </li>
        </ul>
      </div>

      <div className="bottom-section">
        <div className="bottom-row">Invite Teammates</div>
        <div className="bottom-row">Help and First Step</div>
        <div classNam='bottom-row'>7 days left on trial<button className="add-billing">Add Billing</button></div>
        
      </div>
    </div>
  );
};

export default Sidebar;
