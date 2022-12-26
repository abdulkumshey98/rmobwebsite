import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';


const routes: Routes = [
    {
      path: '',
      loadChildren: () => environment.isDesktop
        ? import('./desktop/desktop.module').then(m => m.DesktopModule) :
        import('./mobile/mobile.module').then(m => m.MobileModule)
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
