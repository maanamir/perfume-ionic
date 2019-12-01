import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PerfumesListService {
  perfumes = [
    { id: '1', name: 'MAD DEMO' ,descript:'presentation of my semseter project  ',
    status:'not started',sDate:'2019-12-10T00:00:00',sTime:'grg',fDate:'2019-12-20T00:00:00',fTime:'grg'},
    { id: '2', name: 'DAD DEMO' ,descript:'mobile application course final project demo',
    status:'not started',sDate:'2019-12-10T00:00:00',sTime:'grg',fDate:'2019-12-25T00:00:00',fTime:'grg'}
  
    ];
  constructor() { }

  get getPerfumes(){
    return this.perfumes;
  }

  getAllPerfumes(){
    return this.perfumes;
  }
  deletePerfume(id){
    this.perfumes = this.perfumes.filter(e => {
    
      return e.id !== id;
      
    }) ;
  }

  addPerfume(perfume){
    console.log(perfume);
    this.perfumes.push(perfume);
    console.log(this.perfumes);
  }

  returnPerfumesList() {
    return this.perfumes;
  }
}
