const bodyParser = require('body-parser');

module.exports = function (app) {
    app.use(bodyParser.json({ limit: '200mb' }));

    app.use(
        bodyParser.urlencoded({
            limit: '200mb',
            extended: true
        })
    )
}