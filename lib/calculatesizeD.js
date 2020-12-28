const {execSync} = require('child_process');

const calculateSizeD = itemFullStaticPath => {
    //get rid of whitespace
    const itemFullStaticPathCleaned = itemFullStaticPath.replace(/\s/g, '\ ');
    
    const commandOutput = execSync(`du -sh "${itemFullStaticPathCleaned}"`).toString();
    
    //removing all whitespace from commandoutput and then spliting into an array by /
    let filesize = commandOutput.replace(/\s/g, '').split('/');
    //filesize is the first item of the array
    filesize = filesize[0];
    
    //size unit
    const filesizeUnit = filesize.replace(/\d|\./g,'');
//    console.log(filesizeUnit); 
    //size number
    const filesizeNum = parseFloat(filesize.replace(/[a-z]/ig,''));
//    console.log(filesizeNum);
    
    const units = "BKMGT";
    //B 10B -> 10 bytes
    //K 10K -> 10 * 1000 bytes (1000^1)
    //M 10M -> 10 * 1000 * 1000 bytes (1000^2)
    //G 10G -> 10 * 1000 * 1000 * 1000 bytes (1000^3)
    //T 10T -> 10 * 1000 * 1000 * 1000 * 1000 bytes (1000^4)
    const filesizeBytes = filesizeNum * Math.pow(1000, units.indexOf(filesizeUnit));

//    console.log(filesizeBytes);
    
    return [filesize, filesizeBytes];
};

module.exports = calculateSizeD;