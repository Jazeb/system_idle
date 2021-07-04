require('dotenv').config();
const app = require('./app');
const PORT = process.env.PORT;

app.listen(PORT, _ => console.log(`server is running on port ${PORT}`));