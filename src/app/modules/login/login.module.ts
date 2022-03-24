import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { LoginRoutingModule } from './login-routing.module';
import { RegisterComponent } from './components/register/register.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
    declarations: [LoginComponent, RegisterComponent
    ],
    imports: [
        LoginRoutingModule,
        SharedModule,
    ],
    exports: [
        LoginComponent,
        RegisterComponent
    ]
})
export class LoginModule { }
