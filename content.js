chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.action === "fetchData") {
        fetchData();
    }
});

function fetchData() {
    const apiKey = "KEY";

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        const currentUrl = tabs[0].url;

        fetch(
            `https://api.diffbot.com/v3/list?url=${encodeURIComponent(currentUrl)}&token=${apiKey}`
        )
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                const jsonData = JSON.stringify(data, null, 2);
                const blob = new Blob([jsonData], { type: "application/json" });
                const url = URL.createObjectURL(blob);

                chrome.downloads.download({
                    url: url,
                    filename: "output.json",
                    saveAs: true,
                });
            })
            .catch(function (error) {
                console.error("Error fetching data:", error);
            });
    });
}