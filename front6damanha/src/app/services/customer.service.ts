import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Customer {
  nome: string;
  telefone: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  getServicos(): Observable<Customer[]> {
    return this.list();
   }

private apiUrl = 'http://localhost:8080/clientes';

constructor(private http: HttpClient) { }

list(): Observable<Customer[]> {

  return this.http.get<Customer[]>(this.apiUrl);
}
create(customer: Customer): Observable<Customer> {
  return this.http.post<Customer>(this.apiUrl, customer);
}
}


