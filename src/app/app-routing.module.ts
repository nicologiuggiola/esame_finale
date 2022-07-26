import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeWrapperComponent } from './components/home-wrapper/home-wrapper.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';

const routes: Routes = [
  { path: 'home', component: HomeWrapperComponent},
  { path: 'inventory', component: WrapperComponent },
  { path: '',   redirectTo: '/first-component', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
