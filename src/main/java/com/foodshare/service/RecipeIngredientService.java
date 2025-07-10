package com.foodshare.service;

import com.foodshare.model.RecipeIngredient;
import com.foodshare.model.RecipeIngredientId;
import com.foodshare.repository.RecipeIngredientRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RecipeIngredientService {
    private final RecipeIngredientRepository repo;

    public RecipeIngredientService(RecipeIngredientRepository repo) {
        this.repo = repo;
    }

    public List<RecipeIngredient> getAll() {
        return repo.findAll();
    }

    public RecipeIngredient create(RecipeIngredient recipeIngredient) {
        return repo.save(recipeIngredient);
    }

    public void delete(RecipeIngredientId id) {
        repo.deleteById(id);
    }
}
