const search = document.getElementById('search-form');
const searchBox = document.getElementById('search-box');
const searchResult = document.getElementById('search-result');
const showMore = document.getElementById('show-more-btn');


const access = "pJdQ_Qtdyr9NyckicBA2LO4oAanSW6zwG_xNS2F79Vc";
let keyword = "";
let page = 1;
async function searchImage()
{
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${access}&per_page=15`;

    const response = await fetch(url);
    const data = await response.json();

   // console.log(data);

    if(page ==1)
    {
        searchResult.innerHTML = "";
    }

   const results = data.results;
   results.map((result) =>
   {
    const image = document.createElement('img');
    image.src = result.urls.small;
    const imageLink = document.createElement('a');
    imageLink.href = result.links.html;
    imageLink.target = "_blank";
    imageLink.appendChild(image);
    searchResult.appendChild(imageLink);
   });

   showMore.style.display = "block";
}

search.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImage();
});

showMore.addEventListener("click", (e) => {
    page++;
    searchImage();
})