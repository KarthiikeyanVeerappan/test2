import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { MyC1Component } from './my-c1/my-c1.component';
import { from } from 'rxjs';
import { MycBglrComponent } from './myc-bglr/myc-bglr.component';
import { MycHydComponent } from './myc-hyd/myc-hyd.component';
import { MycMyrComponent } from './myc-myr/myc-myr.component';
import { FilterPipe } from './Pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MyC1Component,
    MycBglrComponent,
    MycHydComponent,
    MycMyrComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
