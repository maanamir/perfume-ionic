import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { PerfumesListService } from './../perfumes-list.service';

@Component({
  selector: 'app-perfumelist',
  templateUrl: './perfumelist.page.html',
  styleUrls: ['./perfumelist.page.scss'],
})
export class PerfumelistPage implements OnInit {

  constructor(private router: Router,
    private perfumesListService: PerfumesListService
    ) { }

  perfumes = [];

    ngOnInit() {
    }
    changeUrl(clickedPerfume) {
    const id = clickedPerfume.id;
    const url = `perfumelist/${id}`;

    this.router.navigateByUrl(url);

    
  }

  addTask()
  {
    this.router.navigateByUrl('/add-perfume');
  }

  ionViewDidEnter() {
    console.log('view Enter');
    this.perfumes = this.perfumesListService.returnPerfumesList();
    

  }
}
