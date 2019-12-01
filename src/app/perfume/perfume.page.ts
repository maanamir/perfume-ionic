import { Component, OnInit } from '@angular/core';

import { ActivatedRoute,Router } from '@angular/router';

import { PerfumesListService } from './../perfumes-list.service';

import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-perfume',
  templateUrl: './perfume.page.html',
  styleUrls: ['./perfume.page.scss'],
})
export class PerfumePage implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router,
    private alertController: AlertController,
    private perfumesListService: PerfumesListService
    ) {}
  perfumes = [];
  newSDate:any;
  newFDate:any;
singlePerfume;
  ngOnInit() {
    this.perfumes=this.perfumesListService.getAllPerfumes();
    this.route.paramMap.subscribe(paramMap => {
      const val = paramMap.get('perfumeid');

      this.singlePerfume = this.perfumes.find(obj => {
        return obj.id.includes(val);

      });
    });
    
    let dateSString = this.singlePerfume.sDate;
    this.newSDate = new Date(dateSString);
    let dateFString = this.singlePerfume.fDate;
    this.newFDate = new Date(dateFString);
  }


  async delete()
  {
   

      
      this.perfumesListService.deletePerfume(this.singlePerfume.id);
      console.log(this.perfumes);
      this.router.navigateByUrl('/perfumelist');


   
  }

  async deletePerfume() {
    console.log('deletePerfume', this.singlePerfume);

    const alert = await this.alertController.create({
      header: 'Warning',
      // subHeader: 'Subtitle',
      message: `Are you sure you want to remove ${this.singlePerfume.name}?`,
      // buttons: ['OK']
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
            this.perfumesListService.deletePerfume(this.singlePerfume.id);
            this.router.navigateByUrl('/perfumelist');
          }
        }
      ]
    });

    alert.present();

  }



}
