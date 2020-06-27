import React from 'react';
import { useHistory } from 'react-router-dom';

export const AboutPage: React.FC = () => {
    const history = useHistory();
    return (
        <>
            <h1>Страница AboutPage</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, voluptatem obcaecati ducimus aspernatur commodi quasi recusandae voluptatum cum culpa a.</p>
            <button className="btn" onClick={() => history.push('/')}>Обратно к списку дел</button>
        </>
    )
}