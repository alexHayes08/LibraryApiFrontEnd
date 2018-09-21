import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IntroToSeleniumComponent } from './intro-to-selenium/intro-to-selenium.component';
import { HompageComponent } from './hompage/hompage.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
    {
        path: 'intro-to-selenium',
        component: IntroToSeleniumComponent
    },
    {
        path: '',
        component: HompageComponent
    },
    {
        path: '**',
        component: PageNotFoundComponent
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
