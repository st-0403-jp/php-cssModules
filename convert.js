const fs = require('fs');
const { temp } = require('./convert/css.bundle');

console.log(temp);

fs.writeFileSync('./dist/index.php', temp);