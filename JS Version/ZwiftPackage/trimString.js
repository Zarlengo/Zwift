module.exports = (VarIn) => {
    if (VarIn === '' || VarIn.length === 0) {
        return '';
    }

    removeString = [
        String.fromCharCode(10), // line feed
        String.fromCharCode(13), // carriage return
        String.fromCharCode(32), // space
        '\n',                    // new line
        String.fromCharCode(46), // period
        String.fromCharCode(58), // colon
        String.fromCharCode(59)  // semi-colon
    ];
    
    while (removeString.includes(VarIn.slice(-1))) {
        VarIn = VarIn.slice(0, -1);
    }

    while (removeString.includes(VarIn.charAt(0))) {
        VarIn = VarIn.slice(1);
    }
    return VarIn.replace(String.fromCharCode(8217), String.fromCharCode(39))
};
