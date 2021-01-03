import React, { useEffect, useState } from 'react';

export default function UseEffectView ({ personId }) {
    const [ loading, setLoading ] = useState(true);
    const [ person, setPerson ] = useState({})

    useEffect(() => {
        setLoading(true);
        fetch(`https://swapi.co/api/people/${personId}/`)
            .then(response => response.json())
            .then(data => {
                setPerson(data);
                setLoading(false);
            });
    }, [personId]);

    return (
        <div>
            <h3>useEffect</h3>
            {
                loading ? <p>Loading...</p> : (
                    <div>
                        <p>You're viewing: {person.name}</p>
                        <p>Height: {person.height}</p>
                        <p>Mass: {person.mass}</p>
                    </div>
                )
            }
        </div>
    )
}
