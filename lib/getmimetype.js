//json file link
const mimeURL = 'https://gist.githubusercontent.com/AshHeskes/6038140/raw/27c8b1e28ce4c3aff0c0d8d3d7dbcb099a22c889/file-extension-to-mime-types.json';
const https = require('https');

const getMimeType = (extension) => {
    return new Promise((resolve, reject) => {
        https.get(mimeURL, response => {
            if(response.statusCode < 200 || response.statusCode > 299){
                reject(`Error: Fail to load mime types from json file: ${response.statusCode }`);
                console.log(reject(`Error: Fail to load mime types from json file: ${response.statusCode }`));
                return false;
            }
            let data = '';
            
            //you will receive data by chunks
            response.on('data', chunk => {
                data += chunk;
            });
            //once you recieve all chunks
            response.on('end', () => {
                resolve(JSON.parse(data)[extension]);
            });
        }).on('error', (e) => {
          console.error(e);
        });
    });
};

module.exports = getMimeType;