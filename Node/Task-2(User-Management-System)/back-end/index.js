import express from 'express';
import { readFileSync, writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const usersFilePath = path.join(__dirname, 'data', 'users.json');

const app = express();
app.use(express.json());

let users = JSON.parse(readFileSync(usersFilePath, 'utf-8'));

app.get('/api/users', (req, res) => {
  res.json(users);
});

app.post('/api/users', (req, res) => {
  const newUser = req.body;
  console.log("Yeni istifadəçi body:", newUser);

  if (!newUser.name || !newUser.email) {
    return res.status(400).json({ message: 'Name və Email mütləqdir' });
  }


  newUser.id = users.length + 1;
  users.push(newUser);

  writeFileSync(usersFilePath, JSON.stringify(users, null, 2));

  res.status(201).json(newUser);
});


app.delete("/api/users/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const userIndex = users.findIndex(user => user.id === id);

  if (userIndex === -1) {
    return res.status(404).json({ message: "Istifadeci Tapilmadi" });
  }

  users.splice(userIndex, 1);

  writeFileSync(usersFilePath, JSON.stringify(users, null, 2));

  res.json({ message: "İstifadəçi silindi" });
});


app.listen(5000, () => {
  console.log('✅ Server is running on port: 5000');
});
