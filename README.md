# webspark

webspark是使用node.js开发的博客系统，支持 mysql,sqlite两种数据库，默认使用sqlite数据库。 使用npm安装后即可运行，开箱即用。

安装步骤

1. 使用npm安装webspark

```
 npm install --save webspark
```

2. 首次运行，在命令行执行如下命令，用于将node_modules中的项目文件复制到当前目录，当然手工copy也是可以的

```
  node -e "require('webspark')"
```

3. 打开浏览器输入：http://localhost:8000/ 即可访问

后续访问直接运行app.js即可

```
  node app.js
```

![home](https://raw.githubusercontent.com/windyfancy/webspark/master/screenshot/1.png)

![theme](https://raw.githubusercontent.com/windyfancy/webspark/master/screenshot/2.png)

![theme2](https://raw.githubusercontent.com/windyfancy/webspark/master/screenshot/3.png)

![theme3](https://raw.githubusercontent.com/windyfancy/webspark/master/screenshot/4.png)

![theme4](https://raw.githubusercontent.com/windyfancy/webspark/master/screenshot/5.png)

![theme5](https://raw.githubusercontent.com/windyfancy/webspark/master/screenshot/6.png)

![article](https://raw.githubusercontent.com/windyfancy/webspark/master/screenshot/7.png)

![theme6](https://raw.githubusercontent.com/windyfancy/webspark/master/screenshot/8.png)

![commet](https://raw.githubusercontent.com/windyfancy/webspark/master/screenshot/9.png)

<div style="display: flex; flex-wrap: wrap; justify-content: space-around; align-items: flex-start;">
  <div style="flex-basis: 40%; max-width: 50%;">
    <img src="screenshot/1.png" alt="图片1" style="max-width: 100%; height: auto;" /><br />
    图片1标题
  </div>
  <div style="flex-basis: 40%; max-width: 50%;">
    <img src="screenshot/2.png" alt="图片2" style="max-width: 100%; height: auto;" /><br />
    图片2标题
  </div>
  <div style="flex-basis: 40%; max-width: 50%;">
    <img src="screenshot/3.png" alt="图片3" style="max-width: 100%; height: auto;" /><br />
    图片3标题
  </div>
  <div style="flex-basis: 40%; max-width: 100%;">
    <img src="screenshot/4.png" alt="图片4" style="max-width: 100%; height: auto;" /><br />
    图片4标题
  </div>

</div>
