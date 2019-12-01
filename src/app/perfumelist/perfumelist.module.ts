import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PerfumelistPage } from './perfumelist.page';


import { PerfumelistitemComponent } from './perfumelistitem/perfumelistitem.component';

const routes: Routes = [
  {
    path: '',
    component: PerfumelistPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PerfumelistPage,PerfumelistitemComponent]
})
export class PerfumelistPageModule {}
