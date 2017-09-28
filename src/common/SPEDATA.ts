/** 注释
*2017/9/26
*作者:miao
*功能: 数据库存储操作
*/
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import {Injectable} from "@angular/core";
import {Platform} from "ionic-angular";
@Injectable()
export class SPEDATA{
  database: SQLiteObject;
  SPEDATA_CONFIG = {
    USER_INFO: {isUserShare: true},// 登录用户信息
  }
  constructor(private sqlite: SQLite,private platform:Platform) {

  }
  ngOnInit() {
    this.initDB();
  }
  initDB(){
    if (this.platform.is('cordova')) {
      this.sqlite.create({
        name: 'data.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        db.executeSql('CREATE TABLE IF NOT EXISTS spedata (key, value, user_id);', {})//建表
          .then(() => console.log('Executed SQL'))
          .catch(e => console.log(e));
        this.database = db;
      });
    }else {

    }

  }
  //插入数据
  insert(key, value,userId){
    this.database.executeSql("INSERT INTO spedata (key,value,user_id) VALUES (?,?,?);",[key,value,userId])
      .then(() => alert('暂存成功'))
      .catch(e => console.log(e));//插入数据
  }
  //修改数据
  update(params){
    //console.log(params);
    var date: string = new Date().toLocaleDateString();
    var time: string = new Date().toTimeString().substring(0,5);
    var datetime: string = date + " " + time;
    console.log(datetime);
    this.database.executeSql("UPDATE spedata set key=?,value=? WHERE id=?;",[params.key,
      params.value
    ])
      .then(() => alert('修改成功'))
      .catch(e => console.log(e));
  }
//删除
  buttonDelete(id){
    this.database.executeSql("DELETE FROM spedata WHERE id=?;",id)
      .then(() => alert('删除成功'))
      .catch(e => console.log(e));//删除数据
  }
//查询
  query() {
    this.database.executeSql("select * from spedata",{}).then((data)=>{
    },(error)=>{
      console.log('查询错误');
    });
  }

}
