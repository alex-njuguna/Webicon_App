const apiKey = 'CR7EgAy7dXmdWn23JBkprofllfgM1b8ewvZ51uWQLUKoaD1E';
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const iconResults = document.getElementById('iconResults');


// Call the search function when the search button is clicked
searchButton.addEventListener('click', search);

function search() {
    const searchQuery = searchInput.value;
    if (searchQuery.trim() === '') {
        return;
    }

// searchButton.addEventListener('click', () => {
//     const searchQuery = searchInput.value;
//     if (searchQuery.trim() === '') {
//         return;
//     }

    // API endpoint
    const apiUrl = `https://api.flaticon.com/v2/items/icons`;

    // jQuery AJAX request
    $.ajax({
        url: apiUrl,
        method: 'get',
        headers: {
            'Authorization': 'Bearer ' + apiKey
        },
        success: function(data) {
            // Clear previous results
            iconResults.innerHTML = '';

            // Loop through the icons
            for (const icon of data.items) {
                // Create an img element
                const imgElement = document.createElement('img');

                // Set the src property of the img element
                imgElement.src = icon.preview_url;

                // Set the alt property of the img element
                imgElement.alt = icon.name;

                // Append the img element to the iconResults div
                iconResults.appendChild(imgElement);
            }
        }
    });
};










// const apiKey = 'CR7EgAy7dXmdWn23JBkprofllfgM1b8ewvZ51uWQLUKoaD1E';
// const searchInput = document.getElementById('searchInput');
// const searchButton = document.getElementById('searchButton');
// const iconResults = document.getElementById('iconResults');

// searchButton.addEventListener('click', () => {
//     const searchQuery = searchInput.value;
//     if (searchQuery.trim() === '') {
//         return;
//     }

//     // API endpoint
//     const apiUrl = `'https://api.flaticon.com/v2/items/icons'/search?query=${encodeURIComponent(searchQuery)}&token=${apiKey}`;

//     fetch(apiUrl)
//         .then(response => response.json())
//         .then(data => {
//             iconResults.innerHTML = ''; // Clear previous results

//             if (data.icons && data.icons.length > 0) {
//                 data.icons.forEach(icon => {
//                     const iconElement = document.createElement('img');
//                     iconElement.src = icon.url;
//                     iconElement.alt = icon.name;
//                     iconResults.appendChild(iconElement);
//                 });
//             } else {
//                 iconResults.innerHTML = 'No icons found.';
//             }
//         })
//         .catch(error => {
//             iconResults.innerHTML = 'An error occurred while fetching icons.';
//             console.error(error);
//         });
// });

// $.ajax({
//     url: 'https://api.flaticon.com/v2/items/icons',
//     method: 'get',
//     headers: {
//       'Authorization': 'CR7EgAy7dXmdWn23JBkprofllfgM1b8ewvZ51uWQLUKoaD1E'
//     },
//     success: function(data) {
//       console.log(JSON.stringify(data));
//     }
//   });


// fetch()
