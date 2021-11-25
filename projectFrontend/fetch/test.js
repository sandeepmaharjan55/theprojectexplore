fetch("http://localhost:7000/api/destination/listDestination/list")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then((data) => {
    console.log(data);
    displayCocktail(data);
  })
  .catch((error) => console.error("FETCH ERROR:", error));

function displayCocktail(data) {
  const cocktail = data.data[0];
  const cocktailDiv = document.getElementById("cocktail");
  const cocktailName = cocktail.description;

  const heading = document.createElement("h1");
  console.log(heading);
  heading.innerHTML = cocktailName;
  cocktailDiv.appendChild(heading);

  const cocktailImg = document.createElement("img");
  cocktailImg.src = cocktail.images[0];
  console.log(cocktailImg.src);
  cocktailDiv.appendChild(cocktailImg);
  document.body.style.backgroundImage = "url('" + cocktail.images[0] + "')";

  const cocktailIngredients = document.createElement("ul");
  cocktailDiv.appendChild(cocktailIngredients);

  const getIngredients = Object.keys(cocktail)
    .filter(function (ingredient) {
      return ingredient.indexOf("strIngredient") == 0;
    })
    .reduce(function (ingredients, ingredient) {
      if (cocktail[ingredient] != null) {
        ingredients[ingredient] = cocktail[ingredient];
      }
      return ingredients;
    }, {});

  for (let key in getIngredients) {
    let value = getIngredients[key];
    listItem = document.createElement("li");
    listItem.innerHTML = value;
    cocktailIngredients.appendChild(listItem);
  }
}
