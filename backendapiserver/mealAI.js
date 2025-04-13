// Enhanced Recipe Database with more variety
const recipeDatabase = [
  // Breakfast Recipes (expanded)
  {
      id: 101,
      title: "Avocado Toast",
      description: "Simple yet delicious avocado toast with optional toppings.",
      ingredients: ["bread", "avocado", "lemon", "salt", "pepper"],
      cuisine: "American",
      dietary: ["vegetarian", "vegan", "gluten-free"],
      time: 10,
      calories: 350,
      mealType: "breakfast",
      image: "https://images.unsplash.com/photo-1529563021893-cc83c992d75d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
      id: 102,
      title: "Greek Yogurt Parfait",
      description: "Creamy yogurt with fresh fruits and granola.",
      ingredients: ["yogurt", "granola", "berries", "honey"],
      cuisine: "American",
      dietary: ["vegetarian"],
      time: 5,
      calories: 300,
      mealType: "breakfast",
      image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
      id: 103,
      title: "Vegetable Omelette",
      description: "Fluffy omelette packed with fresh vegetables.",
      ingredients: ["eggs", "bell peppers", "spinach", "onions", "cheese"],
      cuisine: "French",
      dietary: ["vegetarian", "keto", "low-carb"],
      time: 15,
      calories: 400,
      mealType: "breakfast",
      image: "https://images.unsplash.com/photo-1551252269-9b9f6e58443f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
      id: 104,
      title: "Chia Pudding",
      description: "Healthy chia seed pudding with almond milk and fruits.",
      ingredients: ["chia seeds", "almond milk", "maple syrup", "berries"],
      cuisine: "American",
      dietary: ["vegetarian", "vegan", "gluten-free"],
      time: 5,
      calories: 250,
      mealType: "breakfast",
      image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  
  // Lunch Recipes (expanded)
  {
      id: 201,
      title: "Chicken Caesar Salad",
      description: "Classic salad with grilled chicken and Caesar dressing.",
      ingredients: ["chicken", "romaine", "croutons", "parmesan", "caesar dressing"],
      cuisine: "Italian",
      dietary: ["gluten-free", "low-carb"],
      time: 20,
      calories: 450,
      mealType: "lunch",
      image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
      id: 202,
      title: "Quinoa Bowl",
      description: "Nutritious bowl with quinoa and roasted vegetables.",
      ingredients: ["quinoa", "sweet potato", "kale", "chickpeas", "tahini"],
      cuisine: "Mediterranean",
      dietary: ["vegetarian", "vegan", "gluten-free"],
      time: 30,
      calories: 500,
      mealType: "lunch",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
      id: 203,
      title: "Turkey Wrap",
      description: "Whole wheat wrap with turkey and fresh veggies.",
      ingredients: ["tortilla", "turkey", "lettuce", "tomato", "avocado"],
      cuisine: "American",
      dietary: [],
      time: 15,
      calories: 400,
      mealType: "lunch",
      image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
      id: 204,
      title: "Sushi Bowl",
      description: "Deconstructed sushi with salmon, rice, and vegetables.",
      ingredients: ["salmon", "rice", "cucumber", "avocado", "soy sauce"],
      cuisine: "Asian",
      dietary: ["gluten-free"],
      time: 25,
      calories: 550,
      mealType: "lunch",
      image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  
  // Dinner Recipes (expanded)
  {
      id: 301,
      title: "Grilled Salmon",
      description: "Perfectly grilled salmon with lemon butter sauce.",
      ingredients: ["salmon", "lemon", "butter", "dill", "asparagus"],
      cuisine: "American",
      dietary: ["gluten-free", "keto", "low-carb"],
      time: 25,
      calories: 550,
      mealType: "dinner",
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
      id: 302,
      title: "Vegetable Stir Fry",
      description: "Colorful vegetables stir-fried with tofu in a savory sauce.",
      ingredients: ["tofu", "broccoli", "carrots", "bell peppers", "soy sauce"],
      cuisine: "Asian",
      dietary: ["vegetarian", "vegan"],
      time: 20,
      calories: 400,
      mealType: "dinner",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
      id: 303,
      title: "Spaghetti Bolognese",
      description: "Classic Italian pasta with meat sauce.",
      ingredients: ["pasta", "ground beef", "tomato sauce", "onion", "garlic"],
      cuisine: "Italian",
      dietary: [],
      time: 40,
      calories: 600,
      mealType: "dinner",
      image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
      id: 304,
      title: "Chicken Curry",
      description: "Flavorful Indian chicken curry with rice.",
      ingredients: ["chicken", "coconut milk", "curry paste", "onion", "rice"],
      cuisine: "Indian",
      dietary: ["gluten-free"],
      time: 45,
      calories: 650,
      mealType: "dinner",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  
  // Snacks (expanded)
  {
      id: 401,
      title: "Fruit Salad",
      description: "Fresh seasonal fruits mixed together.",
      ingredients: ["apple", "banana", "berries", "orange", "kiwi"],
      cuisine: "Any",
      dietary: ["vegetarian", "vegan", "gluten-free"],
      time: 10,
      calories: 200,
      mealType: "snacks",
      image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
      id: 402,
      title: "Protein Smoothie",
      description: "Creamy smoothie with protein powder and fruits.",
      ingredients: ["protein powder", "banana", "almond milk", "peanut butter"],
      cuisine: "Any",
      dietary: ["vegetarian", "gluten-free"],
      time: 5,
      calories: 300,
      mealType: "snacks",
      image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
      id: 403,
      title: "Hummus with Veggies",
      description: "Creamy hummus with fresh vegetable sticks.",
      ingredients: ["chickpeas", "tahini", "lemon", "carrots", "celery"],
      cuisine: "Mediterranean",
      dietary: ["vegetarian", "vegan", "gluten-free"],
      time: 15,
      calories: 250,
      mealType: "snacks",
      image: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
      id: 404,
      title: "Energy Balls",
      description: "No-bake energy balls with oats and nut butter.",
      ingredients: ["oats", "peanut butter", "honey", "chia seeds", "dark chocolate"],
      cuisine: "Any",
      dietary: ["vegetarian", "gluten-free"],
      time: 15,
      calories: 200,
      mealType: "snacks",
      image: "https://images.unsplash.com/photo-1602351447937-745cb720612f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

// Enhanced AI Recommendation Functions
function getRecommendedRecipes(mealType, filters = {}) {
  // Filter by meal type first
  let recipes = recipeDatabase.filter(recipe => recipe.mealType === mealType);
  
  // Apply dietary filters if provided
  if (filters.dietary && filters.dietary.length > 0) {
      recipes = recipes.filter(recipe => 
          filters.dietary.every(pref => recipe.dietary.includes(pref))
      );
  }
  
  // Apply cuisine filter if provided
  if (filters.cuisine && filters.cuisine !== 'any') {
      recipes = recipes.filter(recipe => 
          recipe.cuisine.toLowerCase() === filters.cuisine.toLowerCase()
      );
  }
  
  // Apply time filter if provided
  if (filters.maxTime) {
      recipes = recipes.filter(recipe => recipe.time <= parseInt(filters.maxTime));
  }
  
  // If no recipes match strict filters, relax constraints
  if (recipes.length === 0) {
      recipes = recipeDatabase.filter(recipe => recipe.mealType === mealType);
      
      // Try matching at least one dietary preference
      if (filters.dietary && filters.dietary.length > 0) {
          recipes = recipes.filter(recipe => 
              filters.dietary.some(pref => recipe.dietary.includes(pref))
          );
      }
  }
  
  // Shuffle and return 6 recipes max
  return shuffleArray(recipes).slice(0, 6);
}

function generateAIMealPlan(params) {
  const { dietaryPrefs, cuisinePrefs, calorieTarget, cookingTime, startDate } = params;
  const plan = {};
  
  // Get start of week (Sunday)
  const startOfWeek = new Date(startDate);
  startOfWeek.setDate(startDate.getDate() - startDate.getDay());
  
  // Generate plan for each day of the week
  for (let i = 0; i < 7; i++) {
      const day = new Date(startOfWeek);
      day.setDate(startOfWeek.getDate() + i);
      const dateStr = formatDate(day);
      
      // Generate meals for the day
      plan[dateStr] = {
          breakfast: getBalancedRecipe('breakfast', dietaryPrefs, cuisinePrefs, cookingTime),
          lunch: getBalancedRecipe('lunch', dietaryPrefs, cuisinePrefs, cookingTime),
          dinner: getBalancedRecipe('dinner', dietaryPrefs, cuisinePrefs, cookingTime),
          snacks: getBalancedRecipe('snacks', dietaryPrefs, cuisinePrefs, cookingTime)
      };
      
      // Calculate total calories
      let totalCalories = 
          (plan[dateStr].breakfast?.calories || 0) +
          (plan[dateStr].lunch?.calories || 0) +
          (plan[dateStr].dinner?.calories || 0) +
          (plan[dateStr].snacks?.calories || 0);
      
      // Adjust if over target (simplified approach)
      if (calorieTarget !== 'any') {
          const [minCal, maxCal] = calorieTarget.split('-').map(Number);
          const targetCal = (minCal + maxCal) / 2;
          
          if (totalCalories > targetCal * 1.1) {
              // Remove snacks if over by more than 10%
              delete plan[dateStr].snacks;
          } else if (totalCalories < targetCal * 0.9) {
              // Add a healthy snack if under by more than 10%
              plan[dateStr].snacks = getBalancedRecipe('snacks', dietaryPrefs, cuisinePrefs, cookingTime, true);
          }
      }
  }
  
  return plan;
}

function getBalancedRecipe(mealType, dietaryPrefs, cuisinePrefs, maxTime, healthy = true) {
  // Filter recipes
  let candidates = recipeDatabase.filter(recipe => 
      recipe.mealType === mealType &&
      (dietaryPrefs.length === 0 || dietaryPrefs.some(pref => recipe.dietary.includes(pref))) &&
      (cuisinePrefs.length === 0 || cuisinePrefs.includes(recipe.cuisine.toLowerCase())) &&
      recipe.time <= maxTime
  );
  
  // If healthy option requested, prefer lower calorie recipes
  if (healthy) {
      candidates.sort((a, b) => a.calories - b.calories);
  }
  
  // If no candidates, relax constraints
  if (candidates.length === 0) {
      candidates = recipeDatabase.filter(recipe => 
          recipe.mealType === mealType &&
          recipe.time <= maxTime
      );
  }
  
  // Still no candidates? Return null
  if (candidates.length === 0) return null;
  
  // Return random recipe from top 3 options
  const topCandidates = candidates.slice(0, 3);
  return topCandidates[Math.floor(Math.random() * topCandidates.length)];
}

// Helper function to shuffle array
function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

// Helper function to format date
function formatDate(date) {
  return date.toISOString().split('T')[0];
}