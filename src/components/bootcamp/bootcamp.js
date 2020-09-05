import React from 'react'
import './bootcamp.css';
import ButtonComponent from '../button/Button';

const BootcampComponent = props => {
    const {bootcamp: {name, description, date}, handleDelete} = props;

    return (
        <div className="card-container">
            <p>{name}</p>
            <p>{description}</p>
            <p>{`${date.toDateString()}`}</p>
            <ButtonComponent
                className="delete"
                buttonTitle="Delete Bootcamp Item"
                handleClick={handleDelete}
            />
        </div>
    )
}

export default BootcampComponent;
