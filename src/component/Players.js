import React, { useState, useRef, forwardRef  } from "react";
import data from "../data/Player.json";
import { Link } from "react-router-dom";
import Popup from "./Popup";


function Player(){
    const [popup, setPopup] = useState({open: false, callback: false});
    const onSubmit = (e) => {
            setPopup({
                open: true
                });
            return;
        }
    
        

    return (
        <div className="player">
            <Popup open = {popup.open} setPopup = {setPopup} callback = {popup.callback} titleInfo={"PLAYER"} />
            
            <div className="player_img">
                <h1 className="title" value="PLAYER">PLAYER</h1>
            </div>
            <ul>
                {data.player.map((player) => {
                    return  <li key={player.id} onClick={onSubmit}> 
                                <Link to={'playerrecord'}
                                    state= {{
                                        name: player.name,
                                        engname: player.engname,
                                        birthdate: player.birthdate,
                                        club: player.club,
                                        career: player.career,
                                        position: player.position,
                                        img: player.img,
                                        img2: player.img2,
                                        reply: player.reply,
                                        match: player.match
                                }}>
                                
                                <span><img src={`${process.env.PUBLIC_URL}/assets/players/${player.img}.png`}/>  </span>

                                <div className="detail">
                                    <div className="detail_name">
                                        <span className="job">{player.position}</span>
                                        <h1>{player.name}</h1>  <h1 className="engname">{player.engname}</h1>
                                    </div>
                                    
                                    <div className="detail_job">
                                         <span className="birthdate">{player.birthdate}</span>
                                    </div>
                                </div>
                                
                                <div className="redbox"></div>
                                </Link>
                            </li>
                            
                })}
            </ul>
            

        </div>
    );
}

export default Player;