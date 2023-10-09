document.getElementById('language-select').addEventListener('change', function() {
    var selectedLanguage = this.value;
    

    alert('Selected language: ' + selectedLanguage);
});       

document.getElementById("search-button").addEventListener("click", function () {
    // Get the value from the input field
    var searchTerm = document.getElementById("search-input").value;

    // Perform an action (e.g., alert the search term)
    alert("You searched for: " + searchTerm);
});
