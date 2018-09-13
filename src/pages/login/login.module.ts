import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { NgxErrorsModule } from '../../../node_modules/@ultimate/ngxerrors';

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
    NgxErrorsModule
  ],
})
export class LoginPageModule {}
