import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PharmacyListComponent } from './components/pharmacy-list/pharmacy-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PharmacyService } from './services/pharmacy.service';
import { ItemsComponent } from './components/items/items.component';
import { ItemsService } from './services/items.service';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    PharmacyListComponent,
    ItemsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule
  ],
  providers: [PharmacyService, ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
