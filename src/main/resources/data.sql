INSERT INTO category (id, name) VALUES (1, 'Desserts'), (2, 'Hauptgerichte');

INSERT INTO users (id, email, password, token, expires_in) VALUES
                                                               (1, 'user1@example.com', 'pass1', NULL, 0),
                                                               (2, 'user2@example.com', 'pass2', NULL, 0);

INSERT INTO ingredient (id, name) VALUES
                                      (1, 'Zucker'),
                                      (2, 'Mehl');

INSERT INTO recipe (id, title, description, media_url, user_id, category_id) VALUES
                                                                                 (1, 'Schokoladenkuchen', 'Leckerer Kuchen', 'url1', 1, 1),
                                                                                 (2, 'Pasta', 'Italienische Pasta', 'url2', 2, 2);

INSERT INTO recipe_ingredient (recipe_id, ingredient_id, quantity) VALUES
                                                                       (1, 1, '200g'),
                                                                       (1, 2, '300g');

INSERT INTO comment (id, content, created_at, user_id, recipe_id) VALUES
                                                                      (1, 'Sehr gut!', NOW(), 1, 1),
                                                                      (2, 'Schmeckt super!', NOW(), 2, 2);

INSERT INTO like (id, user_id, recipe_id) VALUES
                                              (1, 1, 1),
                                              (2, 2, 2);
