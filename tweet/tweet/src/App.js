// App.js
import React from 'react';
import Tweet from './components/Tweet';

function App() {
    return (
        <div className="app">
            <Tweet 
                username="johnDoe" 
                name="John Doe" 
                date="15th Aug 2023" 
                message="This is my first tweet!" 
            />
            <Tweet 
                username="janeSmith" 
                name="Jane Smith" 
                date="14th Aug 2023" 
                message="Hello, Twitter!" 
            />
            <Tweet 
                username="aliceW" 
                name="Alice Wonderland" 
                date="10th Aug 2023" 
                message="Just started using this app, looks fun!" 
            />
        </div>
    );
}

export default App;
