import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WbNavbarComponent } from './components/wb-navbar/wb-navbar.component';
import { WbHomeComponent } from './views/wb-home/wb-home.component';
import { WbLoginComponent } from './components/wb-login/wb-login.component';
import { WbOtpComponent } from './components/wb-otp/wb-otp.component';



const categoryRoutes = (component: any) => {
  return [
    {
      path: 'cart', component: component
    },
     {
     path: '', component: WbHomeComponent
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
    path: '', component: WbHomeComponent, children: [
      {
        path: '', component: WbHomeComponent,
        children: [
          ...categoryRoutes(WbHomeComponent),
        ]
      },
  //     {
  //       path: 'ps', component: ProductCatalogueComponent,
  //       children: categoryRoutes(ProductCatalogueComponent)
  //     },
  //     {
  //       path: 'collections', component: ProductCatalogueComponent,
  //       children:
  //         [{
  //           path: ':categoryKey', component: ProductCatalogueComponent,
  //           children: [
  //             {
  //               path: '', component: ProductCatalogueComponent,
  //               children: [
  //                 {
  //                   path: ':subCategoryKey', component: ProductCatalogueComponent,
  //                   children: [
  //                     {
  //                       path: 'products', component: ProductCatalogueComponent
  //                     },
  //                     {
  //                       path: ':groupKey', component: ProductCatalogueComponent
  //                     },
  //                     ...categoryRoutes(ProductCatalogueComponent)
  //                   ]
  //                 },
  //                 ...categoryRoutes(ProductCatalogueComponent)
  //               ]
  //             },
  //             ...categoryRoutes(ProductCatalogueComponent)
  //           ]
  //         },
  //         ...categoryRoutes(ProductCatalogueComponent)
  //         ]
  //     },
  //     {
  //       path: 'offers', component: WbOffersComponent
  //     },
  //     {
  //       path: 'profile', redirectTo: ''
  //     }
  //     // {
  //     //   path: 'products', component: ProductsComponent,
  //     // },
  //     // {
  //     //   path: 'products/details', component: ProductDetailsComponent
  //     // },
    ]
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
    WbOtpComponent
  ],
  entryComponents: []
})
export class DesktopModule { }
