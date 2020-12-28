const {execSync} = require('child_process');

const calculateSizeF = stats => {
    
    const filesizeBytes = stats.size; //bytes
    
    const units = "BKMGT";

    const index = Math.floor(Math.log10(filesizeBytes)/3);

    const filesizeCalc = (filesizeBytes/Math.pow(1000, index)).toFixed(0);
    
    const filesize = `${filesizeCalc}${units[index]}`;
    
    return [filesize, filesizeBytes];
};

module.exports = calculateSizeF;