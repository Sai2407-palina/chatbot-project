import {useState} from "react";
import { Chatbot } from "supersimpledev";
export function ChatInput({chatMessages,setChatMessages}){
        const[inputText,setInputText]=useState('');
        function ChatText(event){
           setInputText(event.target.value);
        }
        function clickButton(){
           const newChatMessage=[
            ... chatMessages, 
            {
                message:inputText,
                sender:'user',
                id:crypto.randomUUID()
            }
           ]
           setChatMessages(newChatMessage)
           const response=Chatbot.getResponse(inputText);
          setChatMessages([
            ... newChatMessage, 
            {
                message:response,
                sender:'robot', 
                id:crypto.randomUUID()
            }
           ])
           setInputText('')
        }
         return(
        <div className="input-block">
            <input placeholder="send a message to chatbox" size="30"
            onChange={ChatText}
            value={inputText}
            className="input-box"
            />
            <button
            onClick={clickButton}
            >send</button>
        </div>
         )
    }