import React from 'react';
import './Players.css'; 


const Players = () => {

    return (
        <div className="Players">
            <h1>Let's Play!</h1>
            <button className="tablink" onclick="openPage('Looking', this, 'rgb(242, 125, 7)')">Looking to Play?</button>
            <button className="tablink" id="defaultOpen" onclick="openPage('Started', this, 'rgb(237, 159, 81)')">Getting Started</button>
            <button className="tablink" onclick="openPage('Parents', this, 'gray')">Coach your Parents</button>

            <div id="Looking" className="tabcontent">
                <h3>Looking to Play?</h3>
                <p>Home is where the heart is..</p>
            </div>

            <div id="Started" className="tabcontent">
                <h3>Getting Started</h3>
                <p>Some news this fine day!</p>
            </div>

            <div id="Parents" className="tabcontent">
                <h3>Coach your Parents</h3>
                <p>Get in touch, or swing by for a cup of coffee.</p>
            </div>
        </div>
    );
};

export default Players;