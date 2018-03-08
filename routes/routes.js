var app = require ('../server');

app.use ('/', require ('./index'));
app.use ('/ruta1', require ('./ruta1'));