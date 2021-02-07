// const searchBtn = document.getElementById("search-btn");
// searchBtn.addEventListener('click',getMealList);
// const meal = document.getElementById("meal");
// const recipeCloseBtn = document.getElementById("recipe-close-btn");


function getMealList(){
    let searchInput = document.getElementById("search-input");
    


    
    
}

fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=egg")
.then(res =>res.json())
.then(data => {
    getMealList(data);
})


