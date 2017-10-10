export const GOODLIST_URL = 'http://rapapi.org/mockjsdata/18396/api/discove/goodlist';
export const GOODLIST_head_URL = 'http://img.lapin365.com/productpictures';
export const DEFAULT_AVATAR = './assets/img/avatar.png';//用户默认头像
export const PAGE_SIZE = 5;//默认分页大小
export const IMAGE_SIZE = 1024;//拍照/从相册选择照片压缩大小
export const QUALITY_SIZE = 94;//图像压缩质量，范围为0 - 100
export const REQUEST_TIMEOUT = 12000;//请求超时时间,单位为毫秒
/*----------------------------------------文件服务器地址----------------------------------------*/
export const FILE_SERVE_URL = 'http://172.16.19.86/kit_file_server/';//文件服务:测试环境
// export const APK_DOWNLOAD = 'http://omzo595hi.bkt.clouddn.com/ionic2_tabs.apk';//android apk下载完整地址,用于android本地升级
// export const APP_DOWNLOAD = 'http://omzo595hi.bkt.clouddn.com/download.html';//app网页下载地址,用于ios升级或android本地升级失败
export const APK_DOWNLOAD = '';//android apk下载完整地址,用于android本地升级
export const APP_DOWNLOAD = '';//app网页下载地址,用于ios升级或android本地升级失败
/*----------------------------------------app版本升级服务地址----------------------------------------*/
export const APP_VERSION_SERVE_URL = '';//app版本升级服务;测试环境,查询app最新版本号,更新日志等信息.
/*----------------------------------------后台Api地址----------------------------------------*/
export const APP_SERVE_URL = 'http://192.168.1.252:9201/boms-manager/api';
//字典码表
export  const  GLOBAL_DICSMAP={
  "STATECODE": {// 状态代码
    "200": "成功",
    "201": "失败",
    "202": "认证失败"
  },
  "ADVERSEREACTIONTYPE": {// 不良反应信息类别
    "01": "发热",
    "02":"红肿",
    "03":"硬结",
    "04":"皮疹",
    "05":"化脓",
    "06":"结痂",
    "07":"头痛",
    "08":"乏力",
    "09":"恶心",
    "10":"呕吐",
    "11":"腹泻",
    "12":"其他",
    "---": "待添加"
  },
  "GENDER": {// 性别类型
    "01": "男",
    "02": "女"
  },
  "IDENTTIME": {// 时间标识
    "EIGHTNUM": "08:30-09:00",
    "NINENUM": "9:00-10:00",
    "TENNUM": "10:00~10:30",
    "ELEVENNUM": "11:00-12:00",
    "THIRTEENNUM": "13:00-14:00",
    "FORTEENNUM": "14:00-15:00",
    "FIFTEENNUM": "15:00-16:00",
    "SIXTEENNUM": "16:00-17:00"
  },
  "CHILDSTATE": {// 宝宝年龄状态
    "01": "0-3岁",
    "02": "4-6岁",
    "03": "7-10岁",
    "04": "10岁以上"
  },
  "CHILDRELATION": {// 宝宝关系类别
    "01": "父亲",
    "02": "母亲",
    "03": "爷爷",
    "04": "奶奶",
    "05": "姥爷",
    "06": "姥姥",
    "07": "其他"
  },
  "VISTYPE": {// 就诊方式
    "01": "门诊",
    "02": "住院"
  },
  "ISVAC": {// 是否已接种
    "01": "已接种",
    "02": "未接种"
  },
  "BESPOKESTATE": {// 预约状态
    "01": "未预约",
    "02": "已预约",
    "03": "取消预约",
    "05":  ''
  },
  "USERNEWSTYPE": {// 用户消息状态
    "01": "未读",
    "02": "已读"
  },
  "MESSAGETYPE": {// 用户消息类型
    "01": "预约消息",
    "02": "接种消息"
  },
  "ADVERSERECTIONTYPE": {// 用户消息类型
    "00": "无异常",
    "01": "发热",
    "02": "过敏",
    "03": "呼吸困难",
    "04": "腹泻",
    "05": "疲劳",
    "06": "红肿",
    "07": "呕吐",
    "08": "化脓",
    "09": "神志不清",
    "---": "待添加"
  },
  "IS_FREE":{//是否免费
    "01": "免费",
    "02": "收费"
  },
  "IS_NECESSARY":{//是否必要
    "01": "必打",
    "02": "非必打"
  },
  "ALERT_APPOINT_AHEADE":{// 预约提醒提前天数
    7: "七天",
    5: "五天",
    3: "三天",
    2: "两天",
    1: "一天"
  },
  "ALERT_VACC_AHEADE":{// 接种提醒提前天数
    5: "五天",
    3: "三天",
    2: "两天",
    1: "一天"
  }
};


