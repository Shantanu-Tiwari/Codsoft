import React, { useState, useEffect } from 'react';

const LocationComponent = () => {
    const [location, setLocation] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const { latitude, longitude } = position.coords;

                    try {
                        const response = await fetch(
                            `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=b1f95c87a3384da59cf9efce6bd07f35`
                        );
                        const data = await response.json();

                        if (data.results && data.results.length > 0) {
                            const city =
                                data.results[0].components.city ||
                                data.results[0].components.town ||
                                data.results[0].components.village;
                            const country = data.results[0].components.country;

                            setLocation({ city, country });
                        } else {
                            setError('Location not found.');
                        }
                        setLoading(false);
                    } catch (err) {
                        setError('Failed to fetch location data.');
                        setLoading(false);
                    }
                },
                (err) => {
                    const errorMessages = {
                        1: 'Location access denied by the user.',
                        2: 'Location information is unavailable.',
                        3: 'Unable to retrieve your location.',
                    };
                    setError(errorMessages[err.code] || 'An unknown error occurred.');
                    setLoading(false);
                }
            );
        } else {
            setError('Geolocation is not supported by this browser.');
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchLocation();
    }, []);

    if (loading) return <span className="text-gray-600">Loading...</span>;
    if (error) return <span className="text-red-600">{error}</span>;

    return location ? (
        <div className="inline-flex items-center gap-1">
            <span className="font-semibold">{location.city}</span>
            <span>,</span>
            <span>{location.country}</span>
        </div>
    ) : (
        <span className="text-gray-700">Unable to fetch location.</span>
    );
};

export default LocationComponent;
