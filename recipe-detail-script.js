// Get recipe data from the main script
// In a real app, this would come from an API or database
const recipes = [
    {
        id: 1,
        title: "Classic Pancakes",
        description: "Fluffy, golden pancakes perfect for breakfast",
        category: "breakfast",
        cookTime: "20 min",
        servings: 4,
        difficulty: "Easy",
        emoji: "🥞",
        ingredients: [
            "2 cups all-purpose flour",
            "2 tablespoons sugar",
            "2 teaspoons baking powder",
            "1/2 teaspoon salt",
            "2 large eggs",
            "1 3/4 cups milk",
            "1/4 cup melted butter",
            "1 teaspoon vanilla extract"
        ],
        instructions: [
            "In a large bowl, whisk together flour, sugar, baking powder, and salt.",
            "In another bowl, beat eggs and mix in milk, melted butter, and vanilla.",
            "Pour wet ingredients into dry ingredients and stir until just combined. Don't overmix.",
            "Heat a griddle or large pan over medium heat and lightly grease.",
            "Pour 1/4 cup batter for each pancake onto the griddle.",
            "Cook until bubbles form on surface, then flip and cook until golden brown.",
            "Serve hot with your favorite toppings."
        ],
        tips: "Don't overmix the batter - lumps are okay! Let the batter rest for 5 minutes for even fluffier pancakes."
    },
    {
        id: 2,
        title: "Chicken Stir Fry",
        description: "Quick and healthy stir fry loaded with vegetables",
        category: "lunch",
        cookTime: "25 min",
        servings: 4,
        difficulty: "Easy",
        emoji: "🍗",
        ingredients: [
            "1 lb chicken breast, sliced thin",
            "2 tablespoons vegetable oil",
            "1 bell pepper, sliced",
            "1 onion, sliced",
            "2 carrots, julienned",
            "2 cloves garlic, minced",
            "3 tablespoons soy sauce",
            "1 tablespoon honey",
            "1 teaspoon cornstarch",
            "2 green onions, chopped"
        ],
        instructions: [
            "Mix soy sauce, honey, and cornstarch in a small bowl. Set aside.",
            "Heat oil in a large wok or skillet over high heat.",
            "Add chicken and cook until no longer pink, about 5-6 minutes.",
            "Add garlic and cook for 30 seconds until fragrant.",
            "Add vegetables and stir fry for 3-4 minutes until crisp-tender.",
            "Pour sauce over everything and toss to coat.",
            "Cook for another minute until sauce thickens.",
            "Garnish with green onions and serve over rice."
        ],
        tips: "Have all ingredients prepped before you start cooking - stir frying happens fast!"
    },
    {
        id: 3,
        title: "Spaghetti Carbonara",
        description: "Creamy Italian pasta with eggs, cheese, and pancetta",
        category: "dinner",
        cookTime: "30 min",
        servings: 4,
        difficulty: "Medium",
        emoji: "🍝",
        ingredients: [
            "1 lb spaghetti",
            "6 oz pancetta or bacon, diced",
            "4 large egg yolks",
            "1 whole egg",
            "1 cup freshly grated Parmesan cheese",
            "1/2 cup freshly grated Pecorino Romano cheese",
            "Freshly ground black pepper",
            "Salt for pasta water",
            "2 cloves garlic, minced"
        ],
        instructions: [
            "Bring a large pot of salted water to boil and cook spaghetti according to package directions.",
            "While pasta cooks, fry pancetta in a large skillet until crispy.",
            "In a bowl, whisk together egg yolks, whole egg, and both cheeses.",
            "Add minced garlic to the pancetta and cook for 1 minute.",
            "Reserve 1 cup pasta cooking water, then drain pasta.",
            "Remove skillet from heat and add hot pasta to the pancetta.",
            "Quickly pour in egg mixture while tossing pasta continuously.",
            "Add pasta water a little at a time until creamy sauce forms.",
            "Season with black pepper and serve immediately."
        ],
        tips: "The key is to work quickly and off the heat so the eggs don't scramble. The pasta should be hot enough to cook the eggs gently."
    },
    {
        id: 4,
        title: "Chocolate Chip Cookies",
        description: "Soft and chewy cookies with chocolate chips",
        category: "dessert",
        cookTime: "25 min",
        servings: 24,
        difficulty: "Easy",
        emoji: "🍪",
        ingredients: [
            "2 1/4 cups all-purpose flour",
            "1 teaspoon baking soda",
            "1 teaspoon salt",
            "1 cup butter, softened",
            "3/4 cup granulated sugar",
            "3/4 cup brown sugar, packed",
            "2 large eggs",
            "2 teaspoons vanilla extract",
            "2 cups chocolate chips"
        ],
        instructions: [
            "Preheat oven to 375°F (190°C).",
            "In a bowl, whisk together flour, baking soda, and salt.",
            "In a large bowl, cream butter and both sugars until light and fluffy.",
            "Beat in eggs one at a time, then vanilla.",
            "Gradually mix in flour mixture until just combined.",
            "Stir in chocolate chips.",
            "Drop rounded tablespoons of dough onto ungreased baking sheets.",
            "Bake for 9-11 minutes until golden brown.",
            "Cool on baking sheet for 5 minutes before transferring to wire rack."
        ],
        tips: "For extra chewy cookies, slightly underbake them. They'll continue cooking on the hot pan."
    },
    {
        id: 5,
        title: "Avocado Toast",
        description: "Healthy and delicious breakfast with ripe avocado",
        category: "breakfast",
        cookTime: "10 min",
        servings: 2,
        difficulty: "Easy",
        emoji: "🥑",
        ingredients: [
            "2 slices whole grain bread",
            "1 ripe avocado",
            "1/4 teaspoon salt",
            "1/8 teaspoon black pepper",
            "1 tablespoon lemon juice",
            "2 eggs (optional)",
            "Cherry tomatoes for garnish",
            "Red pepper flakes (optional)"
        ],
        instructions: [
            "Toast bread slices until golden brown.",
            "Cut avocado in half, remove pit, and scoop flesh into a bowl.",
            "Mash avocado with salt, pepper, and lemon juice.",
            "Spread avocado mixture evenly on toast.",
            "If using eggs, fry or poach them and place on top.",
            "Garnish with cherry tomatoes and red pepper flakes.",
            "Serve immediately while toast is still warm."
        ],
        tips: "Choose avocados that give slightly when pressed but aren't mushy. Add a drizzle of olive oil for extra richness."
    },
    {
        id: 6,
        title: "Beef Tacos",
        description: "Flavorful beef tacos with fresh toppings",
        category: "dinner",
        cookTime: "35 min",
        servings: 6,
        difficulty: "Easy",
        emoji: "🌮",
        ingredients: [
            "1 lb ground beef",
            "1 onion, diced",
            "2 cloves garlic, minced",
            "2 tablespoons taco seasoning",
            "1/2 cup water",
            "12 taco shells or tortillas",
            "2 cups shredded lettuce",
            "2 tomatoes, diced",
            "1 cup shredded cheese",
            "1/2 cup sour cream",
            "1/4 cup chopped cilantro"
        ],
        instructions: [
            "Heat a large skillet over medium-high heat.",
            "Cook ground beef and onion until beef is browned and onion is soft.",
            "Add garlic and cook for another minute.",
            "Stir in taco seasoning and water.",
            "Simmer for 5-10 minutes until liquid reduces.",
            "Warm taco shells according to package directions.",
            "Fill each shell with beef mixture.",
            "Top with lettuce, tomatoes, cheese, sour cream, and cilantro.",
            "Serve immediately with lime wedges."
        ],
        tips: "Make your own taco seasoning by mixing chili powder, cumin, paprika, oregano, onion powder, and garlic powder."
    }
];

