import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ItemsComponent } from './components/items/items.component';
import { ItemComponent } from './components/Item/Item.component';
import { TotalComponent } from './components/total/total.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ItemsComponent,
    ItemComponent,
    TotalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule// especificamos que vamos a trabajar con formularios
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
