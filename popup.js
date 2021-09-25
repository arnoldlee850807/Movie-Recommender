document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('searchMovies');
    checkPageButton.addEventListener('click', function() {
        chrome.tabs.query({
            active: true,
            lastFocusedWindow: true
        }, function(tabs) {
            alert("hey");
        });
    }, false);
}, false);