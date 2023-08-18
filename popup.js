document.addEventListener('DOMContentLoaded', function () {
    var checkPageButton = document.getElementById('downloadButton');
    checkPageButton.addEventListener('click', function () {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            var activeTab = tabs[0];
            alert(activeTab.url);
            chrome.tabs.sendMessage(activeTab.id, { action: "fetchData" });
        });
    }, false);
}, false);