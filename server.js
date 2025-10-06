const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname)));

app.post('/join-event', (req, res) => {
  const { name, email, phone } = req.body;

  const newUser = { name, email, phone, date: new Date().toLocaleString() };

  let users = [];
  if (fs.existsSync('users.json')) {
    const data = fs.readFileSync('users.json');
    users = JSON.parse(data);
  }

  users.push(newUser);
  fs.writeFileSync('users.json', JSON.stringify(users, null, 2));

  res.send('Thank you for joining the event!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
