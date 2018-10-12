import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginContainerComponent, RegistrationLogicComponent } from './core/containers';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginContainerComponent },
  { path: 'register', component: RegistrationLogicComponent },
  { path: 'admin', loadChildren: 'src/app/features/admin/admin.module#AdminModule', canActivate: [AuthGuard] },
  { path: 'shop', loadChildren: 'src/app/features/shop/shop.module#ShopModule', canActivate: [AuthGuard] },
  { path: 'wishlist', loadChildren: 'src/app/features/wishlist/wishlist.module#WishlistModule', canActivate: [AuthGuard]},
  { path: '**',  redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
