import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Contact} from "../model/contact.model";
import {Group} from "../model/group.model";
import {ChineseCharHandleService} from "./ChineseCharHandleService";

/*
 Generated class for the Contacts provider.
 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class Contacts {

  constructor(public http: Http,public ChineseCharHandleService :ChineseCharHandleService) {
     console.log('Hello Contacts Provider');
    // console.log(this.ChineseCharHandleService.query("刘"));
    // console.log(this.ChineseCharHandleService.query("M"));
  }

  /**
   * Get contacts data
   * @returns {Promise<TResult|T>}
   */
  getContacts() {
    return this.http.get('./assets/data/contacts.json')
      .toPromise()
      .then(response => response.json())
      .catch(err => {
        return Promise.reject(err)
      })
  }

  /**
   * Grouping contacts
   * @param array
   * @returns {any}
   */
  grouping(array: Contact[]): Group[] {

    let groupContacts: Group[] = [];
    const letterStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ#";

    if (array.length <= 0) return [];

    // Create a parent container
    groupContacts = letterStr.split('')
      .map((str) => {
        return {
          groupName: str,
          contacts: []
        }
      });
    // Push into the correct group
    var reg= /^[A-Za-z]+$/;
    groupContacts.forEach((item) => {

      for (let i of array) {

        if (i.displayName[0].toUpperCase() === item.groupName ) {
          item.contacts.push(i);
          continue;
        }else if(this.ChineseCharHandleService.query(i.displayName[0])[0].toUpperCase()=== item.groupName){
          item.contacts.push(i);
          continue;
        }
        // else if (letterStr.indexOf(i.displayName[0].toUpperCase()) === -1) {
        else if (!reg.test(this.ChineseCharHandleService.query(i.displayName[0])[0].toUpperCase())) {
          groupContacts[groupContacts.length - 1].contacts.push(i)
        }
      }

    });

    return groupContacts;

  }

}
