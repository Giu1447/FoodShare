package com.foodshare.service;

import com.foodshare.model.Category;
import com.foodshare.repository.CategoryRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {
    private final CategoryRepository repo;

    public CategoryService(CategoryRepository repo) {
        this.repo = repo;
    }

    public List<Category> getAll() {
        return repo.findAll();
    }

    public Category create(Category category) {
        return repo.save(category);
    }
}
