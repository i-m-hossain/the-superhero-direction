import React, { useEffect, useState } from 'react';
import AddedHeroes from '../AddedHeroes/AddedHeroes';
import Heros from '../Heros/Heros';
import './Main.css'
const Main = () => {
    const [heroes, setHeroes] = useState([])
    const[programmers, setProgrammers] =useState([])
    useEffect(()=>{
        fetch('/fakeData.json')
            .then(res => res.json())
            .then(data => setHeroes(data))
    },[])
    const handleAddProgrammer =(programmer) =>{
        console.log(programmer);
        const newProgrammers =[...programmers, programmer]
        setProgrammers(newProgrammers)
    }
    return (
        <div className="row g-5">
            <div className="col-md-8"> 
                <div className="row row-cols-3">
                    {
                        heroes.map(hero => <Heros hero={hero} handleAddProgrammer={handleAddProgrammer}></Heros>)
                    }
                </div>
                
            </div>
            <div className="col-md-4 border-left">
                <div className="row main-right ms-3 mt-4 p-4">
                    <div className="col-12 ">
                        <p>Programmers Added: {programmers.length}</p>
                    </div>
                    {
                        programmers.map(programmer => <AddedHeroes programmer={programmer}></AddedHeroes>)
                    }
                </div>     
           </div>
        </div>
    );
};

export default Main;