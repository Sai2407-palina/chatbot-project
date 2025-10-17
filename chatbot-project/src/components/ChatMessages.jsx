import { useEffect,useRef } from "react";
import { ChatMessage } from "./ChatMessage";

 export function ChatMessages({chatMessages}){
         const chatMessageRef=useRef(null);
         useEffect(()=>{
         const containerElem=chatMessageRef.current;
         if(containerElem){
            containerElem.scrollTop=containerElem.scrollHeight;
         }
        },[chatMessages])
       return( 
        <div class="final-block"
        ref={chatMessageRef}
        >
         {
            chatMessages.map((chatMessage)=>{
           
            return(
             <ChatMessage 
                message={chatMessage.message}
                sender={chatMessage.sender}
                key={chatMessage.id}
            />
           )
              
           })
            }
        </div>
       )
    }