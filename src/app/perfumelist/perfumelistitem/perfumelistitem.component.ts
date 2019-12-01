import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfumelistitem',
  templateUrl: './perfumelistitem.component.html',
  styleUrls: ['./perfumelistitem.component.scss'],
})
export class PerfumelistitemComponent implements OnInit {

  
  constructor(private router:Router) { }
 @Input() item;

 
newDate1:any;
newDate2:any;
days:any;
 now = new Date();
 today=this.now.toISOString();
  ngOnInit() {

    let dateString = this.item.fDate;
this.newDate2 = new Date(dateString);
this.newDate1= new Date(this.today);
this.dayDifference();
  }

  dayDifference()
  {
    
  
// To calculate the time difference of two dates 
var Difference_In_Time = this.newDate2.getTime() - this.newDate1.getTime(); 
  
// To calculate the no. of days between two dates 
var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 
this.days = Math.trunc( Difference_In_Days );
console.log(this.days);
  
  }

  changeUrl(clickedPerfume) {
    const id = clickedPerfume.id;
    const url = `perfumelist/${id}`;

    this.router.navigateByUrl(url);

    
  }

}
