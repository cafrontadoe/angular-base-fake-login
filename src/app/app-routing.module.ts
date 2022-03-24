import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/helpers/auth.guard';

const routes: Routes = [

  {
    path: '',
    loadChildren: () =>
        import('./modules/login/login.module').then(
            (module) => module.LoginModule
        ),
},
{
  path: 'dishes',
  loadChildren: () =>
      import('./modules/dishes/dishes.module').then(
          (module) => module.DishesModule
      ),
  canActivate: [AuthGuard]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
