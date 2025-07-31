function generateRecipe() {
    const skinType = document.getElementById("skinType").value;
    const ingredients = document.querySelectorAll(".ingredients input:checked");
    
    let selectedIngredients = [];
    ingredients.forEach((ingredient) => selectedIngredients.push(ingredient.value));
    
    const recipes = {
        "oily": {
            "honey": "Oily Skin Honey Mask: Mix honey with lemon juice for a refreshing face mask.",
            "aloe": "Aloe Vera Gel: Apply fresh aloe vera to reduce oiliness and acne.",
            "yogurt": "Yogurt & Honey Mask: Mix yogurt with honey to control oil and soothe skin."
        },
        "dry": {
            "coconut": "Coconut Oil Moisturizer: Apply coconut oil to keep skin hydrated.",
            "honey": "Honey & Oatmeal Mask: Mix honey with oatmeal for a moisturizing face pack.",
            "yogurt": "Yogurt & Aloe Mask: Mix yogurt with aloe vera to nourish dry skin."
        },
        "combination": {
            "oatmeal": "Oatmeal Scrub: Mix oatmeal with honey for a gentle exfoliating scrub.",
            "aloe": "Aloe & Coconut Hydration: Blend aloe vera with coconut oil for balance.",
            "yogurt": "Yogurt & Oatmeal Mask: A mix that soothes dry areas and controls oil."
        },
        "sensitive": {
            "honey": "Soothing Honey Mask: Pure honey applied to the face reduces irritation.",
            "aloe": "Aloe Vera & Oatmeal: A gentle, calming face mask for sensitive skin.",
            "coconut": "Coconut Oil Night Cream: Use a small amount of coconut oil as a natural moisturizer."
        }
    };

    let resultText = "No recipe found. Try selecting different ingredients.";

    for (let ingredient of selectedIngredients) {
        if (recipes[skinType][ingredient]) {
            resultText = recipes[skinType][ingredient];
            break;
        }
    }

    document.getElementById("recipeResult").innerText = resultText;
}