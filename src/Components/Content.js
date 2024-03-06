// src/components/Content.js
import React from 'react';
import './Content.css';
import gear from '../Components/images/gear-solid.svg';
import message from '../Components/images/window-restore-solid.svg';
import search from '../Components/images/magnifying-glass-solid.svg';

const Content = () => {
  return (
    <div className="content">
      <div className="navbar">
        <div className="product-name">Product</div>
        <div className="nav-buttons">
          <button id="settingsButton"><img src={gear} alt='Gear'/></button>
          <button id="messageButton"><img src={message} alt='Gear'/></button>
          <button id="searchButton"><img src={search} alt='Gear'/>Search</button>
        </div>
      </div>

      <div className="main-content">
        <div class='menus'>
        <button>All brands</button>
        <button>Desk</button>
        <button>Tags</button>
        <button>sort</button>
        <button>Filter</button>
        <div class="last">
            <button>Meeting</button>
            <button>Import/Export</button>
          </div>
        </div>
        <div>
            <table>
            <tr>
                <th>Brand</th>
                <th>Desccription</th>
                <th>Members</th>
                <th>Categories</th>
                <th>Tags</th>
                <th>Next Meeting</th>
                <th>+</th>
            </tr>
            <tr>
                <td><input type="checkbox" />Wix</td>
                <td>Develop a personalized fit...</td>
                <td>Profiles</td>
                <td><button class="purple">Automation</button></td>
                <td><button>#Digital Information</button></td>
                <td><button class="green">in 30 minutes   </button></td>
                <td></td>
            </tr>
            <tr>
                <td><input type="checkbox" />Shopify</td>
                <td>Introduce a cloud-based p...</td>
                <td>Profiles</td>
                <td><button class="violet">E-commerce</button><button class="brown">B2B</button></td>
                <td><button>#OnlineShopping</button><button>#Digital Information</button></td>
                <td><button class="blue">Tomorrow</button></td>
                <td></td>
            </tr>
            <tr>
                <td><input type="checkbox" />MailChimp</td>
                <td>Develop a mobile app aim...</td>
                <td>Profiles</td>
                <td><button class="green">SAAS</button><button class="brown">Mobile</button></td>
                <td><button>#TechInnovation</button></td>
                <td><button class="blue">Tomorrow</button></td>
                <td></td>
            </tr>
            <tr>
                <td><input type="checkbox" />Paypal</td>
                <td>This program could includ...</td>
                <td>Profiles</td>
                <td><button class="green">Marketplace</button></td>
                <td><button>#BuySellOnline</button></td>
                <td><button class="green">in 6 hours</button></td>
                <td></td>
            </tr>
            <tr>
                <td><input type="checkbox" />Disney</td>
                <td>Introduce a B2B solution f...</td>
                <td>Profiles</td>
                <td><button class="light">B2C</button><button class="brown">B2B</button></td>
                <td><button>#Business Partnerships</button></td>
                <td><button class="brown">No contact</button></td>
                <td></td>
            </tr>
            <tr>
                <td><input type="checkbox" />Intercorn</td>
                <td>Implement an AI-drive C...</td>
                <td>Profiles</td>
                <td><button class="purple">Technology</button><button class="green">SAAS</button></td>
                <td><button>#SmartFinance</button></td>
                <td><button class="green">in 1 hour</button></td>
                <td></td>
            </tr>
            <tr>
                <td><input type="checkbox" />Google</td>
                <td>Offer a comprehensive cy...</td>
                <td>Profiles</td>
                <td><button class="brown">Finance</button><button class="purple">Automation</button></td>
                <td><button>#SamrtFinance</button></td>
                <td><button class="green">in 30 minutes</button></td>
                <td></td>
            </tr>
            <tr>
                <td><input type="checkbox" />Evernote</td>
                <td>This could include smart li...</td>
                <td>Profiles</td>
                <td><button class="brown">Transportation</button></td>
                <td><button>#LogisticsTech</button></td>
                <td><button>Next month</button></td>
                <td></td>
            </tr>
            <tr>
                <td><input type="checkbox" />Microsoft</td>
                <td>Launch an advisory service...</td>
                <td>Profiles</td>
                <td><button class="purple">Publishing</button><button class="light">B2C</button></td>
                <td><button>#B2CMarketing</button></td>
                <td><button class="brown">No contact</button></td>
                <td></td>
            </tr>
            <tr>
                <td><input type="checkbox" />Invision</td>
                <td>The tool would analyze tre...</td>
                <td>Profiles</td>
                <td><button class="blue">Web Services</button></td>
                <td><button>#APIntegration</button></td>
                <td><button>Next month</button></td>
                <td></td>
                </tr>
                <tr>
                <td class="last-row">10 count</td>
                <td class="last-row">+Add Calculation</td>
                <td class="last-row">+Add Calculation</td>
                <td class="last-row">+Add Calculation</td>
                <td class="last-row">+Add Calculation</td>
                </tr>
            </table>
        </div>
        <div class="bottom">
        <   button>3 selected</button>
            <button>Archieve</button>
            <button>Delete</button>
            <button>More</button>
        </div>
      </div>
    </div>
  );
};

export default Content;
