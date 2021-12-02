import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablaComponent } from './component/tabla/tabla.component';
import {HttpClientModule} from '@angular/common/http';
import {Ng2OrderModule} from 'ng2-order-pipe';
import { BuscadorPipe } from './pipes/buscador.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TablaComponent,
    BuscadorPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
