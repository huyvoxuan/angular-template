import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component';

const routing: Routes = [
  { path: '', component: HomeComponent} //,
  //path: 'employees', component: EmployeeComponent},
  //path: 'employee-detail/:id', component: EmployeeDetailComponent}
]

export const AppRoutes = RouterModule.forRoot(routing);
