package com.foodshare.service;

import com.foodshare.model.Ingredient;
import com.foodshare.repository.IngredientRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IngredientService {

    private final IngredientRepository repository;

    public IngredientService(IngredientRepository repository) {
        this.repository = repository;
    }

    public List<Ingredient> getAllIngredients() {
        return repository.findAll();
    }

    public Ingredient createIngredient(Ingredient ingredient) {
        return repository.save(ingredient);
    }
}
