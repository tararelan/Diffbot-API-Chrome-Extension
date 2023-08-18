chrome.runtime.onMessageExternal.addListener((request, sender, sendResponse) => {
    chrome.tabs.executeScript(tab.id, { file: "content.js" }, function () {
        console.log("content.js executed");
    });
});