import React from 'react';
import Person from './components/Person';

function App() {
    return (
        <div className="App">
            <Person 
                name="Alexander" 
                age={25} 
                hobbies={["reading", "hiking", "swimming"]}
            />
            <Person 
                name="Sam" 
                age={16} 
                hobbies={["drawing", "singing", "yoga"]}
            />
            <Person 
                name="ElizabethWarren" 
                age={40} 
                hobbies={["politics", "writing", "public speaking"]}
            />
        </div>
    );
}

export default App;
