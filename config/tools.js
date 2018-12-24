const fs = require('fs');

/**
 * 添加头函数
 */
function writeHead() {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <script>
    /**
     * 更新时间 ${new Date().toDateString()}
     */
  </script>
</head>
<body>
`
}

/**
 * 添加尾函数
 */
function writeFooter() {
  return `
</body>
</html>
`
}

/**
 * 产生一个模块
 * @param {模块名字} name
 * @param {模块链接} url
 */
function writeBlock(name, url) {
  return `
  <a style="display: block;height: 30px; line-height: 30px;" href="${url}">${name}</a>
`;
}


/**
 * 判断文件是否存在
 * @param {文件名} fileName
 */
function checkFileExist(fileName) {
  return fs.existsSync(fileName);
}


module.exports = {
  writeHead,
  writeFooter,
  writeBlock,
  checkFileExist,
}
