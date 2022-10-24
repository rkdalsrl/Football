import React from "react";
import data from "../data/Match.json";
function Schedule(){
    
    return(
        <div>
            <div className="schedule_img">
                <h1 className="title"  value="schedule">SCHEDULE</h1>
            </div>
            <div className="match">
                <img src={`${process.env.PUBLIC_URL}/assets/nations/${data.nation[0].img}.png`} className="nation" />
                <div className="schedule_text">
                    <div className="nation_name">{data.nation[0].name} VS {data.nation[1].name}</div> 
                    <div className="stadium">{data.match[0].stadium}</div> 
                    <div className="schedule">{data.match[0].schedule}</div> 
                </div> 
                <img src={`${process.env.PUBLIC_URL}/assets/nations/${data.nation[1].img}.png`} /> 
            </div>
            
            <div className="match">
                <img src={`${process.env.PUBLIC_URL}/assets/nations/${data.nation[0].img}.png`} className="nation" />
                <div className="schedule_text">
                    <div className="nation_name">{data.nation[0].name} VS {data.nation[3].name}</div> 
                    <div className="stadium">{data.match[1].stadium}</div> 
                    <div className="schedule">{data.match[1].schedule}</div> 
                </div> 
                <img src={`${process.env.PUBLIC_URL}/assets/nations/${data.nation[3].img}.png`} /> 
            </div>

            <div className="match">
                <img src={`${process.env.PUBLIC_URL}/assets/nations/${data.nation[0].img}.png`} className="nation" />
                <div className="schedule_text">
                    <div className="nation_name">{data.nation[0].name} VS {data.nation[2].name}</div> 
                    <div className="stadium">{data.match[2].stadium}</div> 
                    <div className="schedule">{data.match[2].schedule}</div> 
                </div> 
                <img src={`${process.env.PUBLIC_URL}/assets/nations/${data.nation[2].img}.png`} /> 
            </div>

            
        </div>
    );
}

export default Schedule;