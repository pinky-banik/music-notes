import React, { useEffect, useState } from 'react';
import Instrument from '../instruments/instument';

const Home = () => {
    // const [homes, sethomes] = useState([]);
    // const myhome =homes.slice(6,10);

    // useEffect(() => {
    //     fetch('../../../public/music.json')
    //         .then(res => res.json())
    //         .then(data => sethomes(data));
    // }, []);
    // return (
    //     <div className="home-container">
    //         <div className="instrument-container"> 
    //             {
    //                 instrument.map(instrument=> <Instrument  key={instrument.key}
    //                     instrument={instrument}
    //                 ></Instrument>  )
    //             }
                
                                const [instruments, setinstruments] = useState([]);
                                const myhome=instruments.slice(1,5);

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