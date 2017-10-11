import { Directive } from '@angular/core';

/**
 * Generated class for the PermissionDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[permission]' // Attribute selector
})
export class PermissionDirective {
  constructor() {
    console.log('Hello PermissionDirective Directive');
  }

}
