import { NgModule } from '@angular/core';
import { PermissionDirective } from './permission/permission';
import { AutoAreatextDirective } from './auto-areatext/auto-areatext';
@NgModule({
	declarations: [PermissionDirective,
    AutoAreatextDirective,
    ],
	imports: [],
	exports: [PermissionDirective,
    AutoAreatextDirective,
    ]
})
export class DirectivesModule {}
