package com.foodshare.controller;

import com.foodshare.model.Ingredient;
import com.foodshare.service.IngredientService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/ingredients")
public class IngredientController {

    private final IngredientService service;

    public IngredientController(IngredientService service) {
        this.service = service;
    }

    @GetMapping
    public List<Ingredient> getAll() {
        return service.getAllIngredients();
    }

    @PostMapping
    public Ingredient create(@RequestBody Ingredient ingredient) {
        return service.createIngredient(ingredient);
    }
}
