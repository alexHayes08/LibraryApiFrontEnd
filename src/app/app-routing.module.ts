import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IntroToSeleniumComponent } from './intro-to-selenium/intro-to-selenium.component';
import { HompageComponent } from './hompage/hompage.component';

const appRoutes: Routes = [
    {
        path: 'intro-to-selenium',
        component: IntroToSeleniumComponent
    },
    {
        path: '',
        component: HompageComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // <- Debugging only.
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
