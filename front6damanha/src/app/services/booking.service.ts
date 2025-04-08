import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Booking {
  id: number;
  nome: string;
  dataHora: Date;
}

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  getServicos(): Observable<Booking[]> {
    return this.list();
  }
  private apiUrl = 'http://localhost:8080/agendamentos';

  constructor(private http: HttpClient) { }

  list(): Observable<Booking[]> {
    return this.http.get<Booking[]>(this.apiUrl);
  }

  create(booking: Booking): Observable<Booking> {
    return this.http.post<Booking>(this.apiUrl, booking);
  }
}
