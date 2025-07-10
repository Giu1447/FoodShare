package com.foodshare.controller;

import com.foodshare.model.Recipe;
import com.foodshare.service.RecipeService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/recipes")
public class RecipeController {
    private final RecipeService service;

    public RecipeController(RecipeService service) {
        this.service = service;
    }

    @GetMapping
    public List<Recipe> getAll() {
        return service.getAllRecipes();
    }

    @GetMapping("/{id}")
    public Recipe getById(@PathVariable Long id) {
        return service.getRecipeById(id);
    }

    @PostMapping
    public Recipe create(@RequestBody Recipe recipe) {
        return service.createRecipe(recipe);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.deleteRecipe(id);
    }
}
