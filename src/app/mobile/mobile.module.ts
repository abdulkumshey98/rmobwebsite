import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MbHomeComponent } from './components/mb-home/mb-home.component';
import { NgOtpInputModule } from  'ng-otp-input';
import { MbLoginComponent } from './views/mb-login/mb-login.component';
import { MbSplashComponent } from './views/mb-splash/mb-splash.component';
import { MbIntroComponent } from './views/mb-intro/mb-intro.component';
import { MbDashboardComponent } from './views/mb-dashboard/mb-dashboard.component';
import { MbBottomNavComponent } from './components/mb-bottom-nav/mb-bottom-nav.component';
import { MbTopNavComponent } from './components/mb-top-nav/mb-top-nav.component';
import { MbHomeSliderComponent } from './components/mb-home-slider/mb-home-slider.component';
import { MbLocationComponent } from './components/mb-location/mb-location.component';
import { MbSearchProductsComponent } from './views/mb-search-products/mb-search-products.component';


const categoryRoutes = (component: any) => {
  return [

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
        path: '', component: MbIntroComponent
      },
      {
        path: 'splash', component: MbSplashComponent
      },
       {
        path: 'home', component: MbDashboardComponent
      },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(mobileRoutes)
  ],
  declarations: [
    MbHomeComponent,
    MbSplashComponent,
    MbIntroComponent,
    MbDashboardComponent,
    MbBottomNavComponent,
    MbTopNavComponent,
    MbHomeSliderComponent,
    MbLocationComponent,
    MbSearchProductsComponent,
  ],
})
export class MobileModule {

  constructor() {

  }

}
