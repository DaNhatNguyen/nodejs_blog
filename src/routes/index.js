const newsRouter = require('./news')

function route(app) {
    app.get('/', (req, res) => {
        res.render('home');
    });

    app.use('/news', newsRouter); // Cấu hình lại

    app.get('/search', (req, res) => {
        res.render('search');
    });

    app.post('/search', (req, res) => {

        console.log(req.body)
        res.send('');
    });
}

module.exports = route;