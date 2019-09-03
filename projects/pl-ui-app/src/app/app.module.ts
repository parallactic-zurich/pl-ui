import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ParallacticUiModule } from 'parallactic-ui';

import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { TableColorCellRendererComponent } from './components/table/table-color-cell-renderer/table-color-cell-renderer.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';

@NgModule({
    declarations: [
        AppComponent,
        TableComponent,
        TableColorCellRendererComponent,
        DatepickerComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ParallacticUiModule
    ],
    providers: [],
    entryComponents: [
        TableColorCellRendererComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
