import React from "react";
import { useLocation } from "react-router-dom"; 
import Reply from "./Reply";

function CoachRecord(){

    const location = useLocation();

    return(
        <div >
            <div className="record">
                <div className="record_img">
                    <img src={`${process.env.PUBLIC_URL}/assets/coachs/${location.state?.img2}.png`} />
                </div>
                <div className="record_detailed">
                    <div className="nameTag">
                        <span className="name">{location.state.name}</span>
                        <p className="engname">{location.state.engname}</p>
                    </div>
                    <div >
                        <span className="job">{location.state.job}</span>
                        <span className="nationality">{location.state.nationality}</span>
                        <span className="birthdate">{location.state.birthdate}</span>
                    </div>
                    <div className="careerTag">
                        {<span className="career">{location.state.career.map((career) => <li>{career}</li>)}</span>}
                    </div>
                    
                </div>
            </div>
           <Reply />
            
        </div>
    );
}

export default CoachRecord;