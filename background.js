chrome.runtime.onInstalled.addListener(()=>{
  chrome.contextMenus.create({
    "title": 'Save tweet to photos',
    "contexts": ["all"],
    "id": "1cM",
    "documentUrlPatterns":['*://*.twitter.com/*']
  })
})

chrome.contextMenus.onClicked.addListener(async(info,tab)=>{
  const url=await getCurrentTab()

  chrome.tabs.query({active:true,currentWindow:true},(tabs)=>{

    chrome.tabs.sendMessage(tabs[0].id,{url:url},(res)=>{
      console.log(res.message);
    })
  })
})


async function getCurrentTab() {
  let queryOptions = { active: true, lastFocusedWindow: true };
  // `tab` will either be a `tabs.Tab` instance or `undefined`.
  let tab = await chrome.tabs.query(queryOptions);
  return tab[0].url;

}
