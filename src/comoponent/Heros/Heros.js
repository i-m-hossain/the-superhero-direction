import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Heros.css'

const Heros = (props) => {
    const{name, age, company, image, salary, phone} =props.hero
    return (
        <div className="card-group col ">
            <div className="card m-2 mt-4 hero-added">
                <img className="card-img-top hero-img rounded-circle mx-auto pt-2" src={image} alt="Card image cap"/>
                <div className="card-body text-center">
                    <h5 className="card-title"><span className="title">{name} </span></h5>
                    <p className="card-text"> <span className="title">Age: </span> {age}</p>
                    <p className="card-text"><span className="title"> Company: </span>{company}</p>
                    <p className="card-text"> <span className="title">Phone: </span> {phone}</p>
                    <p className="card-text"> <span className="title">Salary: </span> ${salary}</p>
                </div>
                <div className="card-footer text-button ">
                    <p className="text-center btn-color" onClick={() => props.handleAddProgrammer(props.hero)}>
                        <FontAwesomeIcon icon={faPlus}/> Add to Team
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Heros;