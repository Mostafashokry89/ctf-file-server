const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use('/files', express.static('files'));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});