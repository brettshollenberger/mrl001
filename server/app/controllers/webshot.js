var webshot = require('webshot');
var _ = require('underscore');


// Webshot config
// @note that on Herkou the standard temporary file is called 'tmp' so 
// we use that locally too :)
var join = require('path').join,
    tmpdir = '/tmp',
    phantomPATH = null;


/**
 * Our default webshot function, which has pre-set options
 *
 * @param url {string} URL for phantomJS to take screenshot of
 * @param file {string} Name of file where we save screenshot
 * @param cb {function} Callback which will recieve error if any
 *
 *
 */
var getWebshot = function(url, file, cb) {

    var options = {
        screenSize: {
            width: 320,
            height: 480
        },
        shotSize: {
            width: 320,
            height: 'all'
        },
        // timeout after 25 seconds
        timeout: 25000,
        script: function() {
            // todo: return page title in json response
            //console.log("Page Title: " + document.title);

            return {
                title: document.title
            };
        },
        streamType: 'pdf',
        paperSize: {
            format: 'letter',
            orientation: 'portrait'
        },
        userAgent: 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.20 (KHTML, like Gecko) Mobile/7B298g'
    };

    // on non-dev environments, ie: Heroku, set the phantomPath option
    if (phantomPATH !== null) {
        options.phantomPath = phantomPATH;
    }

    // call webshots
    webshot(url, file, options, cb);

};


module.exports = function(app, config) {

    // in production / testing etc modes (basically anything on heroku) 
    // we need to set a special path for phantomjs
    if ('development' !== app.get('env')) {
        phantomPATH = join(__dirname, '/../../../', 'vendor/phantomjs/bin/phantomjs');
    }

    return {
        getWebshotFromUrl: function(req, res) {

            // debug
            //console.info('generating pdf for quote id: ' + req.params.id);

            // get quote id
            // @todo we need to check when user visits this page for a valid quote
            var id = req.params.id;

            // this url will use css to format for printing
            // phantomjs will visit this url
            // we use the base url, so be sure its set properly   
            // we create the base url from the incoming request
            // @note we need so support subdomains later o
            // @note for dev its fine to get the port... but for heroku the ip is always changing
            // so we need to user the actual url     

            var fullHost = null;

            if ('development' === app.get('env')) {
                fullHost = req.protocol + '://' + (req.domain ? req.domain : req.ip) + ':' + config.port;
            } else {
                fullHost = config.siteUrl;
            }
            var url = fullHost + '/#/tools/quoter/' + id + '/print';

            // timestamp appended to the quite id, so each is unique
            var time = new Date().getTime().toString();

            // create a filename from quote id, timestamp, and pdf file extension
            var fileName = id + '_' + time + '.pdf';

            // create path to file
            var file = join(__dirname, '/../../../', tmpdir, fileName);
            //console.info('WEBSHOT : FILE is ' + file); 

            getWebshot(url, file, function(err) {
                //console.log('WEBSHOT : Complete'); 
                if (err) {
                    //console.log('WEBSHOT : ERROR ' + err);

                    res.json({
                        status: 'FAIL',
                        error: err
                    }, 400);
                    //return console.log(err);
                }
                //console.log('WEBSHOT : OK');

                //res.download(file);

                // create relative path for downloading
                var dl = join('downloads', fileName);

                res.json({
                    status: 'OK',
                    file: dl
                });
            });
        }
    };
};
