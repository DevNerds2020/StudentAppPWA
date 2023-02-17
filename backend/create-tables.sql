-- Create the users table
CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(255) NOT NULL
);

-- Insert sample data into the users table
INSERT INTO users (username, email, password) VALUES
('user1', 'user1@example.com', 'password1'),
('user2', 'user2@example.com', 'password2'),
('user3', 'user3@example.com', 'password3'),
('user4', 'user4@example.com', 'password4'),
('user5', 'user5@example.com', 'password5'),
('user6', 'user6@example.com', 'password6'),
('user7', 'user7@example.com', 'password7'),
('user8', 'user8@example.com', 'password8'),
('user9', 'user9@example.com', 'password9'),
('user10', 'user10@example.com', 'password10');

-- Create the userNotes table
CREATE TABLE userNotes (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT NOT NULL,
  note_text TEXT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Insert sample data into the userNotes table
INSERT INTO userNotes (user_id, note_text) VALUES
(1, 'Note 1 for user 1'),
(1, 'Note 2 for user 1'),
(2, 'Note 1 for user 2'),
(2, 'Note 2 for user 2'),
(3, 'Note 1 for user 3'),
(3, 'Note 2 for user 3'),
(4, 'Note 1 for user 4'),
(4, 'Note 2 for user 4'),
(5, 'Note 1 for user 5'),
(5, 'Note 2 for user 5'),
(6, 'Note 1 for user 6'),
(6, 'Note 2 for user 6'),
(7, 'Note 1 for user 7'),
(7, 'Note 2 for user 7'),
(8, 'Note 1 for user 8'),
(8, 'Note 2 for user 8'),
(9, 'Note 1 for user 9'),
(9, 'Note 2 for user 9'),
(10, 'Note 1 for user 10'),
(10, 'Note 2 for user 10');
