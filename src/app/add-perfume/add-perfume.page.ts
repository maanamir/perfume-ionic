import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PerfumesListService } from './../perfumes-list.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-perfume',
  templateUrl: './add-perfume.page.html',
  styleUrls: ['./add-perfume.page.scss'],
})
export class AddPerfumePage implements OnInit {
  addperfumeForm: FormGroup;
  perfumes=[];
  constructor(private formBuilder: FormBuilder,
    private perfumesListService: PerfumesListService,
    private router:Router
    ) { }

  ngOnInit() {
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
      image: [null, [Validators.required]],
      descript: [null, [Validators.required]]
    });
  }

  add()
 {
   
   this.perfumesListService.addPerfume(this.addperfumeForm.value);
   console.log('name',this.addperfumeForm.value);
   const url='home';
   this.router.navigateByUrl(url);
 }

}
