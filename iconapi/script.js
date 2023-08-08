const apiKey = 'CR7EgAy7dXmdWn23JBkprofllfgM1b8ewvZ51uWQLUKoaD1E';
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const iconResults = document.getElementById('iconResults');


searchButton.addEventListener('click', async () => {
    const query = searchInput.value;
    try {
        const icons = await searchIcons(query);
        displayIcons(icons);
    } catch (error) {
        console.error("Error searching icons:", error);
    }
});

async function searchIcons(query) {
    const url = `https://api.flaticon.com/v3/search`;
    const headers = {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
    };
    const data = {
        q: query,
    };

    const response = await fetch(url, {
        method: "POST",
        headers,
        body: JSON.stringify(data),
    });

    if (response.ok) {
        const result = await response.json();
        return result.icons;
    } else {
        throw new Error("API request failed");
    }
}

function displayIcons(icons) {
    iconResults.innerHTML = ''; // Clear previous results
    for (const icon of icons) {
        const iconElement = document.createElement('div');
        
        const iconImage = document.createElement('img');
        iconImage.src = icon.images.svg; // You can choose a different image type if needed
        iconImage.alt = icon.name;
        iconElement.appendChild(iconImage);

        const iconName = document.createElement('div');
        iconName.textContent = icon.name;
        iconElement.appendChild(iconName);

        iconResults.appendChild(iconElement);
    }
}


// // Call the search function when the search button is clicked
// searchButton.addEventListener('click', search);

// function search() {
//     const searchQuery = searchInput.value;
//     if (searchQuery.trim() === '') {
//         return;
//     }

// // searchButton.addEventListener('click', () => {
// //     const searchQuery = searchInput.value;
// //     if (searchQuery.trim() === '') {
// //         return;
// //     }

//     // API endpoint
//     const apiUrl = `https://api.flaticon.com/v2/items/icons`;

//     // jQuery AJAX request
//     $.ajax({
//         url: apiUrl,
//         method: 'get',
//         headers: {
//             'Authorization': apiKey
//         },
//         success: function(data) {
//             // Clear previous results
//             iconResults.innerHTML = '';

//             // Loop through the icons
//             for (const icon of data.items) {
//                 // Create an img element
//                 const imgElement = document.createElement('img');

//                 // Set the src property of the img element
//                 imgElement.src = icon.preview_url;

//                 // Set the alt property of the img element
//                 imgElement.alt = icon.name;

//                 // Append the img element to the iconResults div
//                 iconResults.appendChild(imgElement);
//             }
//         }
//     });
// };


// The searchButton.addEventListener() function is meant to listen for
// the click event on the searchButton element. When the click event
// occurs, the searchButton.addEventListener() function calls
// the search() function. The search() function then fetches the list
// of icons from the Flaticon API and displays them in the iconResults
// div.







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
