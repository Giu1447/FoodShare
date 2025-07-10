package com.foodshare.model;

import jakarta.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
public class RecipeIngredientId implements Serializable {
    private Long recipeId;
    private Long ingredientId;

    public RecipeIngredientId() {
    }

    public RecipeIngredientId(Long recipeId, Long ingredientId) {
        this.recipeId = recipeId;
        this.ingredientId = ingredientId;
    }

    public Long getRecipeId() {
        return recipeId;
    }

    public void setRecipeId(Long recipeId) {
        this.recipeId = recipeId;
    }

    public Long getIngredientId() {
        return ingredientId;
    }

    public void setIngredientId(Long ingredientId) {
        this.ingredientId = ingredientId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        RecipeIngredientId that = (RecipeIngredientId) o;
        return java.util.Objects.equals(recipeId, that.recipeId) &&
                java.util.Objects.equals(ingredientId, that.ingredientId);
    }

    @Override
    public int hashCode() {
        return java.util.Objects.hash(recipeId, ingredientId);
    }
}
