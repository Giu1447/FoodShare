package com.foodshare.controller;

import com.foodshare.model.RecipeIngredient;
import com.foodshare.model.RecipeIngredientId;
import com.foodshare.service.RecipeIngredientService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/recipe-ingredients")
public class RecipeIngredientController {
    private final RecipeIngredientService service;

    public RecipeIngredientController(RecipeIngredientService service) {
        this.service = service;
    }

    @GetMapping
    public List<RecipeIngredient> getAll() {
        return service.getAll();
    }

    @PostMapping
    public RecipeIngredient create(@RequestBody RecipeIngredient recipeIngredient) {
        return service.create(recipeIngredient);
    }

    @DeleteMapping("/{recipeId}/{ingredientId}")
    public void delete(@PathVariable Long recipeId, @PathVariable Long ingredientId) {
        service.delete(new RecipeIngredientId(recipeId, ingredientId));
    }
}
