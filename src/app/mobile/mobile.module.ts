import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MbHomeComponent } from './components/mb-home/mb-home.component';
import { NgOtpInputModule } from  'ng-otp-input';


const categoryRoutes = (component: any) => {
  return [
    {
      path: 'cart', component: component
    },
    {
      path: 'wallets', component: MbHomeComponent
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
    path: '', component: MbHomeComponent, data: { animation: 'MainPage' }, children: [
      {
        path: '', component: MbHomeComponent
      },
  //     {
  //       path: 'default-splash', component: MbDefaultSplashComponent
  //     },
  //     {
  //       path: 'my-addresses', component: MbAddressComponent,
  //     },
  //     {
  //       path: 'address', component: MbAddressComponent
  //     },
  //     {
  //       path: 'edit-address/:id', component: MbAddressComponent
  //     },
  //     {
  //       path: 'product/:id', component: ProductDetailsComponent
  //     },
  //     {
  //       path: 'wallet', component: MbMyWalletComponent
  //     },
  //     {
  //       path: 'redeem-wallet', component: MbWalletRedeemComponent
  //     },
  //     {
  //       path: 'login', component: MbLoginComponent
  //     },
  //     {
  //       path: 'order-details', component: MbOrderDetailsComponent
  //     },
  //     {
  //       path: 'my-orders', component: MbMyOrdersComponent
  //     },
  //     {
  //       path: 'otp', component: MbOtpComponent
  //     },
  //     {
  //       path: 'search', component: SearchViewComponent
  //     },
  //     {
  //       path: 'search-result', component: SearchResultComponent
  //     },
  //     {
  //       path: 'ps', component: SearchResultComponent,
  //     },
  //     {
  //       path: 'collections', component: CategoriesComponent,
  //       children:
  //         [
  //           {
  //             path: ':categoryKey',
  //             children: [
  //               {
  //                 path: '',
  //                 children: [
  //                   {
  //                     path: ':subCategoryKey',
  //                     children: [
  //                       {
  //                         path: 'products'
  //                       },
  //                       {
  //                         path: ':groupKey'
  //                       }
  //                     ]
  //                   }
  //                 ]
  //               }
  //             ]
  //           }
  //         ]
  //     },
  //     {
  //       path: 'view-story', component: MbStoryViewComponent
  //     },
  //     {
  //       path: 'order-success', component: MbOrderSuccessComponent
  //     },
  //     {
  //       path: 'place-order', component: MbPlaceOrdersComponent
  //     },
  //     {
  //       path: 'cart', component: CartComponent,
  //       canActivate: [RoleGuardService],
  //       data: { roles: [Role.User] },
  //     },
  //     {
  //       path: 'offers', component: OffersComponent
  //     },
  //     {
  //       path: 'profile', component: ProfilesComponent,
  //       canActivate: [RoleGuardService],
  //       data: { roles: [Role.User] },
  //     }
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(mobileRoutes)
  ],
  declarations: [
    MbHomeComponent
  ],
  // declarations: [MobileHomeComponent, ProductListComponent, MobileLayoutComponent, CartComponent, ProfilesComponent,
  //   ProductDetailsComponent, TopnavComponent, MbOfferStoriesComponent, MbFtProductsComponent, TitlebarComponent, MbSplashScreenComponent, MbDefaultSplashComponent, MbHomeNavbarComponent, MbHomeMainBannerComponent, CategoriesComponent, MbHomeCategoriesComponent, MbHomeOfferSliderComponent, MbHomeSliderBannerComponent, MbProductGridsComponent, MbProductVariantComponent, MbProductDetailsComponent, MbHeaderNavComponent, MbRelatedProductsComponent, MbHomeStoriesOffersComponent, MbStoryViewComponent, MbHomeBrandsComponent, MbCategoryDetailsComponent, MbPlaceOrdersComponent, MbOrderSuccessComponent, MbOfferViewComponent, SearchViewComponent, SearchResultComponent, MbLoginComponent, MbOtpComponent, MbMyOrdersComponent, MbOrderDetailsComponent, MbOrderTrackComponent, MbOrderCancelReasonComponent, MbMyWalletComponent, MbWalletRedeemComponent, MbRedeemRequestComponent, MbRedeemCancelComponent, MbRedeemDetailsComponent, MbAddressComponent, MbAddAddressComponent]
})
export class MobileModule {

  constructor() {

  }

}
