// Retrieve the stored homepage URL
chrome.storage.sync.get("newTabHomepage", function(result) {
    if (result.newTabHomepage) {
      // Set the initial new tab behavior
      setNewTabBehavior(result.newTabHomepage);
    }
  });
  
  // Listen for changes in the new tab homepage URL
  chrome.storage.onChanged.addListener(function(changes, namespace) {
    if (changes.newTabHomepage) {
      var newTabHomepage = changes.newTabHomepage.newValue;
      setNewTabBehavior(newTabHomepage);
    }
  });
  
  function setNewTabBehavior(newTabHomepage) {
    // Update the new tab behavior to open the specified URL
    chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
      if (changeInfo.status === "loading" && tab.url === "edge://newtab/") {
        chrome.tabs.update(tabId, { url: newTabHomepage });
      }
    });
  }