import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { DataSenseComponent } from './data-sense/data-sense.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {path:'home',component:LandingPageComponent},
  // {path:'solutions',component:SolutionsComponent},
  // {path:'about',component:DataSenseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
