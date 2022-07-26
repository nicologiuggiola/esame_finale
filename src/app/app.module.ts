import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { BeerDisplayComponent } from './components/beer-display/beer-display.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { HomeWrapperComponent } from './components/home-wrapper/home-wrapper.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BeerDisplayComponent,
    WrapperComponent,
    HomeWrapperComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
