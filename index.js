require('dotenv').config();

const app = require('./src/app');
require('./src/utils/database');

async function main () {
    await app.listen(app.get('port'));
    console.log('Server on port', app.get('port'));
}

main();