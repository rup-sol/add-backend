const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');


app.use(express.json());
app.use(cors())

app.post('/add', (req, res) => {
  const { num1, num2 } = req.body;
  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).json({ error: 'Invalid input. Please provide numbers.' });
  }
  const sum = parseFloat(num1) + parseFloat(num2);
  res.json({ sum });
});

app.listen(port, () => {
  console.log(`Node.js API is running on http://localhost:${port}`);
});
