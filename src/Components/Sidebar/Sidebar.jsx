import React, { useContext, useState } from "react";
import { assets } from "../../Assets/assets";
import   "./Sidebar.css"
import { Context } from "../../Context/Context";

const Sidebar = () => {

    const [extended , setExtended] = useState(false)
    const {onSent , prevPrompt, setRecentPrompt,newChat} = useContext(Context)

    const loading = (prompt)=>{
      setRecentPrompt(prompt)
      onSent(prompt)
      // console.log("prompt slidebar calling", prompt)

    }

  return (
    <div className="Sidebar">
      <div className="Top">
        <img className="menu" onClick={()=>setExtended(prev => !prev)} src={assets.menu_icon} alt="menu icon" />
        <div onClick={()=>newChat()} className="newChat">
          <img src={assets.plus_icon} alt="" />
          {extended?<p>New chat</p>:null}
        </div>
        {extended ? 
        <div className="recent">
        <p className="recentTitle">Recent</p>
        {
          prevPrompt.map((item)=>{
            return(
              <div className="recentEntry">
              <img src={assets.message_icon} alt="message icon" />
              <p onClick={()=>loading(item)}>{item.slice(0,18)}...</p>
            </div>

            )
          })
          
        }
       
       
      </div>
      : null }
        
      </div>

      <div className="Bottom">
        <div className="bottomItem recentEntry">
            <img src={assets.question_icon} alt="" />
            {extended ?<p>Help</p> :null }
        </div>
        <div className="bottomItem recentEntry">
            <img src={assets.history_icon} alt="" />
            {extended ?<p>Activity</p> :null }
        </div>
        <div className="bottomItem recentEntry">
            <img src={assets.setting_icon} alt="" />
            {extended ?<p>Settings</p> :null }
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
