import React from 'react';
import "./Subscribe.css";

const Subscribe = () => {
    return (
        <div className="Subscribe">
            <h2>Like our news?
                <br/>Subscribe to our newsletter</h2>
            <form method="post">
                <label for="name">Name </label>
                <input type="text" title="name" 
                    placeholder="Enter your name" required />
                    <br/>
                <label for="surname">Surname </label>
                    <input type="text" title="surname" 
                        placeholder="Enter your surname" required />
                        <br />
                    <label for="email">Email </label>
                    <input type="email" title="email" 
                        placeholder="Enter your email" required />
                        <br/>
                    <label for="postcode">Postcode </label>
                    <input type="text" title="postcode" 
                        placeholder="Enter your postcode" required />
                        <br />
                        <br/>
                    <label for="newsletter">Please send me the newsletter </label>
                    <input type="submit" value="Subscribe">
                        </input>
                    <br />
            </form>
        </div>
    );
};

export default Subscribe;