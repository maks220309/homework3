const fs = require('fs');
fs.writeFileSync('./index.html', `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>    
</body>
</html>`, (error) => {
    error ? console.log(error) : null
});
fs.mkdirSync('./styles', () => { });
fs.writeFileSync('./styles/style.css', `* {
    padding: 0;
    margin: 0;
}
html,
body {
    height: 100%;
}`, (error) => {
    error ? console.log(error) : null
});
setTimeout(()=>{
    if(fs.existsSync('./styles/style.css')){
        fs.unlink('./styles/style.css', ()=>{})
    }else{
        console.log('файлика,который вы хоите удалить, не существует')
    }
    if(fs.existsSync('./index.html')){
        fs.unlink('./index.html', ()=>{})
    }else{
        console.log('файлика,который вы хоите удалить, не существует')
    }
}, 4500);
setTimeout(()=>{
    if(fs.existsSync('./styles')){
        fs.rmdir('./styles', ()=>{})
    }else{
        console.log('папка,которую мы хотим удалить, не существует')
    }
}, 4500);
fs.writeFileSync('./script2.js', `const lodash = require('lodash');
let arr = ['', 2, 6, 8, '', '', 10];
arr = lodash.compact(arr);
arr = lodash.without(arr, 1,2,3,4,5);
arr = lodash.sum(arr);
console.log(arr);`, (error) => {
    error ? console.log(error) : null
});