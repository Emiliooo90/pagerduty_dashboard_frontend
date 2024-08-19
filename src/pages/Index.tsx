import React from 'react';
import './Index.css';

const Index: React.FC = () => {
    return (
        <div className="container">
            <div className="card">
                <h2>Autocomplete Feature</h2>
                <p>Autocomplete is a feature that predicts the rest of a word a user is typing. It enhances user experience by providing suggestions based on the input.</p>
            </div>
            <div className="card">
                <h2>Benefits</h2>
                <p>Autocomplete helps in reducing typing effort, improving accuracy, and speeding up the data entry process.</p>
            </div>
            <div className="card">
                <h2>Implementation</h2>
                <p>Implementing autocomplete involves using algorithms to predict and suggest possible completions based on the current input.</p>
            </div>
        </div>
    );
};

export default Index;
