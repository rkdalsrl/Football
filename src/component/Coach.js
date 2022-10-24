import React, { useState, useRef, forwardRef  } from "react";
import { Link } from "react-router-dom";
import data from "../data/Coach.json";
import Popup from "./Popup";



function Coach(){   
    const [popup, setPopup] = useState({open: false, callback: false});
    const onSubmit = (e) => {
            setPopup({
                open: true
                })
            return;
        }
        
    const titleInfo = useRef();

    return (
        
        <div className="coach">
            <Popup open = {popup.open} setPopup = {setPopup} callback = {popup.callback}/>
            <div className="coach_img">
                <h1 className="title" ref={titleInfo} value="coach">COACH</h1>
            </div>
            <ul>
                {data.coach.map((coach) => {
                    return <li key={coach.id} onClick={onSubmit}>
                                <Link to={'coachrecord'} 
                                        state={{
                                            name:coach.name,
                                            engname: coach.engname,
                                            job: coach.job,
                                            img: coach.img,
                                            img2: coach.img2,
                                            reply: coach.reply,
                                            birthdate: coach.birthdate,
                                            career: coach.career,
                                            nationality: coach.nationality
                                        }} >
                                            
                                <span><img src={`${process.env.PUBLIC_URL}/assets/coachs/${coach.img}.png`} /> </span> 

                                <div className="detail">
                                    <div className="detail_name">
                                        <span className="job">{coach.job}</span>
                                        <h1>{coach.name}</h1>  <h1 className="engname">{coach.engname}</h1>
                                    </div>
                                    <div className="detail_job">
                                         <span className="birthdate">{coach.birthdate}</span>
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

export default Coach;