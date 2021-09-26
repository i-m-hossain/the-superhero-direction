import React from 'react';
import './HeroList.css'

const HeroList = (props) => {
    const{name, image, salary} = props.programmer
    return (
        <div className="col-12">
            <div className="row row-cols-3 hero-added p-2 mb-2 d-flex align-items-center ">
                <img src={image} alt="" className="img-rounded"/>
                <h6 >{name}</h6>
                <p>${salary}</p>
            </div>
        </div>
    );
};

export default HeroList;