import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddNewBranch } from '../admin/add-branches/new-branch-adds/newBranchModel';

// Define the Branch interface for consistent typing
export interface Branch {
  id: number;
  branchName: string;
  districtName: string;
  area1Name: string;
  areaName: string;
  email: string;
  phoneNumber: string;
}

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AddnewbranchService {
  private AUTH_API = 'http://localhost:8080/api/auth/';

  constructor(private http: HttpClient) {}

  // Fetch branches
  getTasK(): Observable<Branch[]> {
    return this.http.get<Branch[]>(this.AUTH_API + 'getBranch');
  }

  // Add a new branch
  addBranch(
    id: number,
    branchName: string,
    districtName: string,
    area1Name: string,
    areaName: string,
    email: string,
    phoneNumber: string
  ): Observable<AddNewBranch> {
    return this.http.post<AddNewBranch>(
      this.AUTH_API + 'postBranch',
      { id, branchName, districtName, area1Name, areaName, email, phoneNumber },
      httpOptions
    );
  }

  // Delete a branch
  delete(task: Branch): Observable<void> {
    return this.http.delete<void>(`${this.AUTH_API}deleteBranch/${task.id}`, httpOptions);
  }

  // Update a branch
  brchUpdate(task: Branch): Observable<Branch> {
    return this.http.put<Branch>(this.AUTH_API + 'updateBranch/', task, httpOptions);
  }
}
