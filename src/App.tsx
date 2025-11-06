import React from 'react';
import './App.css';
import logo from '../static/personaLogo.png'; // replace with your image path

function App() {
    return (
        <div className="App">
            {/* Image at the top */}
            <img src={logo} alt="Logo" style={{ maxWidth: '100%', height: 'auto' }} />

            {/* COMING SOON text */}
            <h1>COMING SOON</h1>

            {/* Contact info */}
            <div className="contact-info">
                423814 РТ, г. Набережные Челны, Хлебный проезд 21.<br />
                Тел. Горячей линии в РФ: 8 800 600 5635<br />
                info@personatat.com<br />
                personatat.com<br />
                Логинов Сергей Александрович
            </div>
        </div>
    );
}

export default App;
