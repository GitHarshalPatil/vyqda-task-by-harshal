const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const notesRoutes = require('./routes/route');
const db = require('./db/connection');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/notes', notesRoutes);

const PORT = 5050;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
