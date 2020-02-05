const app = require('./app');
require('./config/db');

app.listen(process.env.PORT || 3333);