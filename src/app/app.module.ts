import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutes } from './app.routes';
import { MenuComponent } from './menu/menu.component';
import { SubMenuComponent } from './sub-menu/sub-menu.component';
import { ContactComponent } from './contact/contact.component';
import { RecruitmentComponent } from './recruitment/recruitment.component';
import { NewsComponent } from './news/news.component';
import { TipsComponent } from './tips/tips.component';
import { EventsComponent } from './events/events.component';
import { ServicesComponent } from './services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    SubMenuComponent,
    ContactComponent,
    RecruitmentComponent,
    NewsComponent,
    TipsComponent,
    EventsComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
