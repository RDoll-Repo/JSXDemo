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
            <input style={{border: '3px solid red', marginBottom: '10px'}} type={inputType} min={5} />
            <div>
                <textarea autoFocus></textarea>
            </div>
            <input placeholder='placeholder text'/>
        </div>
    );
}

export default App;