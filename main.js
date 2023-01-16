//Global variables

/**Other APIS to try
8ba7daec662eb3e3f18f31a571b61faece5beb250fe546925e79e21ca827672f
22b7b54287910389edfae878f576488bbc5b540a46daa0d2833ba858ce03b143
*/

function loadDefaultImages(){
    searchTerm = "dark food";
    // clientId = "0THX8x74rPkykb3IWWDE5j6PzWPSshwSQgISn_uKHfA";
    clientId = "22b7b54287910389edfae878f576488bbc5b540a46daa0d2833ba858ce03b143";
    page = '1'
    perPage = '30';
    
    const imageUrl = `https://api.unsplash.com/search/photos?query=${searchTerm}&per_page=${perPage}&page=${page}&client_id=${clientId}`;
    // alert (imageUrl);
    fetch(imageUrl)
    .then(response => response.json())
    .then(data => {
        const totalImages = data.total;
        const totalPages = data.total_pages;
        document.getElementById('total').textContent = "Total " + totalImages + " images";
        document.getElementById("next").style.opacity = 1; 
        const GridList = document.getElementById('grid');
        for (const api of data.results) {
        const DivItems = document.createElement('div');
        DivItems.className = 'items';
        DivItems.innerHTML = `              
            
            <img class="image" src="${api.urls.raw}+&w=170&h=170&fit=crop" loading="lazy" width="170px" height="170px">          
            <div class="content">  
                <p class="url">${api.alt_description}</p>
            </div>
            
        `;
        GridList.appendChild(DivItems);
        }
    });
}
loadDefaultImages()

function loadImages(){  

    searchTerm = searchQuery;
    // clientId = "0THX8x74rPkykb3IWWDE5j6PzWPSshwSQgISn_uKHfA";
    clientId = "8ba7daec662eb3e3f18f31a571b61faece5beb250fe546925e79e21ca827672f";
    page = '1'
    perPage = '30';
    
    const imageUrl = `https://api.unsplash.com/search/photos?query=${searchTerm}&per_page=${perPage}&page=${page}&client_id=${clientId}`;
    // alert (imageUrl);
    fetch(imageUrl)
    .then(response => response.json())
    .then(data => {
        // const totalImages = data.total;
        // document.getElementById('total').textContent = "We found " + totalImages + " images";
        document.getElementById("next").style.opacity = 1; 
        const GridList = document.getElementById('grid');
        for (const api of data.results) {
        const DivItems = document.createElement('div');
        DivItems.className = 'items';
        DivItems.innerHTML = `              
            
            <img class="image" src="${api.urls.raw}+&w=170&h=170&fit=crop" loading="lazy" width="170px" height="170px">          
            <div class="content">  
                <p class="url">${api.alt_description}</p>
            </div>
            
        `;
        GridList.appendChild(DivItems);
        }
    });
}
// loadImages();

function loadNextPage() {   

    const page = count;   
    const imageUrl = `https://api.unsplash.com/search/photos?query=${searchTerm}&per_page=${perPage}&page=${page}&client_id=${clientId}`;
    
    fetch(imageUrl)
    .then(response => response.json())
    .then(data => {
        
        // const totalImages = data.total;
        // document.getElementById('total').textContent = "Total images found :" + totalImages;
        
        const GridList = document.getElementById('grid');
        for (const api of data.results) {
        const DivItems = document.createElement('div');
        DivItems.className = 'items';
        DivItems.innerHTML = `              
            
            <img class="image" src="${api.urls.raw}+&w=170&h=170&fit=crop" loading="lazy" width="170px" height="170px">          
            <div class="content">  
                <p class="url">${api.alt_description}</p>
            </div>
            
        `;
        GridList.appendChild(DivItems);
        }
    });

  }

  function searchImages(){
        
      // Get the input and button elements by their ids
        searchInput = document.getElementById("search-input");
        searchButton = document.getElementById("search-button");
        searchQuery = searchInput.value;
        removeExistingItems();
        loadImages();
        // console.log(searchQuery);
        
  } 

  function removeExistingItems() {
    var items = document.querySelectorAll(".items");
    for (var i = 0; i < items.length; i++) {
        items[i].remove();
    }
}

    document.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            // alert('hello);')
            searchImages();
        }
    });