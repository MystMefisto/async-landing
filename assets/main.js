const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCkKRuHjMsAXBf87nrAI528Q&part=snippet%2Cid&order=date&maxResults=10';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '7e7a5f3414msh437ee36775c5adep1c2b52jsnd5f3ca61a09b',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

const content = null || document.getElementById('content');

async function fetchData(urlApi) {
  const response = await fetch(urlApi, options);
  const data = await response.json();
  return data;
}

(async () => {
  try {
    const videos = await fetchData(API);
    let view = `
      ${videos.items.map(video => `
            <div class="group relative">
              <div
                class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                <a href="https://www.youtube.com/watch?v=${video.id.videoId}">
                <h3 class="text-sm text-gray-700">
                <span aria-hidden="true" class="absolute inset-0"></span>
                ${video.snippet.title}
                </h3>
                </a>
              </div>
            </div>
      `).slice(0,4).join('')}
      `;

    content.innerHTML = view;
  } catch (error) {
    console.log(error)
  }
})();