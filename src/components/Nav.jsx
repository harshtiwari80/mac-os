// import React from 'react';
// import './nav.scss';
// import DateTime from './DateTime';

// const Nav = () => {
//   return (
//     <nav>
//       <div className="left">
//         <div className="apple-icon">
//             <img src="./navbar-icons/apple.svg" alt="" />
//         </div>

//         <div className="nav-items">
//           <p>Harsh Tiwari</p>
//         </div>
//         <div className="nav-items">
//           <p>File</p>
//         </div>  
//         <div className="nav-items">
//           <p>Window</p>
//         </div>
//         <div className="nav-items">
//           <p>Terminal</p>
//         </div>          
//       </div>
//       <div className="right">
//         <div className="nav-icons">
//           <img src="./navbar-icons/wifi.svg" alt="" />
//         </div>
//         <div className="nav-item">
//             <DateTime />
//         </div>
//       </div>
//     </nav>
//   )
// }

// export default Nav;


import React, { useState } from 'react';
import './nav.scss';

const Nav = () => {
  const [dark, setDark] = useState(true);
  const [spotlight, setSpotlight] = useState(false);

  return (
    <>
      <nav>
        <div className="left">
          <div className="apple-icon">
            <img src="./navbar-icons/apple.svg" alt="" />
          </div>

          <div className="nav-items"><p>Harsh Tiwari</p></div>
          <div className="nav-items"><p>File</p></div>
          <div className="nav-items"><p>Window</p></div>
          <div className="nav-items"><p>Terminal</p></div>
        </div>

        <div className="right">
          {/* Spotlight */}
          <div className="nav-icons" onClick={() => setSpotlight(true)}>
            🔍
          </div>

          {/* Wifi */}
          <div className="nav-icons">
            <img src="./navbar-icons/wifi.svg" alt="" />
          </div>

          {/* Battery */}
          <div className="nav-icons battery">
            🔋 100%
          </div>

          {/* Dark Mode Toggle */}
          <div 
            className="nav-icons" 
            onClick={() => setDark(!dark)}
          >
            {dark ? "🌙" : "☀️"}
          </div>
        </div>
      </nav>

      {/* Spotlight Popup */}
      {spotlight && (
        <div className="spotlight" onClick={() => setSpotlight(false)}>
          <div className="spotlight-box" onClick={(e) => e.stopPropagation()}>
            <input placeholder="Search apps, files..." autoFocus />
          </div>
        </div>
      )}
    </>
  )
}

export default Nav;