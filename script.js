const suggestions = ["apple", "banana", "orange", "grape", "strawberry", "blueberry", "kiwi", "mango", "watermelon", "pineapple"];

const searchInput = document.getElementById('searchInput');
const suggestionsList = document.getElementById('suggestionsList');

// Function to handle input changes
function handleInput() {
    const query = searchInput.value.toLowerCase();
    logUserAction(query);
    updateSuggestions(query);
}

// Function to log user actions in local storage
function logUserAction(query) {
    let actions = JSON.parse(localStorage.getItem('userActions')) || [];
    actions.push({ query: query, timestamp: new Date().toISOString() });
    localStorage.setItem('userActions', JSON.stringify(actions));
}

// Function to update suggestions list based on the input
function updateSuggestions(query) {
    suggestionsList.innerHTML = '';
    if (query) {
        const filteredSuggestions = suggestions.filter(item => item.toLowerCase().startsWith(query));
        filteredSuggestions.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item;
            listItem.addEventListener('click', () => {
                searchInput.value = item;
                suggestionsList.innerHTML = '';
            });
            suggestionsList.appendChild(listItem);
        });
    }
}

// Optionally, you can add a function to clear the log if needed
function clearLog() {
    localStorage.removeItem('userActions');
}
