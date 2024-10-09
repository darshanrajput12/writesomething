import { createContext, useState } from "react";
import run from "../Config/gemini";



export const Context = createContext()

const ContextProvider = (props)=>{
    
    const [input, setInput] = useState("");
    const [recentPrompt , setRecentPrompt] = useState("");
    const [prevPrompt, setPrevPrompt] =useState([]);
    const [showResult , setShowResult] = useState(false);
    const [loading , setLoading] = useState(false);
    const [resultData, setResultData] = useState(" ");


    const newChat = ()=>{
        setLoading(false);
        setShowResult(false);
    }

    


    const delay = (index , nextWord)=>{

        setTimeout(()=>{
            setResultData(prev => prev+nextWord)

        },75*index)
    }


    




    const onSent = async (prompt)=>{
        setResultData("")
        setLoading(true)
        setShowResult(true)
        let response;
       
        if(prompt !== undefined){
            setRecentPrompt(prompt)
            response = await run(prompt);
        }
        else{
            setRecentPrompt(input)
            response = await run(input);
            setPrevPrompt(prev=>[...prev, input])

        }
        
        
        let newResponse = response.split("**")
        let newResponse1 = "";

        for(let i=0; i<newResponse.length; i++){
            if(i%2==0){
                newResponse1 += newResponse[i]

            }
            else{
                newResponse1 += "<b>" + newResponse[i] + "</b>"
            }

        }
        let newResponse2 = newResponse1.split("*").join("</br>")

        let newResponseArray = newResponse2.split(" ")

        for(let i=0;i<newResponseArray.length;i++)
            {
                let nextWord = newResponseArray[i]
                delay(i, nextWord + " ")
               
        }


        
        setLoading(false)
        setInput("")

    }

   

    const contextValue = {
        input, setInput , recentPrompt , setRecentPrompt, prevPrompt,setPrevPrompt,showResult,loading,resultData, onSent,newChat
    }

    return(
        <Context.Provider value={contextValue}>
        {props.children}
        
        </Context.Provider>
    )

}

export default ContextProvider;
