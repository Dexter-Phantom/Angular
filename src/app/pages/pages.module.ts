import { NgModule } from '@angular/core';
import { PAGES_ROUTES } from './pages.routes';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafic1Component } from './grafic1/grafic1.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Grafic1Component
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Grafic1Component
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES
    ]
})

export class PagesModule {}
