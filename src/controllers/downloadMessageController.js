export default function builddownloadMessageController ({ fetchMessage }) {
  return async function downloadMessageController (httpRequest) {
    const headers = {
      'Content-type': 'text/html'
    }
    try {
      const { id, play } = httpRequest.params

      const message = await fetchMessage({ 'id': id })
      return {
        headers,
        status: 200,
        body: (play === 'false' ? `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body style="padding:10px">
        <h1 style='text-align:center; color:royalblue; font-weight:bold; font-family:verdana; margin-top:-10px'>Generals'</h1>
             <h4 style="margin-top:90px;color:rgba(0,0,0,0.8);font-family:san-serif; padding-bottom:20px; border-bottom:1px solid rgba(0,0,0,0.1)">Message Name: <span style="color:orange">${message.name}</span></h4>
             <h4 style="color:rgba(0,0,0,0.8);font-family:san-serif; padding-bottom:20px; border-bottom:1px solid rgba(0,0,0,0.1)">Category: <span style="color:orange">${message.category}</span></h4>
             <h4 style="color:rgba(0,0,0,0.8);font-family:san-serif; padding-bottom:20px; border-bottom:1px solid rgba(0,0,0,0.1)">Speaker: <span style="color:orange">${message.speaker}</span></h4>
             <h4 style="color:rgba(0,0,0,0.8);font-family:san-serif; padding-bottom:20px; border-bottom:1px solid rgba(0,0,0,0.1)">Date Added : <span style="color:orange">${message.dateAdded}</span></h4>
          
             <div id="download">
             <a href="${message.messageUri}"   target="_self" download="${message.name}.mp3"><button onclick="perform()" style="padding:10 ,40;height:50px;color:white; font-size:16px;font-weight:bold; width:100%; border:none;box-shadow: 0 12px 6px 0 rgba(0,0,0,0.23); outline:black;background:royalblue; border-radius:8px;">Download Message</button></a>
             </div>
           

       
            </body>
            <style>
            section{
              display:inline;
              width:80px;
              font-weight:lighter;
              font-style:italic;
              font-weight:bold;
              font-size:20px;
              color:green;
              height:80px;
              background:white;
              
              
             
            
            }
            @keyframes ani{
              from{
                margin-left:0;
              }
              to{
                margin-right:-200px;
              }
            }
            </style>
        <script>
       
        function perform(){
          document.getElementById('download').innerHTML = "<section><p>Downloading ${message.name}, you will be notified when download is completed</p></section>"

        }
       
        </script>
        </html>`
          : `<!DOCTYPE html>
          <html lang="en">
          <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Document</title>
          </head>
          <body>
              <div class="player">
                <h1 style="color:transparent">HELLO</h1>
                <h5 style="color:white;font-style: italic; font-size: 26px; text-align: center;">Playing</h5>
                <h3 style="color:white;font-weight: 700;font-size: 20px; font-family: sans-serif; text-align: center;">${message.name}</h3>

                <h4 style="color:white;font-weight: 700;font-size: 18px; text-align: center; font-family: sans-serif;">${message.speaker}</h4>
                <audio  src="${message.messageUri}" controls="controls"></audio>
              </div>
               <hr/>
              <h4 style="margin-left:13px;color:rgba(0,0,0,0.6); font-family: sans-serif;">Message Category :</h4> <span  style="margin-left:13px; font-weight: bold;color: rgba(0,0,0,0.8); font-family: Arial, Helvetica, sans-serif; font-size: 19px;">${message.category}</span>
              <hr/>
            
          </body>
         
         
         
          <style>
              audio{
                  
                width: 100%;
                padding-top: 40px;
                border-radius: 3px;
                padding-top: 0;
                
                height: 40vh;
              
              }
              body{
                  padding:0;
                  margin:0
              }
              .player{
                background-size: cover;
                background-repeat: no-repeat;
                background-image:url('data:image/jpeg;base64,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');
                margin-top: -30px;
                padding:0;
                
              }
          </style>
          
          </html>


`
        )
      }
    } catch (err) {
      return {
        headers,
        status: 400,
        body: `
           there is n error while loading this page
          `
      }
    }
  }
}
