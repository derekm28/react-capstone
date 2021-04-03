-- both test users have the password "password"

INSERT INTO users (username, password, first_name, last_name, email)
VALUES ('testuser1',
        '$2b$12$AZH7virni5jlTTiGgEg4zu3lSvAw68qVEfSIOjJ3RqtbJbdW/Oi5q',
        'Test',
        'User1',
        'joel@joelburton.com'),
       ('testuser2',
        '$2b$12$AZH7virni5jlTTiGgEg4zu3lSvAw68qVEfSIOjJ3RqtbJbdW/Oi5q',
        'Test',
        'user2',
        'joel@joelburton.com');

INSERT INTO sneakers (sneaker_id,
                       brand,
                       colorway,
                       name,
                       shoe,
                       title,
                       image_url)
VALUES('d9ec8449-4606-4e10-81bc-351ee32748cf',
      'adidas',
      'Salt/Salt/Salt',
      'Salt',
      'adidas Yeezy 500',
      'adidas Yeezy 500 Salt',
      'https://images.stockx.com/images/adidas-Yeezy-500-Salt-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1606320592');
