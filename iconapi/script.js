const apiKey = 'ziOZkEFgA0uHUHYQsF8rl5Wp866bAGzIdisZJRrUyFQkh7N7';

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
    const url = 'https://api.flaticon.com/v3/search/icons';
    const headers = {
        Authorization: `Bearer ${apiKey}`,
    };

    const response = await fetch(`${url}?q=${encodeURIComponent(query)}`, {
        method: 'GET',
        headers: headers,
    });

    if (response.ok) {
        const data = await response.json();
        return data.icons;
    } else {
        throw new Error("API request failed");
    }
}

function displayIcons(icons) {
    iconResults.innerHTML = ''; // Clear previous results
    for (const icon of icons) {
        const iconElement = document.createElement('div');

        const iconImage = document.createElement('img');
        iconImage.src = icon.images.svg;
        iconImage.alt = icon.name;
        iconElement.appendChild(iconImage);

        const iconName = document.createElement('div');
        iconName.textContent = icon.name;
        iconElement.appendChild(iconName);

        iconResults.appendChild(iconElement);
    }
}


