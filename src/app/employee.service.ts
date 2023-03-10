import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiServerURL ='http://localhost:8080';
  constructor(private http: HttpClient) { }

  public getEmployeees(): Observable<Employee[]>{
      return this.http.get<Employee[]>(`${this.apiServerURL}/employee/all`);
  }

  public addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.apiServerURL}/employee/add`, employee);
  }

  public updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.apiServerURL}/employee/update`, employee);
  }

  public deleteEmployee(employee?: Employee): Observable<void>  {
    return this.http.delete<void>(`${this.apiServerURL}/employee/delete/${employee?.id}`);
  }
}
