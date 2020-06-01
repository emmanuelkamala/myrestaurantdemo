const path = require('path');

module.exports = {
    mode: "development",
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
      },
    devServer: {
        port: 5050,
        contentBase: path.join(__dirname, 'dist')
     }
}
// export const mode = "development";