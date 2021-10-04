import React, { useEffect, useState } from 'react';
import About from '../about/about';
import Contact from '../contact/contact';
import Instrument from "../instruments/instument";
import "./music.css";
const Music = () => {
    const [instruments, setinstruments] = useState([]);

    useEffect(() => {
        fetch('../../music.json')
            .then(res => res.json())
            .then(data => setinstruments(data));
    }, []);
    return (
        <div className="music-container">
            <div className="instrument-container"> 
                {
                    instruments.map(instrument=> <Instrument  key={instrument.key}
                        instrument={instrument}
                    ></Instrument>  )
                }
            </div>
            <div>
                <About></About>
            </div>
            <div>
                <Contact></Contact>
            </div>
        </div>

    );
};

export default Music;