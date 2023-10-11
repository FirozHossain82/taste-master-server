const express = require("express");
const app = express();
const cors = require("cors");
const  port = process.env.port || 5000;


const chefs = require("./data/chefs.json");
const recipes = require("./data/recipes.json");
const testimonials = require("./data/testimonials.json");

app.use(cors());

app.get('/', (req, res) => {
    res.send('The Taste Master Server is Running')
})

// all chef's api
app.get("/chefs",(req,res) =>{
    res.send(chefs);
})

// single chef by id
app.get("/chefs/:id", (req, res) =>{
    const id = req.params.id;
    const singleChef = chefs.find((chef) => chef.id ===id);
    res.send(singleChef);
});

// all recipes 
app.get("/recipes", (req, res) =>{
    res.send(recipes);
})

// chef recipes
app.get("/chef-recipes/:id", (req, res) =>{
    const id= parseInt(req.params.id);
    const chefRecipes = recipes.filter((recipe) => parseInt(recipe.chef_id) ===id);
    res.send(chefRecipes);
})

// testimonials

app.get("/testimonials", (req, res) =>{
    res.send(testimonials);
})

app.listen(port, ()=>{
    console.log(`Taste Master  Api is running on port: ${port}`);
})