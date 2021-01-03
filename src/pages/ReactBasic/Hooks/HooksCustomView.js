import React, { useState, useEffect } from 'react';

const usePerson = (personId) => {
    const [ loading, setLoading ] = useState(true);
    const [ person, setPerson ] = useState(true);
    useEffect(() => {
        setLoading(true);
        fetch(`https://swapi.co/api/people/${personId}/`)
            .then(response => response.json())
            .then(data => {
                setPerson(data);
                setLoading(false);
            })
    }, [personId])
    return [loading, person];
}

export default function HooksCustomView ({ personId }) {
    const [ loading, person ] = usePerson(personId);

    return (
        <div>
            <h3>自定义 Hook</h3>
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
