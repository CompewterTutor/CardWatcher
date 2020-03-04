chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({ card_section })
})