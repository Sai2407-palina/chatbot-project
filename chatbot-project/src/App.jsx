import { useState } from 'react';
import './App.css'
import { ChatInput } from './components/ChatInput';
import { ChatMessages } from './components/ChatMessages';

  
   
function App(){
         const [chatMessages,setChatMessages]=useState(
            [
            {
              message:'',
              sender:'',
              id:''
            }
            
        ])
         
        
      
        return (
        <div className="message-container">
             <ChatInput
             chatMessages={chatMessages}
             setChatMessages={setChatMessages}
            />
            <ChatMessages
             chatMessages={chatMessages}
             setChatMessages={setChatMessages}
            />
        </div>
        )
    }
export default App
