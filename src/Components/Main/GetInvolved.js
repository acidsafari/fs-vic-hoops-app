import React from 'react';

const GetInvolved = () => {
    return (
        <div className="GetInvolved">
            <h1>Get Involved</h1>
            <div className='Tabsystem'>
                <button className="tablink" onclick="openPage('Officials', this, 'rgb(242, 125, 7)')">Officials</button>
                <button className="tablink" id="defaultOpen" onclick="openPage('Coaches', this, 'rgb(237, 159, 81)')">Coaches</button>
                <button className="tablink" onclick="openPage('Volunteers', this, 'gray')">Volunteers</button>

                <div id="Officials" className="tabcontent">
                <h3>Officials</h3>
                <p>whether you are refereeing or keeping score ..</p>
                </div>

                <div id="Coaches" className="tabcontent">
                <h3>Coaches</h3>
                <p>Bring their dreams to life.</p>
                </div>

                <div id="Volunteers" className="tabcontent">
                <h3>Volunteers</h3>
                <p>There are many ways to help out off the pitch.</p>
                </div>
            </div>
        </div>
    );
};

export default GetInvolved;