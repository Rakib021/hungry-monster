
const searchMeal = ()  =>{
    const searchText = document.getElementById("search-input").value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    
    //load data
     fetch(url)
    .then(res=> res.json())
    .then(data=>displayMeal(data.meals))
.catch(error => displayError('Sorry Sir .This item is not available !!'));

}
const displayMeal = meals => {
    const mealContainer = document.getElementById("meal-container");
    mealContainer.innerHTML = '';
    
    meals.forEach(meal => {
        
        
        const mealDiv = document.createElement('div');
        mealDiv.className ="meal-result"
        mealDiv.innerHTML = `
        
        <div class="meal-item" onclick="getDetails(${meal.idMeal})" >
                        
                            <div class="meal-name">
                            <img class="meals-image" src ="${meal.strMealThumb}">
                                <h3>${meal.strMeal}</h3>
                                <p> ${meal.strArea}</p>
                               
                                
                               
            
                             </div>
                        
                    </div>
        
        `;
        mealContainer.appendChild(mealDiv);
        
    })
        
    
}

const getDetails = async(idMeal) =>{

const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
try{
    const res = await fetch(url);
const data = await res.json();
 displayMealDetails(data.meals[0].strInstructions);
 
 

}
catch(error){
    displayError("sorry ! this item is not available.Thats why this item have no details");
}

//.catch(error => console.log(error));
}

const displayMealDetails = mealDetails => {
    const mealDetailDiv = document.getElementById("meals-details");
    mealDetailDiv.innerText = mealDetails;
}
const displayError = error =>{
    const errorTag = document.getElementById("error-msg");
    errorTag.innerText = error;
}