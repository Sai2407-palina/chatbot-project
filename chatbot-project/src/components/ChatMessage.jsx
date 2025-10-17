import RobotImage from'../assets/robot-image.png';
import UserImage from '../assets/user-image.png';

 
export function ChatMessage({message,sender}){
        if(message!==''){
        return (
          
           <div className={sender==='user'?'chat-message-user':
            'chat-message-robot'
           }>
             {sender==='robot'&& <img src={RobotImage} width="50px"></img>}
             <div class="message-bit">
                {message}
            </div>
             {sender==='user' && <img src={UserImage} width="50px"></img>}
            </div>
        )
        }
    }