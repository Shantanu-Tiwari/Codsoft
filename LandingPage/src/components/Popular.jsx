import React from 'react';
import LocationComponent from "./Location.jsx";

function Popular(props) {
    return (
        <div className="container mx-auto px-4 py-8 ">
            <h1 className="text-5xl font-bold leading-tight mb-4">
                Popular events in <LocationComponent />
            </h1>

        </div>
    );
}

export default Popular;
