import React, { useEffect, useState } from 'react';
import HeroList from '../HeroList/HeroList';
import Heros from '../Heros/Heros';
import './Main.css'
const Main = () => {
    const [heroes, setHeroes] = useState([])
    const [programmers, setProgrammers] =useState([])
    const [cost, setCost] = useState(0)

    // fetching fake json data
    useEffect(()=>{
        fetch('/fakeData.json')
            .then(res => res.json())
            .then(data => setHeroes(data))
    },[])
    const handleAddProgrammer =(programmer) =>{
        // validation for duplicate entry of programmers
        for(const person of programmers){
            if(person === programmer){
                return;
            }
        }
        //after button click updating programmers and cost
        const newProgrammers =[...programmers, programmer];
        const newCost = cost + programmer.salary
        setProgrammers(newProgrammers)
        setCost(newCost)
    }
    return (
        <div className="row g-5">
            <div className="col-md-8"> 
                <div className="row row-cols-3">
                    {
                        heroes.map(hero => <Heros hero={hero} key={hero.id} handleAddProgrammer={handleAddProgrammer}></Heros>)
                    }
                </div>
            </div>
            <div className="col-md-4 border-left">
                <div className="row main-right ms-3 mt-4 p-4">
                    <div className="col-12 ">
                        <p className="text-center  p-2 nav-bg rounded">Programming Hero Team</p>
                        <p>Programmers Added: {programmers.length}</p> 
                        <p>Total cost: ${cost}</p> 
                    </div>
                    {
                        programmers.map(programmer => <HeroList programmer={programmer} key={programmer.id}></HeroList>
                        )
                    }
                </div>     
           </div>
        </div>
    );
};

export default Main;