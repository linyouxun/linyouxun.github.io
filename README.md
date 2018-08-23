> from disk cache、from momery cache是指从客户端直接获取资源而不和服务器交互

>304是指客户端和服务器交互，服务器发现文件没有发生变化从而返回304 code

| from disk cache | from momery cache |
|----|--------|
|从本地资源里面获取（css）|从浏览器资源里面获取(js,图片),浏览器内存消失后再次访问后变成（from disk cache）|