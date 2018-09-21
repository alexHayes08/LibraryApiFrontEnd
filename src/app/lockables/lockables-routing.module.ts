import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LockablesComponent } from './lockables.component';

const appRoutes: Routes = [
    {
        path: 'lockables',
        component: LockablesComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class LockablesRoutingModule { }
