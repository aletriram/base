var app = require ('../server');

app.use ('/sitemap', require ('./sitemap'));
app.use ('/template', require ('./template'));
app.use ('/editor', require ('./editor'));
app.use ('/noticias', require ('./noticias'));
app.use ('/noticias-lista', require ('./noticias-lista'));
app.use ('/noticias-detalle', require ('./noticias-detalle'));
app.use ('/proyectos', require ('./proyectos'));
