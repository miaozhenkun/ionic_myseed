/** 注释
*2017/10/13
*作者:miao
*功能:  封装的请求网络类
*/
import {Injectable} from '@angular/core';
import {
  Http, Response, Headers, RequestOptions, URLSearchParams, RequestOptionsArgs, RequestMethod
} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Observable, TimeoutError} from "rxjs";
import {Utils} from "./Utils";
import {GlobalData} from "./GlobalData";
import {NativeService} from "./NativeService";
import {APP_SERVE_URL, REQUEST_TIMEOUT} from "./Constants";
import {Logger} from "./Logger";
import {App, Alert,NavController} from 'ionic-angular';
import {LoginPage} from "../pages/user/login/login";
import {HomePage} from "../pages/home/home";
@Injectable()
export class HttpMyNetService {
  private nav:NavController;

  token:any;
  constructor(public http: Http,
              private globalData: GlobalData,
              public logger: Logger,
              private nativeService: NativeService,private app: App) {
    this.nav=app.getActiveNav();
  }

  public request(url: string, options: RequestOptionsArgs): Observable<Response> {
    console.log(    this.nav);
    url = Utils.formatUrl(url.startsWith('http') ? url : APP_SERVE_URL + url);
    this.optionsAddToken(options);
    return Observable.create(observer => {
      this.nativeService.showLoading();
      //  console.log('%c 请求前 %c', 'color:blue', '', 'url', url, 'options', options);
      this.http.request(url, options).timeout(REQUEST_TIMEOUT).subscribe(res => {
        this.nativeService.hideLoading();
        //  console.log('%c 请求成功 %c');
        console.log(res.json().success);
        if(res.json().success==401){//未登陆
          this.nativeService.showToast('未登录');
          // this.nav.push(LoginPage);
        }else if(res.json().success ==403){
          this.nativeService.showToast('无权访问');
           this.nav.push(LoginPage);
        }else if(res.json().success==1){
           this.nativeService.showToast('访问成功');
        }else if(res.json().success==0){
          this.nativeService.showToast(res.json().msg+'');
        }
        observer.next(res);
      }, err => {
        this.requestFailed(url, options, err);//处理请求失败
        observer.error(err);
      });
    });
  }

  public get(url: string, paramMap: any = null): Observable<Response> {
    return this.request(url, new RequestOptions({
      method: RequestMethod.Get,
      search: HttpMyNetService.buildURLSearchParams(paramMap)
    }));
  }

  public post(url: string, body: any = {}): Observable<Response> {
    return this.request(url, new RequestOptions({
      method: RequestMethod.Post,
      body: body,
      headers: new Headers({
        'Content-Type': 'application/json; charset=UTF-8'
      })
    }));
  }

  public postFormData(url: string, paramMap: any = null): Observable<Response> {
    return this.request(url, new RequestOptions({
      method: RequestMethod.Post,
      search: HttpMyNetService.buildURLSearchParams(paramMap).toString(),
      headers: new Headers({
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      })
    }));
  }

  public put(url: string, body: any = {}): Observable<Response> {
    return this.request(url, new RequestOptions({
      method: RequestMethod.Put,
      body: body
    }));
  }

  public delete(url: string, paramMap: any = null): Observable<Response> {
    return this.request(url, new RequestOptions({
      method: RequestMethod.Delete,
      search: HttpMyNetService.buildURLSearchParams(paramMap).toString()
    }));
  }

  public patch(url: string, body: any = {}): Observable<Response> {
    return this.request(url, new RequestOptions({
      method: RequestMethod.Patch,
      body: body
    }));
  }

  public head(url: string, paramMap: any = null): Observable<Response> {
    return this.request(url, new RequestOptions({
      method: RequestMethod.Head,
      search: HttpMyNetService.buildURLSearchParams(paramMap).toString()
    }));
  }

  public options(url: string, paramMap: any = null): Observable<Response> {
    return this.request(url, new RequestOptions({
      method: RequestMethod.Options,
      search: HttpMyNetService.buildURLSearchParams(paramMap).toString()
    }));
  }

  /**
   * 将对象转为查询参数
   * @param paramMap
   * @returns {URLSearchParams}
   */
  private static buildURLSearchParams(paramMap): URLSearchParams {
    let params = new URLSearchParams();
    if (!paramMap) {
      return params;
    }
    for (let key in paramMap) {
      let val = paramMap[key];
      if (val instanceof Date) {
        val = Utils.dateFormat(val, 'yyyy-MM-dd hh:mm:ss')
      }
      params.set(key, val);
    }
    return params;
  }

  /**
   * 处理请求失败事件
   * @param url
   * @param options
   * @param err
   */
  private requestFailed(url: string, options: RequestOptionsArgs, err: Response): void {
    this.nativeService.hideLoading();
    //console.log('%c 请求失败 %c', 'color:red', '', 'url', url, 'options', options, 'err', err);
    if (err instanceof TimeoutError) {
      this.nativeService.alert('请求超时,请稍后再试!');
      return;
    }
    if (!this.nativeService.isConnecting()) {
      this.nativeService.alert('请求失败，请连接网络');
      return;
    }
    let msg = '请求发生异常';
    try {
      let result = err.json();
      this.nativeService.alert(result.message || msg);
    } catch (err) {
      let status = err.status;
      if (status === 0) {
        msg = '请求失败，请求响应出错';
      } else if (status === 404) {
        msg = '请求失败，未找到请求地址';
      } else if (status === 500) {
        msg = '请求失败，服务器出错，请稍后再试';
      }
      this.nativeService.alert(msg);
      this.logger.httpLog(err, msg, {
        url: url,
        status: status
      });
    }

  }

  private optionsAddToken(options: RequestOptionsArgs): void {
    let token = this.globalData.token;
    if (options.headers) {
      options.headers.append('access-token', '' + token);
    } else {
      options.headers = new Headers({
        'access-token':  ''+token
      });
    }
  }
}
