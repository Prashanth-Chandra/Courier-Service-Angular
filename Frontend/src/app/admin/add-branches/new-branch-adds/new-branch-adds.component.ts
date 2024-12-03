import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AddnewbranchService } from 'src/app/_services/addnewbranch.service';

@Component({
  selector: 'app-new-branch-adds',
  templateUrl: './new-branch-adds.component.html',
  styleUrls: ['./new-branch-adds.component.css']
})
export class NewBranchAddsComponent implements OnInit {

area12!: String;

  Lisstsssssss = [
    {
      name: "Nallakunta",
    },
    {
      name: "Tilak Nagar",

    },
    {
      name: "Tank Bund",

    },
    {
      name: "Hi Tech City",
    }
  ]


  Area1 = [
    {
      name: "Banjara Hills",
    },
    {
      name: "Tilak Nagar",

    },
    {
      name: "Tank Bund",

    },
    {
      name: "Hi Tech City",
    }
  ]

  
  Area12 = [
    {
      name: "Banjara Hills",
    },
    {
      name: "Tilak Nagar",

    },
    {
      name: "Tank Bund",

    },
    {
      name: "Hi Tech City",
    }
  ]

  
  Area13 = [
    {
      name: "Jubilee Hills",
    },
    {
      name: "KPHB",

    },
    {
      name: "SR Nagar",

    },
    {
      name: "Old City",
    }
  ]


  loadArea1(id:any){
    console.log('id--event',id);
    if(id==='Nallakunta'){
      this.Area1 = this.Area13;
    }else{
      this.Area1 = this.Area12;
    }
  }
  form: any = {

    id: null,
    branchName: null,
    districtName: null,
    area1Name: null,
    areaName: null,
    email: null,
    phoneNumber: null,
    
  };

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AddnewbranchService, private router: Router) { }

  ngOnInit(): void {
    
  }

  onSubmit(): void {
    const { id, branchName, districtName, area1Name, areaName, email, phoneNumber} = this.form;
    this.authService.addBranch(id, branchName, districtName, area1Name, areaName, email, phoneNumber).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;   
        this.isSignUpFailed = false;
        

      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }



  popupClose(){
    this.isSuccessful = false;
    this.form =null;
    this.router.navigateByUrl('admins/branch');    

  }




}
