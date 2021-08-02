const nodemailer = require('nodemailer');

const mailer = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "testebacktt@gmail.com",
        pass: "kthdivklocfercab"
    }

});
    
const readHTMLFile = function(path, callback) {
    fs.readFile(path, {encoding: 'utf-8'}, function (err, html) {
        if(err){
                throw err;
                callback(err);
        }
        else {
            callback(null, html);
        }
    });
};

module.exports = {
    mailer,
    readHTMLFile

};