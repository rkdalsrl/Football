import React from "react";
import Reply from "./Reply";
import { useLocation } from "react-router-dom"; 


function PlayerRecord(){
    const location = useLocation();

    return(
        <div className="record">
            <div className="record_img">
                <img src={`${process.env.PUBLIC_URL}/assets/players/${location.state?.img2}.png`} />
            </div>
            <div className="record_detailed">
                <div className="nameTag">
                    <span className="name">{location.state.name}</span>
                    <span className="engname">{location.state.engname}</span>
                </div>
                <div className="recordTag">
                    <span className="position">{location.state.position}</span>
                    <span className="matchRecord">{location.state.match}</span>
                </div>
                <div className="clubTag">
                    <span className="club">{location.state.club}</span>
                    <span className="birthdate">{location.state.birthdate}</span>
                </div>
               
                <div className="careerTag">
                    {<span className="career">{location.state?.career?.map((career) => <li>{career}</li>)}</span>}
                    
                </div>
                
            </div>
            
            <Reply />
        </div>
    );
}

export default PlayerRecord;