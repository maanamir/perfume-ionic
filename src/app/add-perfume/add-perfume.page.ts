import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PerfumesListService } from './../perfumes-list.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-add-perfume',
  templateUrl: './add-perfume.page.html',
  styleUrls: ['./add-perfume.page.scss'],
})
export class AddPerfumePage implements OnInit {
  addperfumeForm: FormGroup;
  perfumes=[];
  today={};
 
  constructor(private formBuilder: FormBuilder,
    private perfumesListService: PerfumesListService,
    private router:Router,
    private alertController: AlertController
    ) { }

  ngOnInit() {
    const now = new Date();
   this.today = now.toISOString();
   
    this.perfumes=this.perfumesListService.getAllPerfumes();
    this.formInitializer();
  }

  
  formInitializer() {
    
    let last:any = this.perfumes[this.perfumes.length-1];
    var y = +(last.id);
    this.addperfumeForm = this.formBuilder.group({
      //id: [y+1],
      id: [y+1+""],
      name: [null, [Validators.required]],
      descript: [null, [Validators.required]],
      status: [null, ],
      sDate: [null, [Validators.required]],
      // sTime: [null, [Validators.required]],
      fDate: [null, [Validators.required]],
      // fTime: [null, [Validators.required]],
      

    });
  }

  add()
 {
   
   this.perfumesListService.addPerfume(this.addperfumeForm.value);
   console.log('name',this.addperfumeForm.value);
   const url='/perfumelist';
   this.router.navigateByUrl(url);
 }

 










 
 async deletePerfume() {
  


  
  const alert = await this.alertController.create({
    header: 'Warning',
    // subHeader: 'Subtitle',
    message: `Are you sure you dont want to add new task`,
    // buttons: ['OK']
    buttons: [
      {
        text: 'Cancel'
      },
      {
        text: 'Okay',
        handler: () => {
          console.log('Confirm Okay');
        
          this.router.navigateByUrl('/perfumelist');
        }
      }
    ]
  });

  alert.present();

}

}
