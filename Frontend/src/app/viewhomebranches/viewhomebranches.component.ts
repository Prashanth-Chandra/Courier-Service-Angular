import { Component, OnInit } from '@angular/core';
import { AddnewbranchService } from '../_services/addnewbranch.service';

@Component({
  selector: 'app-viewhomebranches',
  templateUrl: './viewhomebranches.component.html',
  styleUrls: ['./viewhomebranches.component.css']
})
export class ViewhomebranchesComponent implements OnInit {
  form: any[] = [];

  constructor(private service: AddnewbranchService) {}

  ngOnInit(): void {
    this.fetchBranches();
  }

  fetchBranches(): void {
    this.service.getTasK().subscribe((res) => {
      this.form = res;
    });
  }

  // Uncomment this method if deletion functionality is needed
  // deleteBranch(task: any): void {
  //   this.service.delete(task).subscribe(() => {
  //     this.fetchBranches();
  //   });
  // }
}
