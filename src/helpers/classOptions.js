export const classOptions = (options) => {
    const classes = Object.keys(options);
    
    return classes.reduce((acc, val) => {
        return `${acc} ${options[val] ? val : ''}`;
    }, '').trim();
}