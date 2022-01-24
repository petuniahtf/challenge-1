
import React, { useEffect } from "react";
import './carte.css'


const Carte = () =>{
    //const[data, setData]= React.useState([])
    const [state, setState]= React.useState()
    const [excuse, setExcuse] = React.useState()
    // React.useEffect(()=>{
    //     fetch(`https://excuser.herokuapp.com/v1/excuse`)
    //     .then(response => {
    //         console.log(response)
    //         response.json()
    //          })
    //     .then(json => {
    //         console.log(`json  ${json}`)
    //         setData(json)        
    //     })
    // }, [])
    useEffect(()=>{
        fetch(`https://excuser.herokuapp.com/v1/excuse/${state}`) 
        .then(response =>{
            console.log(response)
           return response.json()
        })
        .then(json =>{
            setExcuse(json[0].excuse)
        })
        .catch(error =>{
            console.log(error)
        })
    },[state] )
    
    const handleStateChange=(e)=>{
        e.preventDefault()
        setState(e.target.value)
    }
    return(<>
    <label>Choisi ta catégori</label>
    <select value={state} onChange={handleStateChange}>
        <option value='family'>family</option>
        <option value='office'>office</option>
        <option value='children'>children</option>
        <option value='college'>college</option>
        <option value='party'>party</option>
    </select>
    <div>
        {excuse}   
    </div>
    </>
    )

}

export default Carte;