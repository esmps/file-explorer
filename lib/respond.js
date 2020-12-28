//require node modules
const url = require('url');
const path = require('path');
const fs = require('fs');
const BASE_URL_MOCK = 'http://mock/';

//file imports
const buildBreadcrumb = require('./breadcrumb.js');
const buildMainContent = require('./maincontent.js');
const getMimeType = require('./getmimetype.js');

//static base path: location of your static folder
const staticBasePath = path.join(__dirname, '..', 'static');
console.log(staticBasePath);


//respond to a request 
//Following is function passed to createServer used to create the server

const respond = (request, response) => {
    console.log('response fired!');
    //decode pathname before working with it
    const MYURL = new URL(request.url, BASE_URL_MOCK);
    let pathname = MYURL.pathname;
    const searchParams = MYURL.searchParams;
    
    //if favicon.ico stop
    if (pathname === '/favicon.ico'){
        return false;
    }
    
    pathname = decodeURIComponent(pathname);
    

    //get correspoing full static path located in the static folder
    const fullStaticPath = path.join(staticBasePath, pathname);
    //can we find something in fullStaticPath?
        //no: send '404: File not found'
    if(!fs.existsSync(fullStaticPath)){
        console.log(`${fullStaticPath} does not exist!`);
        response.write('404: File not found!');
        response.end();
    }
    
    //we found something
    //yes: File or directory?
    let stats;
    try{
        stats = fs.lstatSync(fullStaticPath);

    }catch(err){
        console.log(`lstatSync: ${err}`);
    }
        //Directory:
    if(stats.isDirectory()){
        //get content from template index.html
        let data = fs.readFileSync(path.join(staticBasePath, 'Project_files/index.html'), 'utf-8');
        
        
        
        
        
//        ----------------------------
//        let pathnum = pathname.split('/');
//        pathnum = pathnum.filter(element => element !== '');
//
//        console.log(pathnum.length);
//        let styling = '';
//        if (pathnum.length > 1){
//            for (let i = 0; i < pathnum.length - 1; i++){
//                styling += '../';
//            }
//        }
//        styling += 'Project_files/style.css';
//        
//        $('style').href = styling;
        
        
        let pathnum = pathname.split('/');
        pathnum = pathnum.filter(element => element !== '');

        let scriptsrc = '';
        if (pathname.length > 1){
            for (let i = 0; i < pathnum.length; i++){
                scriptsrc += '../';
            }
        }
        scriptsrc += 'Project_files/script.js';
        console.log(scriptsrc);
        
        data = data.replace('scriptHere', `<script src="${scriptsrc}"></script>`);

//        ----------------------------

        
        //build page title
        let pathElements = pathname.split('/').reverse();
        pathElements = pathElements.filter(element => element !== '');
        let folderName = pathElements[0]; 
        if (folderName === undefined){
            folderName = 'Home';
        }
        //build breadcrumb
        const breadCrumb = buildBreadcrumb(pathname);
        //build table rows (main_conent)
        const mainContent = buildMainContent(fullStaticPath, pathname);
        //fill template data with: page title, breadcrumb, and table rows(main content)
        data = data.replace('page_title', folderName);
        data = data.replace('breadCrumb', breadCrumb);
        data = data.replace('mainContent', mainContent);
        //print data to page 
        response.statusCode = 200;
        response.write(data);
        return response.end();
    }

        //not a directory or file
    if(!stats.isFile()){
        response.statusCode = 401;
        response.write('401: Access denied!');
        console.log('Not a file');
        return response.end;
    }
            //401: access denied
    //File: 
    let fileDetails = {};
    //get file extension
    fileDetails.extname = path.extname(fullStaticPath);
    //get file mime type and add to response header
    getMimeType(fileDetails.extname).then(mime => {
        //store headers in object
        let head = {};
        let options = {};
        
        //filesize
        let stat;
        try{
            stat = fs.statSync(fullStaticPath);
        }catch(err){
            console.log(`There is an error! ${err}`);
        }
        fileDetails.size = stat.size;
        
        //response status code
        let statusCode = 200;
        //set "Content-Type" header for all file types
        head['Content-Type'] = mime;
        
        //get file size and add to response header
        //pdf? display in browser
        if(fileDetails.extname === '.pdf'){
             head['Content-Disposition'] = 'inline';
        }
        //audio/video? stream in ranges
        if(RegExp('audio').test(mime) || RegExp('video').test(mime)){
            
            head['Accept_Ranges'] = 'bytes';
            
            const range = request.headers.range;
            if(range){
                //bytes: start - end
                const start_end = range.replace(/bytes=/, "").split('-');
                const start = parseInt(start_end[0]);
                const end = start_end[1] ? parseInt(start_end[1]) : fileDetails.size - 1;
                //headers
                head['Content-Range'] = ` bytes ${start}-${end}/${fileDetails.size}`;
                head['Content-Length'] = end - start + 1;
                statusCode = 206;
                
                //options
                options = {start, end};
            }
        }
        
        //streaming method:
        const fileStream = fs.createReadStream(fullStaticPath, options);
        
        //stream chunks to your response object
        response.writeHead(statusCode, head); 
        fileStream.pipe(response);
        
        //Events
        fileStream.on('close', () =>{
            return response.end();
        });
        fileStream.on('error', () => {
            console.log(error.code); 
            response.statusCode = 404;
            response.write(`404: Error streaming file`);
            return response.end();
        });
    })
    .catch(err => {
        response.statusCode = 500;
        response.write('500: Internal Server Error');
        console.log(`Promise Error: ${err}`);
        return response.end();
    });
    

}
module.exports = respond;