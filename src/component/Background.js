import React from "react";
import { Link } from "react-router-dom";
function Background(){

    function handlePlayer(){
        window.location.href = "./player";
    }
    function handleCoach(){
        window.location.href = "./coach";
    }
    function handleSchedule(){
        window.location.href = "./schedule";
    }
  

    return(
       <div className="bacakground">
            <div className="players_part">
                <div className="backdrop">
                <p className="bg_text" onClick={handlePlayer}>선수단</p> 
                </div>
            </div>
            <div className="coachs_part">
                <div className="backdrop">
                    <p className="bg_text" onClick={handleCoach}>코치진</p> 
                </div>
            </div>
            <div className="schedules_part">
                <div className="backdrop">
                    <p className="bg_text" onClick={handleSchedule}>경기일정</p> 
                </div>
            </div>
       </div>
    );
}

export default Background;