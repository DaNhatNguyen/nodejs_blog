class SitesController {
    
    // [GET] /
    index(req, res) {
        res.render('home');
    }

    // [GET] /search
    search(req, res) {
        res.search('search');
    }
}

module.exports = new SitesController;