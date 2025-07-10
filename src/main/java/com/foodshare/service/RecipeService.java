package com.foodshare.service;

import com.foodshare.model.Recipe;
import com.foodshare.repository.RecipeRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RecipeService {
    private final RecipeRepository repo;

    public RecipeService(RecipeRepository repo) {
        this.repo = repo;
    }

    public List<Recipe> getAllRecipes() {
        return repo.findAll();
    }

    public Recipe getRecipeById(Long id) {
        return repo.findById(id).orElseThrow(() -> new RuntimeException("Recipe not found"));
    }

    public Recipe createRecipe(Recipe recipe) {
        return repo.save(recipe);
    }

    public void deleteRecipe(Long id) {
        repo.deleteById(id);
    }
}
