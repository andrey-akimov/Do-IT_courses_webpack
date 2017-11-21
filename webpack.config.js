var path = require('path');

module.exports = {
    entry: './js/index.js', // файл который нужно обработать
    output: {
        filename: 'bundle.js', // имя файла
        path: path.resolve(__dirname, 'dist') // путь файла который будет собран
    },
    module: {
        loaders: [
            //загрузчики
            {
                // добавить babel-loader
                test: /\.js?$/, // определяем тип файлов
                exclude: /(node_modules)/, // исключить
                loader: 'babel-loader', // название лоадера
                query: {
                    presets: ['env', 'stage-0']
                }
            }
        ]
    }
};
