import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
/*   { path: 'singlenews', loadChildren: './tab2/tab2.module#Tab2PageModule' }*/
  { path: 'singlenews', loadChildren: './singlenews/singlenews.module#SingleNewsPageModule'}
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
