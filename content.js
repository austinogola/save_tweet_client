chrome.runtime.onMessage.addListener((request,sender,sendResponse)=>{

  if(request.url){
    console.log(request.url);
    sendResponse({message:'Received'})
  }

  const url=request.url

  try {
    fetch("http://localhost:5000/save_tweet",{
      method:'POST',
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        twtUrl:url
      }).then(res=>res.json()).then(result=>{
        console.log(result);
      })
    })
  } catch (e) {
    console.log(e.message);
  }




})
