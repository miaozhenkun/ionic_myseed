export  const  dbname= 'health_app.db';
export  const  sqls=[
  //持久化存储数据表，key-唯一标识，value-存储内容，user_id-登录用户唯一标识
  "CREATE TABLE IF NOT EXISTS spedata (key, value, user_id);",

  // 列表查询-列表数据本地存储
  // id-数据主键，item-数据内容，order_time-排序时间，module-模块
  "CREATE TABLE IF NOT EXISTS listdata_local (id, item, order_time, module, user_id);",
  // 列表查询-上次更新时间本地存储
  // module-模块，last_time上次获取时间
  "CREATE TABLE IF NOT EXISTS listdata_lasttime_local (module, last_time, user_id);"

];
