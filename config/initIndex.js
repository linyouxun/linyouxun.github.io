/**
 * 初始化文件的指定文件的index.html
 */

const path = require('path');
const fs = require('fs');
const cheerio = require('cheerio');
const tools = require('./tools');
const rootPath = path.resolve(__dirname, '../');
// 默认过滤文件夹
const filterFiles = {
  'config': true,
  'static': true,
  'node_modules': true
}

var walk = function(modelPath) {
  tools.checkFileExist(path.join(modelPath, '/index.html'))
  fs.writeFile(path.join(modelPath, '/index.html'), tools.writeHead(), (error) => {
    if(error) {
      console.log(error);
    }
  });
  fs.readdirSync(modelPath).forEach(function(file) {
    if(/^\..*$/.test(file) || filterFiles[file]) {
      return;
    }
    var filePath = path.join(modelPath, '/' + file);
    var stat = fs.statSync(filePath);
    if (stat.isFile() && file !== 'index.html') {
      if (/(.*)\.(html|html)/.test(file)) {
        const htmlDom = fs.readFileSync(filePath, {
          encoding: 'utf-8'
        });
        fs.appendFile(
          path.join(modelPath, '/index.html'),
          tools.writeBlock(cheerio.load(htmlDom)('head title').text() || '未知',
          filePath.replace(rootPath, '').replace(/\\/g, '/')),
          (error) => {
            if(error) {
              console.log(error);
            }
          }
        );
      }
    }
    else if (stat.isDirectory()) {
      fs.appendFile(
        path.join(modelPath, '/index.html'),
        tools.writeBlock(file + '模块', './' + file),
        (error) => {
          if(error) {
            console.log(error);
          }
        }
      );
      walk(filePath);
    }
  })
  fs.appendFile(path.join(modelPath, '/index.html'), tools.writeFooter(), (error) => {
    if(error) {
      console.log(error);
    }
  });
};
walk(rootPath);
