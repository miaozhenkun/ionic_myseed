import { Injectable } from '@angular/core';
 import { Platform } from 'ionic-angular';
 import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
 import { Http } from '@angular/http';
// import 'rxjs/add/operator/map';
 import { BehaviorSubject } from 'rxjs/Rx';
 import { Storage } from '@ionic/storage';
 import {SQLitePorter} from "@ionic-native/sqlite-porter";
 import {dbname, sqls} from "./Sqlinit";

declare var window;
@Injectable()
export class DatabaseProvider {
  database: SQLiteObject;
  private databaseReady: BehaviorSubject<boolean>;

  constructor(public sqlitePorter: SQLitePorter, private storage: Storage, private sqlite: SQLite, private platform: Platform, private http: Http) {
    this.databaseReady = new BehaviorSubject(false);
    console.log(window.device);
    if (window.sqlitePlugin !== undefined) {
      this.platform.ready().then(() => {
        this.sqlite.create({
          name: dbname,
          location: 'default'
        })
          .then((db: SQLiteObject) => {
            this.database = db;
            this.storage.get(dbname).then(val => {
              if (val) {
                this.databaseReady.next(true);
              } else {
                this.fillDatabase();
                //this.initTables();
              }
            });
          });
      });
    }else {
      this.database= window.openDatabase(dbname, "1.0", "Database", 200000);
      this.fillDatabase();
     // this.initTables();
    }


  }
  //初始化数据库
  initTables  () {
    this.database.transaction(function (tx) {
      for (var i = 0; i < sqls.length; i++) {
        var query = sqls[i].replace(/\\n/g, '\n');
        tx.executeSql(query);
      }
    })
    //   .then(data=>{
    //   Promise.resolve("OK");
    // },err=>{
    //   Promise.reject(err);
    // })
  };
  //执行sql
  executeSql(query, parameters){
    this.database.executeSql(query,parameters).then(
      data=>{
        var items = [];
        for (var i = 0; i < data.rows.length; i++) {
          items.push(data.rows.item(i));
        }
        return items;
       // Promise.resolve(items);
      },err=>{
        return err;
        // Promise.reject(err);
      }
    )
    //this.database.executeSql(_db, query, parameters)
  }

  fillDatabase() {
    console.log('执行fill');
    this.http.get('assets/dummyDump.sql')
      .map(res => res.text())
      .subscribe(sql => {
        this.sqlitePorter.importSqlToDb(this.database, sql)
          .then(data => {
            this.databaseReady.next(true);
            this.storage.set('database_filled', true);
          })
          .catch(e => console.error(e));
      });
  }

  addDeveloper(name, skill, years) {
    let data = [name, skill, years]
    return this.database.executeSql("INSERT INTO developer (name, skill, yearsOfExperience) VALUES (?, ?, ?)", data).then(data => {
      return data;
    }, err => {
      console.log('Error: ', err);
      return err;
    });
  }
  getAllDevelopers() {
    return this.database.executeSql("SELECT * FROM developer", []).then((data) => {
      console.log('执行');
      let developers = [];
      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
          developers.push(data.rows.item(i));
        }
      }
      return developers;
    }, err => {
      console.log('Error: ', err);
      return [];
    });
  }

  getDatabaseState() {
    return this.databaseReady.asObservable();
  }


}
