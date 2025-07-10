package com.foodshare.service;

import com.foodshare.model.Comment;
import com.foodshare.repository.CommentRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentService {
    private final CommentRepository repo;

    public CommentService(CommentRepository repo) {
        this.repo = repo;
    }

    public List<Comment> getAll() {
        return repo.findAll();
    }

    public Comment getById(Long id) {
        return repo.findById(id).orElseThrow(() -> new RuntimeException("Comment not found"));
    }

    public Comment create(Comment comment) {
        return repo.save(comment);
    }

    public void delete(Long id) {
        repo.deleteById(id);
    }
}
