document.addEventListener("DOMContentLoaded", function() {
    var homepageInput = document.getElementById("homepageInput");
    var saveButton = document.getElementById("saveButton");
  
    // Retrieve the stored homepage URL if available
    chrome.storage.sync.get("newTabHomepage", function(result) {
      if (result.newTabHomepage) {
        homepageInput.value = result.newTabHomepage;
      }
    });
  
    preset.addEventListener("change", function() {
        var url = "http://www.";
        var e = document.getElementById("preset");
        e = e.options[e.selectedIndex].text;

        url = url + e + ".com";

        document.getElementById("homepageInput").value = url;
    })
    saveButton.addEventListener("click", function() {
      var newTabHomepage = homepageInput.value;
      if (newTabHomepage === "") {
        newTabHomepage = "http://google.com"
      }
  
      // Store the new tab homepage URL
      chrome.storage.sync.set({ "newTabHomepage": newTabHomepage }, function() {
        alert("New tab homepage saved successfully.");
      });
    });
  });
  