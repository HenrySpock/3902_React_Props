// Tweet.js
import React from 'react';

function Tweet({ username, name, date, message }) {
    return (
        <div className="tweet">
            <h2>{name} (@{username})</h2>
            <p>{message}</p>
            <small>{date}</small>
        </div>
    );
}

export default Tweet;
