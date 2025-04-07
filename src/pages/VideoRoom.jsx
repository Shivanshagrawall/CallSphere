import React from 'react'
import {ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt'
import { useParams } from 'react-router-dom'

const VideoRoom = () => {
    let {roomID}=useParams();

    const myMeeting=async(element)=>{
        const appID = Number(import.meta.env.VITE_APPID);
        const serverSecret = import.meta.env.VITE_SERVERSECRET;
        const kitToken=ZegoUIKitPrebuilt.generateKitTokenForTest(appID,serverSecret,roomID,Date.now().toString(),"Shivansh Agrawal")
        const zp=ZegoUIKitPrebuilt.create(kitToken);
        
        zp.joinRoom({
            container: element,
            sharedLinks: [
              {
                name: 'Copy Link',
                url:
                 window.location.protocol + '//' + 
                 window.location.host + window.location.pathname +
                  '?roomID=' +
                  roomID,
              },
            ],
            scenario: {
             mode: ZegoUIKitPrebuilt.VideoConference,
            },
       });
    }
    
  return (
    <div>
        <div ref={myMeeting}/>
    </div>
  )
}

export default VideoRoom