import { NgModule } from '@angular/core';
import {Routes, RouterModule, ExtraOptions} from '@angular/router';
import {MainLayoutComponent} from './containers/main-layout/main-layout.component';
import {environment} from '../environments/environment';

const routes: Routes = [];

//
// const routerOptions: ExtraOptions = {
//   useHash: false,
//   anchorScrolling: 'enabled',
//   // scrollPositionRestoration: 'enabled',
//   // onSameUrlNavigation: 'reload'
// };

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
