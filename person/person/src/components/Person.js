// import React from 'react';

// function Person(props) {
//     let nameDisplay = props.name.length > 8 ? props.name.substring(0, 6) + "..." : props.name;

//     return (
//         <div className="person">
//             <p>Learn some information about this person</p>
//             <p>Name: {nameDisplay}</p>
//             <p>Age: {props.age}</p>

//             {props.age >= 18 ? (
//                 <h3>please go vote!</h3>
//             ) : (
//                 <h3>you must be 18</h3>
//             )}

//             <ul>
//                 {props.hobbies.map(hobby => (
//                     <li key={hobby}>{hobby}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default Person;

import React from 'react';

function Person(props) {
    const nameDisplay = props.name.length > 8 ? props.name.substring(0, 6) + "..." : props.name;
    const randomHobby = props.hobbies[Math.floor(Math.random() * props.hobbies.length)];

    return (
        <div>
            <p>Learn some information about this person</p>
            <p>Name: {nameDisplay}</p>
            <p>Age: {props.age}</p>
            <h3>{props.age >= 18 ? "please go vote!" : "you must be 18"}</h3>
            <ul>
                <li>{randomHobby}</li>
            </ul>
        </div>
    );
}

export default Person;
