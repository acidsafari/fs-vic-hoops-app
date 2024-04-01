import React from 'react';
import Resources from "./Resources";
import Stats from "./Stats";
import './ResourceHub.css';

const ResourceHub = () => {
    return (
        <div className="ResourceHub">
            <h1>Resource Hub</h1>
            <div className='MainAside'>
                <Resources />
                <Stats />
            </div>
        </div>
    );
};

export default ResourceHub;