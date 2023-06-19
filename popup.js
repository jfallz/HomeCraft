document.addEventListener("DOMContentLoaded", function() {
    var homepageInput = document.getElementById("homepageInput");
    var saveButton = document.getElementById("saveButton");
  
    // Retrieve the stored homepage URL if available
    chrome.storage.sync.get("newTabHomepage", function(result) {
      if (result.newTabHomepage) {
        homepageInput.value = result.newTabHomepage;
      }
    });
  
    saveButton.addEventListener("click", function() {
      var newTabHomepage = homepageInput.value;
  
      // Store the new tab homepage URL
      chrome.storage.sync.set({ "newTabHomepage": newTabHomepage }, function() {
        alert("New tab homepage saved successfully.");
      });
    });
  });
  