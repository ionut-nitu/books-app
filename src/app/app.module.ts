import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterService } from './shared/services/filter-service/filter.service';
import { HttpClientModule } from '@angular/common/http';
import { ColumnService } from './shared/services/column-service/column.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [FilterService, ColumnService],
  bootstrap: [AppComponent]
})
export class AppModule { }
