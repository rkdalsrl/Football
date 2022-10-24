import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Background from "./component/Background";
import Coach from "./component/Coach";
import Player from "./component/Players";
import Schedule from "./component/Schedule";
import "./css/main.css"
import 'bootstrap/dist/css/bootstrap.css';



function App() {

  return (
    <div className="main">
      
        <header className="top">
          
            <Link className="main_logo" to={"/"}></Link>
            <ul>
                <li><Link to={"player"}>선수단</Link></li>
                <li><Link to={"coach"}>코치진</Link></li>
                <li><Link to={"schedule"}>경기일정</Link></li> 
            </ul>
          
            
        </header>

        <div className="mid">
            
                <Routes>
                    <Route path="coach/*" element={<Coach />}></Route>
                    <Route path="player/*" element={<Player />}></Route>
                    <Route path="schedule/*" element={<Schedule />}></Route>
                    <Route path="/*" element={<Background />}></Route>
                </Routes>
                
        </div>

</div>
    );
  }

export default App;
