const fs = require('fs');
const path = require('path');

const calculateSizeD = require('./calculatesizeD.js');
const calculateSizeF = require('./calculatesizeF.js');

const buildMainContent = (fullStaticPath, pathname) => {
    let mainContent = '';
    let items;
    //first loop through elements in the folder
    try{
        items = fs.readdirSync(fullStaticPath);
    }catch(err){
        console.log(`readdirSync: ${err}`);
        return `<div class="alert alert-danger">Internal Server Error</div>`;
    }
    
    //remove .DS_Store files
    items = items.filter(element => element !== '.DS_Store');
    
    //remove Project files
    if (pathname === '/'){
            items = items.filter(element => ! ['Project_files'].includes(element));
    };
    
    //get following elements for each item: 
    items.forEach(item => {
        //store item details in an object
        let itemDetails = {};
        //name
        itemDetails.name = item;
        //link
        const link = path.join(pathname, item);
        //icon
        const itemFullStaticPath = path.join(fullStaticPath, item);
        try{
            itemDetails.stats = fs.statSync(itemFullStaticPath);
        }catch(err){
            console.log(`statSync: ${err}`);
            return `<div class="alert alert-danger">Internal Server Error</div>`;
        }
        //check if its a file or directory and assign icon and size
        //directory
        let pathnum = pathname.split('/');
        pathnum = pathnum.filter(element => element !== '');

        let iconsrc = '';
        if (pathname.length > 2){
            for (let i = 0; i < pathnum.length - 1; i++){
                iconsrc += '../';     
            }
        }
        iconsrc += 'Project_files/icon';
        
        let newpage;
        if (itemDetails.stats.isDirectory()){
            itemDetails.icon = `<img class="folder" id="folder" src="${iconsrc}/folder.png">`;
            [itemDetails.size, itemDetails.sizeBytes] = calculateSizeD(itemFullStaticPath);
            newpage = 'target=""';
        }
        //file
        else if (itemDetails.stats.isFile()){
            itemDetails.icon = `<img class="folder" id="doc" src="${iconsrc}/document.png">`;
            [itemDetails.size, itemDetails.sizeBytes] = calculateSizeF(itemDetails.stats);
            newpage = 'target="_blank"';
        }
        
        //when the file was last changed (unix timestamp)
        itemDetails.timeStamp = parseInt(itemDetails.stats.mtimeMs);
        
//        convert timestamp to data
        itemDetails.date = new Date(itemDetails.timeStamp).toLocaleString();
        
        
        mainContent += `
        <tr data-name="${item}" data-size="${itemDetails.sizeBytes}" data-time="${itemDetails.timeStamp}">
        <td style="width: 475px"><a ${newpage} href="${link}">${itemDetails.icon}${item}</a>
        </td>
        <td style="width: 125px">${itemDetails.size}</td>
        <td>${itemDetails.date}</td>
        </tr>`;
    });
    return mainContent;
};

module.exports = buildMainContent;