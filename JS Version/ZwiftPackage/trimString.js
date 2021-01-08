module.exports = (VarIn) => {
    if (VarIn === '' || VarIn.length === 0) {
        return '';
    }

    removeString = [
        String.fromCharCode(10),
        String.fromCharCode(13),
        String.fromCharCode(32),
        '\n',
        String.fromCharCode(46),
        String.fromCharCode(59)
    ];
    
    while (removeString.includes(VarIn.slice(-1))) {
        VarIn = VarIn.slice(0, -1);
    }

    while (removeString.includes(VarIn.charAt(0))) {
        VarIn = VarIn.slice(1);
    }
    return VarIn.replace(String.fromCharCode(8217), String.fromCharCode(39))
};
