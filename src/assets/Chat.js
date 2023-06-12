import React, { useEffect } from 'react'

function Chat() {
    useEffect(() => {
       (function(d, m){
           var kommunicateSettings = 
               {"appId":"148f0c503061fed1730c92a24ba2cb73f","popupWidget":true,"automaticChatOpenOnNavigation":true};
           var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
           s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
           var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
           window.kommunicate = m; m._globals = kommunicateSettings;
       })(document, window.kommunicate || {});
    }, []);
  return (
    <div>
    </div>
  )
}

export default Chat
