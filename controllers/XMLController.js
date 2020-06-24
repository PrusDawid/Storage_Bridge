const XMLFile = require('../models/XMLFile')

exports.storeFile = (req, res) => {
    let file = req.files.file;
    let date = (new Date()).toISOString()
    let filename = req.body.warehouse + '_' + date + '.xml';
    let filepath = 'public/files/' + filename;

    console.log({
        'warehouse': req.body.warehouse,
        'originalname': req.files.file.name,
        'file_name': filename,
        "new_primary": req.body.new_primary ? 1 : 0,
        'file_path': filepath,
        'created_at': date

    })

    const form = XMLFile.create({
        'filename': filename,
        'originalname': req.files.file.name,
        'filelocation': filepath,
        'warehouse': req.body.warehouse,
        'inuse': req.body.new_primary ? 1 : 0
    }).then(() => {
        file.mv(filepath)
        req.flash('success', 'Everything looks fine. Data saved in database.')
        res.redirect('/imports')
    }, (err) => {
        req.flash('error', 'Something went wrong, ' + err);
        res.redirect('/imports')
    })
}


exports.storeUrl = (req, res) => {
    let url = req.body.url
}