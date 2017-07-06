import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component';

const routing: Routes = [
  { path: '', component: HomeComponent} ,
  { path: 'services', component: HomeComponent},
  { path: 'events', component: HomeComponent},
  { path: 'tips', component: HomeComponent},
  { path: 'news', component: HomeComponent},
  { path: 'recruitment', component: HomeComponent},
  { path: 'contact', component: HomeComponent},
  { path: 'contact', component: HomeComponent},
  { path: 'contact', component: HomeComponent}
]

export const AppRoutes = RouterModule.forRoot(routing);
