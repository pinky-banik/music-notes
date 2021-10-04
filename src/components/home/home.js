import React, { useEffect, useState } from 'react';
import Instrument from '../instruments/instument';

const Home = () => {

                const [instruments, setinstruments] = useState([]);
                const myhome=instruments.slice(1,5);
                // fetching data
                useEffect(() => {
                    fetch('../../music.json')
                        .then(res => res.json())
                        .then(data => setinstruments(data));
                }, []);
                return (
                    <div className="music-container">
                        <h1 classNam="text-center">Welcome to Music Notes</h1>
                        <div className="instrument-container"> 
                            {
                                myhome.map(instrument=> <Instrument  key={instrument.key}
                                    instrument={instrument}
                                ></Instrument>  )
                            }
                        </div>         
                <div></div>
            </div>

    );
};

export default Home;