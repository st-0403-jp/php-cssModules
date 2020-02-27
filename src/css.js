import css from './style.css';
import php from './index.php';

console.log('css.bundle');

const { source } = php;
const cssKeys = Object.keys(css);

let result = source;
cssKeys.forEach(key => {
    const search = new RegExp(key, 'g');
    result = result.replace(search, css[key]);
});

console.log(result);

exports.temp = result;
