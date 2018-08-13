/**
 * Accepts an array of classNames or an object whose keys are
 * classNames and values are booleans and returns a single
 * string of classNames
 * @param {*} options - Array or Object
 * @return {String} - Space separated classNames
 */
export const classOptions = (options) => {
  if (Array.isArray(options)) {
    return options.join(',');
  }

  if (typeof options === 'object') {
    const classes = Object.keys(options);
		
    return classes.reduce((acc, val) => {
      return `${acc} ${options[val] ? val : ''}`;
    }, '').trim();
  }

  const errorString = `classOptions error: Provided options must be an array or object. A ${typeof options} was provided.`;
  console.warn(errorString);

  return '';
}
