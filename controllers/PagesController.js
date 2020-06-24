exports.home = (req, res) => {
    res.render('home', {
        title: 'Storage Bridge',
        categories: ['imports', 'exports', 'settings']
    })
};
exports.imports = (req, res) => {
    res.render('imports-new', {
        title: 'Imports',
        warehouses: ['Fen', 'Second', 'Third', 'Next'],
        successMessage: req.flash('success'),
        errorMessage: req.flash('error')
    })
}
exports.exports = (req, res) => {
    //res.render('exports')
    res.send('exports')
}
exports.settings = (req, res) => {
    //res.render('settings')
    res.send('settings')
}