// Load recipe detail when page loads
document.addEventListener('DOMContentLoaded', function() {
    const recipeId = localStorage.getItem('currentRecipeId');
    
    if (!recipeId) {
        // If no recipe ID, redirect back to main page
        window.location.href = 'recipe-index.html';
        return;
    }
    
    const recipe = recipes.find(r => r.id === parseInt(recipeId));
    
    if (!recipe) {
        // If recipe not found, redirect back to main page
        window.location.href = 'recipe-index.html';
        return;
    }
    
    displayRecipeDetail(recipe);
});

// Display recipe detail
function displayRecipeDetail(recipe) {
    // Recipe title section
    document.getElementById('recipeTitleSection').innerHTML = `
        <h1>${recipe.title}</h1>
        <p>${recipe.description}</p>
    `;
    
    // Recipe image
    document.getElementById('recipeImageContainer').innerHTML = recipe.emoji;
    
    // Recipe metadata
    document.getElementById('recipeMeta').innerHTML = `
        <div class="meta-item">
            <strong>⏱️ ${recipe.cookTime}</strong>
            <span>Cook Time</span>
        </div>
        <div class="meta-item">
            <strong>👥 ${recipe.servings}</strong>
            <span>Servings</span>
        </div>
        <div class="meta-item">
            <strong>📊 ${recipe.difficulty}</strong>
            <span>Difficulty</span>
        </div>
        <div class="meta-item">
            <strong>🍽️ ${recipe.category}</strong>
            <span>Category</span>
        </div>
    `;
    
    // Ingredients list
    document.getElementById('ingredientsList').innerHTML = 
        recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('');
    
    // Instructions list
    document.getElementById('instructionsList').innerHTML = 
        recipe.instructions.map(instruction => `<li>${instruction}</li>`).join('');
    
    // Tips section (if available)
    const tipsSection = document.getElementById('recipeTips');
    if (recipe.tips) {
        tipsSection.innerHTML = `
            <h3>💡 Chef's Tips</h3>
            <div class="tips-content">
                <p>${recipe.tips}</p>
            </div>
        `;
        tipsSection.style.display = 'block';
    } else {
        tipsSection.style.display = 'none';
    }
    
    // Update page title
    document.title = `${recipe.title} - Kolapo's Recipe Collection`;
      }
