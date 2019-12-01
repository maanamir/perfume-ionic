import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'perfumelist',
    pathMatch: 'full'
  },
 
  { path: 'perfumelist',
  children:[
    {
      path: '',
      loadChildren: './perfumelist/perfumelist.module#PerfumelistPageModule' 
    },
    {
      path: ':perfumeid',
      loadChildren: './perfume/perfume.module#PerfumePageModule'
    }
   
  
  ]
},
  { path: 'add-perfume', loadChildren: './add-perfume/add-perfume.module#AddPerfumePageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
