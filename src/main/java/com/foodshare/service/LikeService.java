package com.foodshare.service;

import com.foodshare.model.Like;
import com.foodshare.repository.LikeRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LikeService {
    private final LikeRepository repo;

    public LikeService(LikeRepository repo) {
        this.repo = repo;
    }

    public List<Like> getAll() {
        return repo.findAll();
    }

    public Like create(Like like) {
        return repo.save(like);
    }

    public void delete(Long id) {
        repo.deleteById(id);
    }
}
