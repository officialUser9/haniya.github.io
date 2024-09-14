const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 9999;



app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'bundle.js'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
