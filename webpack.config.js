const path = require('path');


module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'js', 'app.js'),
    devServer: {
        port: 9000,
        static: './css'
    },
    
}