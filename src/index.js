// Step 1: Import React and ReactDOM Librarires
import React from 'react';
import ReactDOM from 'react-dom/client';

// Step 2: Get a reference to the div with ID root
const el = document.getElementById('root');

// Step 3: Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// Step 4: Create a component
function App() {
    let message = 'Bye there!';
    let name = 'Roland';
    let age = 26
    const inputType = 'number';

    if(Math.random() > 0.5) {
        message = 'Hello there!';
    }

    return (
        <div>
            <h1>{message}</h1>
            <h1>{new Date().toLocaleTimeString()}</h1>
            <h1>My name is {name}. I am {age} years old.</h1>
            <input style={{border: '3px solid red'}} type={inputType} min={5} />
        </div>
    );
    //return <h1>{message}</h1>;
}

// Step 5: Show the component on the screen
root.render(<App />);