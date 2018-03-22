var app = require ('../server');

app.use ('/sitemap', require ('./sitemap'));
app.use ('/template', require ('./template'));
app.use ('/editor', require ('./editor'));
app.use ('/noticias', require ('./noticias'));
app.use ('/proyectos', require ('./proyectos'));
