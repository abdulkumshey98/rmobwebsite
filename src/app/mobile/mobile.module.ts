import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MbHomeComponent } from './components/mb-home/mb-home.component';
import { NgOtpInputModule } from  'ng-otp-input';
import { MbLoginComponent } from './views/mb-login/mb-login.component';


const categoryRoutes = (component: any) => {
  return [

      {
     path: '', component: MbLoginComponent
     },
     {
     path: '', component: MbLoginComponent
     },
    // {
    //   path: 'redeem', component: WbRedeemWalletComponent
    // },
    // {
    //   path: 'login', component: component
    // },
    // {
    //   path: 'orders', component: WbOrdersComponent
    // },
    // {
    //   path: 'order-detail', component: WbMyOrderDetailsComponent
    // },
    // {
    //   canActivate: [RoleGuardService],
    //   path: 'otp', component: component
    // },
    // {
    //   canActivate: [RoleGuardService],
    //   data: { roles: [Role.User] },
    //   path: 'place-order', component: component
    // },
    // {
    //   canActivate: [RoleGuardService],
    //   data: { roles: [Role.User] },
    //   path: 'select-payment-method', component: component
    // },
    // {
    //   canActivate: [RoleGuardService],
    //   data: { roles: [Role.User] },
    //   path: 'my-addresses', component: component
    // },
    // {
    //   canActivate: [RoleGuardService],
    //   data: { roles: [Role.User] },
    //   path: 'address', component: component
    // },
    // {
    //   canActivate: [RoleGuardService],
    //   data: { roles: [Role.User] },
    //   path: 'edit-address/:id', component: component
    // },
    // {
    //   canActivate: [RoleGuardService],
    //   data: { roles: [Role.User] },
    //   path: 'order-success', component: component
    // },
    // {
    //   canActivate: [RoleGuardService],
    //   data: { roles: [Role.User] },
    //   path: 'my-orders', component: component
    // },
    // {
    //   canActivate: [RoleGuardService],
    //   data: { roles: [Role.User] },
    //   path: 'order-details/:id', component: component
    // },
  ]
}


const mobileRoutes: Routes = [
  {
        path: '', component: MbHomeComponent
      },
      {
        path: 'login', component: MbLoginComponent
      },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(mobileRoutes)
  ],
  declarations: [
    MbHomeComponent,
    MbLoginComponent
  ],
})
export class MobileModule {

  constructor() {

  }

}
