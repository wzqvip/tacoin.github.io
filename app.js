var fs = require("fs");
//首次运行，恢复备份的sqlite数据库
if(!fs.existsSync("./database/spark.db") && fs.existsSync("./database/spark.db.bak")){
  fs.copyFileSync("./database/spark.db.bak","./database/spark.db");
}

var WebContext=require("webcontext");
var app=new WebContext();

app.mixin({
  checkPermission(userType){
    return new Promise((resolve)=>{
      this.session.load().then((session)=>{
        this.sessionData=session;//缓存起来，后面可以直接用
        if(session["userName"] && session["userType"]<=userType){
            resolve(true);
            return ;
        }else{
            this.response.end('{"code":"Permission_Deny"}');
            resolve(false);
        }
      })
    });
  }
})
 