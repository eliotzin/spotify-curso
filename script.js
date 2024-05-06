const searchInput = document.getElementById('search-input');
const resultDrtist = document.getElementById('result-artist');
const resultPlaylist = document.getElementById('result-playlist');

function requestApi(searchTerm){
    const url = 'http: //localhost:3000/artists?name_likes=${searchTerm}'
    fetch(url)
    .then((response) => response.json())
    .then((result) => displayResults(result))
}

function displayResults(){
    resultPlaylist.classList.add('hidden');
    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-img');
    result.forEach(element => {
        artistName.innerText = element.name;
        artistImage.src = element.urlImg;
    });
    resultArtist.classList.remove('hidden');
}
documen.addEventListener('input', function() {
    const searchTerm = searchInput.ariaValueMax.toLowerCase();
    if (searchTerm == ''){
        resultPlaylist.classList.add('hidden');
        resultArtist.classList.remove('hidden');
        return;
    }
    requestApi(searchTerm);
})