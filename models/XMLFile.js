const bookshelf = require('../config/bookshelf');

const Import_Files = bookshelf.Model.extend({
    tableName: 'imports_files'
});

module.exports.create = (files) => {
    return new Import_Files({
        filename: files.filename,
        originalname: files.originalname,
        filelocation: files.filelocation,
        warehouse: files.warehouse,
        inuse: files.inuse
    }).save()
}