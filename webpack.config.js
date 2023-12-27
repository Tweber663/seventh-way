const path = require('path');

module.exports = {
    mode: 'development', 
    entry: './inputFolder/input.js',
    output: {
        path: path.resolve(__dirname, 'output'), 
        filename: 'index.js'
    }, 
    watch: true
}