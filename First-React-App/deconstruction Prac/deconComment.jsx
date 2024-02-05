import UserName from "./deconUserName";
import DeconText from "./deconText";
import DeconImg from "./deconImg";
import DeconDate from "./deconDate";

function DeconComment(props) { // complex component which displays different elements of a comment
    return (
        <div className="Comment componentBox"> 
            <div className="UserInfo"> 
               <DeconImg avatar={props.avatarURL}/> 
             <UserName author={props.author.name}/>
            </div>  

         <div> <DeconText text={props.text}/> </div>
         <div><DeconDate date={props.date}/></div>

          </div>
    );

} 

export default DeconComment
