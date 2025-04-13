// Recipe Database
const recipeDatabase = [
    {
        id: 1,
        title: "Chicken Stir Fry",
        description: "A quick and healthy stir fry with vegetables and tender chicken.",
        ingredients: ["chicken", "bell peppers", "broccoli", "soy sauce", "garlic"],
        cuisine: "Asian",
        dietary: ["gluten-free", "low-carb"],
        time: 25,
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 2,
        title: "Vegetable Pasta",
        description: "Delicious pasta with fresh seasonal vegetables in a light sauce.",
        ingredients: ["pasta", "tomatoes", "zucchini", "bell peppers", "basil"],
        cuisine: "Italian",
        dietary: ["vegetarian"],
        time: 30,
        image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 3,
        title: "Avocado Toast",
        description: "Simple yet delicious avocado toast with optional toppings.",
        ingredients: ["bread", "avocado", "lemon", "salt", "pepper"],
        cuisine: "Any",
        dietary: ["vegetarian", "vegan"],
        time: 10,
        image: "https://images.unsplash.com/photo-1529563021893-cc83c992d75d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 4,
        title: "Beef Tacos",
        description: "Classic Mexican tacos with seasoned beef and fresh toppings.",
        ingredients: ["beef", "tortillas", "lettuce", "tomatoes", "cheese"],
        cuisine: "Mexican",
        dietary: [],
        time: 35,
        image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 5,
        title: "Greek Salad",
        description: "Fresh Mediterranean salad with feta cheese and olives.",
        ingredients: ["cucumber", "tomatoes", "olives", "feta cheese", "olive oil"],
        cuisine: "Mediterranean",
        dietary: ["vegetarian", "gluten-free"],
        time: 15,
        image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 6,
        title: "Vegetable Curry",
        description: "Flavorful Indian curry with mixed vegetables and spices.",
        ingredients: ["potatoes", "carrots", "cauliflower", "coconut milk", "curry powder"],
        cuisine: "Indian",
        dietary: ["vegetarian", "vegan", "gluten-free"],
        time: 45,
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
];

// AI Recommendation Algorithm
function getAIRecommendations(ingredientsInput, dietaryPref, cuisinePref, maxTime) {
    // Process user input
    const userIngredients = ingredientsInput.split(',').map(item => item.trim().toLowerCase());
    const hasIngredients = userIngredients.length > 0 && userIngredients[0] !== '';
    
    // Filter recipes based on criteria
    let filteredRecipes = recipeDatabase.filter(recipe => {
        // Filter by dietary preference
        if (dietaryPref !== 'any') {
            if (!recipe.dietary.includes(dietaryPref)) return false;
        }
        
        // Filter by cuisine
        if (cuisinePref !== 'any' && recipe.cuisine.toLowerCase() !== cuisinePref) {
            return false;
        }
        
        // Filter by cooking time
        if (maxTime !== 'any' && recipe.time > parseInt(maxTime)) {
            return false;
        }
        
        return true;
    });
    
    // If user provided ingredients, prioritize recipes that include them
    if (hasIngredients) {
        filteredRecipes = filteredRecipes.map(recipe => {
            // Calculate match score based on ingredients
            const matchingIngredients = recipe.ingredients.filter(ingredient => 
                userIngredients.some(userIng => ingredient.includes(userIng))
                .length;
            
            // Add score to recipe object
            return {
                ...recipe,
                score: matchingIngredients
            };
        })
        .filter(recipe => recipe.score > 0) // Only include recipes with at least one matching ingredient
        .sort((a, b) => b.score - a.score); // Sort by match score
        
        // If no matches found, show all filtered recipes
        if (filteredRecipes.length === 0) {
            filteredRecipes = recipeDatabase.filter(recipe => {
                // Keep previous filters but ignore ingredient matching
                if (dietaryPref !== 'any' && !recipe.dietary.includes(dietaryPref)) return false;
                if (cuisinePref !== 'any' && recipe.cuisine.toLowerCase() !== cuisinePref) return false;
                if (maxTime !== 'any' && recipe.time > parseInt(maxTime)) return false;
                return true;
            });
        }
    }
    
    // Limit to 6 recipes maximum
    return filteredRecipes.slice(0, 6);
}