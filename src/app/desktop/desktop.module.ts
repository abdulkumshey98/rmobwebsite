import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WbNavbarComponent } from './components/wb-navbar/wb-navbar.component';
import { WbHomeComponent } from './views/wb-home/wb-home.component';
import { WbLoginComponent } from './components/wb-login/wb-login.component';
import { WbOtpComponent } from './components/wb-otp/wb-otp.component';
import { WbLocationComponent } from './components/wb-location/wb-location.component';
import { WbLogoutComponent } from './components/wb-logout/wb-logout.component';
import { WbMobileBrandsComponent } from './views/wb-mobile-brands/wb-mobile-brands.component';
import { WbProductGridComponent } from './components/wb-product-grid/wb-product-grid.component';
import { WbAllMobileComponent } from './views/wb-all-mobile/wb-all-mobile.component';
import { WbSellVariantComponent } from './components/wb-sell-variant/wb-sell-variant.component';
import { WbUsedPhoneComponent } from './views/wb-used-phone/wb-used-phone.component';
import { WbValuationComponent } from './components/wb-valuation/wb-valuation.component';
import { WbStartQuestionComponent } from './components/wb-start-question/wb-start-question.component';
import { WbPricingComponent } from './views/wb-pricing/wb-pricing.component';



const categoryRoutes = (component: any) => {
  return [
    {
      path: 'cart', component: component
    },
     {
     path: '', component: WbHomeComponent
     },
      {
     path: 'sell-old-mobile', component: WbMobileBrandsComponent
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

const desktopRoutes: Routes = [

     {
     path: '', component: WbHomeComponent
     },
      {
     path: 'sell-old-mobile', component: WbMobileBrandsComponent
     },
      {
     path: 'sell-apple', component: WbAllMobileComponent
     },{
     path: 'used-mobile', component: WbUsedPhoneComponent
     },
     {
     path: 'device-evalution', component: WbPricingComponent
     }
]

@NgModule({
  imports: [

    CommonModule,
    RouterModule.forChild(desktopRoutes)
  ],
  declarations: [
    // DesktopLayoutComponent,
    // DesktopHomeComponent,
    // WbLoginModalComponent,
    // WbNavbarComponent,
    // WbSearchComponent,
    // WbFooterComponent,
    // WbShopByCategoryComponent,
    // WbSuggestedProductsComponent,
    // WbTwoBannersComponent,
    // WbShopByBrandsComponent,
    // WbFooterBannerComponent,
    // WbMainBannerComponent,
    // WbOffersComponent,
    // WbMyordersComponent,
    // WbOrderDetailsComponent,
    // WbMyWalletComponent,
    // WbWalletHistoryComponent,
    // WbWalletRedeemComponent,
    // WbMyAddressComponent,
    // WbAddNewAddressComponent,
    // WbMyCartComponent,
    // WbPlaceOrdersComponent,
    // WbProductVariantComponent,
    // WbProductOverviewModalComponent,
    // WbProductItemCardComponent,
    // WbProductVariantsModalComponent,
    // ProductCatalogueComponent,
    // WbOrderSuccssfullComponent,
    // WbSecondaryBannerComponent,
    // WbHomeBrandsComponent,
    // WbOrdersComponent,
    // WbMyOrderDetailsComponent,
    // WbRedeemWalletComponent

   WbHomeComponent,
    WbNavbarComponent,
    WbLoginComponent,
    WbOtpComponent,
    WbLocationComponent,
    WbLogoutComponent,
    WbMobileBrandsComponent,
    WbProductGridComponent,
    WbAllMobileComponent,
    WbSellVariantComponent,
    WbUsedPhoneComponent,
    WbValuationComponent,
    WbStartQuestionComponent,
    WbPricingComponent
  ],
  entryComponents: []
})
export class DesktopModule { }
