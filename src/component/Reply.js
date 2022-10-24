import React, { useState } from "react";
import { useLocation } from "react-router-dom"; 

function Reply(){
    const location = useLocation();
    const [reply, setReply] = useState(location.state.reply);

    function handleSubmit(){  
        setReply([location.state.reply, location.state.reply.push(document.getElementById("submit").value)]);
        document.getElementById("submit").value ='';
    }

    function enterkey(e){
        if (e.key === 'Enter') {
            handleSubmit();
        }
    }

    return (
        
        <div className="reply">
            <div className="reply_text">
                <input type="text" id="submit" size='50' maxLength='100' placeholder="응원의 댓글을 달아주세요!" onKeyPress={enterkey}/>
                <button className="button" onClick={handleSubmit}>등록</button>
                
            </div>
            <ul className="list_reply">
                {location.state.reply.map((data)=>{return <li>{data}</li> })}
            </ul>
        </div>
        
    );
}

export default Reply;