import React, { useContext } from "react";
import "./Main.css";
import { assets } from "../../Assets/assets";
import { Context } from "../../Context/Context";

function Main() {
  const {
    input,
    setInput,
    recentPrompt,
    prevPrompt,
    setPrevPrompt,
    showResult,
    loading,
    resultData,
    onSent,
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.cr7} alt="User" />
      </div>
      <div className="mainContainer">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Darshan...</span>
              </p>
              <p>How can i help you</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>What is special about the news</p>
                <img src={assets.bulb_icon} alt="bilb icon" />
              </div>
              <div className="card">
                <p>Which place is better to travel this summer</p>
                <img src={assets.compass_icon} alt="bilb icon" />
              </div>
              <div className="card">
                <p>What should i reply for greeting message</p>
                <img src={assets.message_icon} alt="bilb icon" />
              </div>
              <div className="card">
                <p>What is special about coding</p>
                <img src={assets.code_icon} alt="bilb icon" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="resultTitle">
              <img src={assets.user_icon} alt="user" />
              <p>{recentPrompt}</p>
            </div>
            <div className="recentResult">
              <img src={assets.gemini_icon} alt="gemini" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="mainBottom">
          <div className="searchBox">
            <input
              type="Search"
              onChange={(e) => setInput(e.target.value)}
              value={input}
              placeholder="Enter prompt here"
            />
            <div>
              <img src={assets.gallery_icon} alt="gallery" />
              <img src={assets.mic_icon} alt="mic" />
              {input ? (
                <img
                  className="sendBtn"
                  onClick={() => onSent()}
                  src={assets.send_icon}
                  alt="send"
                />
              ) : null}
            </div>
          </div>
          <p className="bottomPara">
            Gemini may display inaccurate info, including about people, so
            double-check its responses. Your privacy & Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
