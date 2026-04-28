const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('🚀 DevOps CI/CD Pipeline is Working! And This Pipeline is deployed Using Github Actions');
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP' });
});

app.listen(8080, () => {
  console.log('Server running on port 8080');
});
