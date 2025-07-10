package com.foodshare.controller;

import com.foodshare.model.Like;
import com.foodshare.service.LikeService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/likes")
public class LikeController {
    private final LikeService service;

    public LikeController(LikeService service) {
        this.service = service;
    }

    @GetMapping
    public List<Like> getAll() {
        return service.getAll();
    }

    @PostMapping
    public Like create(@RequestBody Like like) {
        return service.create(like);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }
}
