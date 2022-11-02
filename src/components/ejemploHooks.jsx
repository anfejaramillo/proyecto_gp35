import React, { useState } from "react";

function EjemploHooks() {
    // Declara una nueva variable de estado, la cual llamaremos
    //“count”
    const [count, setCount] = useState(0);
    return (
        <div className="d-flex text-center mx-auto">
            <div>
                <p>You clicked {count} times</p>
                <button
                    className="btn btn-success"
                    onClick={() => setCount(count + 1)}
                >
                    Click me
                </button>
            </div>
        </div>
    );
}

export default EjemploHooks;
