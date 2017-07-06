import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {RecruitmentComponent} from './recruitment/recruitment.component';
import {NewsComponent} from './news/news.component';
import {ServicesComponent} from './services/services.component';
import {EventsComponent} from './events/events.component';
import {TipsComponent} from './tips/tips.component';

const routing: Routes = [
  { path: '', component: HomeComponent} ,
  { path: 'services', component: ServicesComponent},
  { path: 'events', component: EventsComponent},
  { path: 'tips', component: TipsComponent},
  { path: 'news', component: NewsComponent},
  { path: 'recruitment', component: RecruitmentComponent},
  { path: 'contact', component: ContactComponent}
]

export const AppRoutes = RouterModule.forRoot(routing);
