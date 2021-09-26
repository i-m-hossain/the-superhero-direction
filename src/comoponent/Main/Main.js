import React, { useEffect, useState } from 'react';
import Heros from '../Heros/Heros';
import './Main.css'
const Main = () => {
    const [heroes, setHeroes] = useState([])
    useEffect(()=>{
        fetch('/fakeData.json')
            .then(res => res.json())
            .then(data => setHeroes(data))
    },[])

    return (
        <div className="row">
            <div className="col-md-8"> 
                <div className="row row-cols-3">
                    {
                        heroes.map(hero => <Heros hero={hero}></Heros>)
                    }
                </div>
                
            </div>
           <div className="col-md-4">

           </div>
        </div>
    );
};

export default Main;