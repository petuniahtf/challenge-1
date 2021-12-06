import React, {Component} from 'react';
import './surprise.css'
import Petunia from '../image/petunia.png'
import Son from '../image/Happy.mp3'

function Surprise(){
    return <div className="surprise">
        <img src = {Petunia} width='200px'></img>
        <audio src={Son} controls></audio>
    </div>
}

export default Surprise;