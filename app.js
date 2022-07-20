const express = require('express');
const path = require('path');

const app = express();

const public = path.resolve(__dirname, './public');
app.use(express.static(public));

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});