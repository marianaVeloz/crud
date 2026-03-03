import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://crudcrud.com/api/b198f7c79fb04cd49153ecb47db9d709'; // Cambia esto por tu URL

  constructor(private http: HttpClient) { }

  // Método PUT
  updateItem(id: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

  // Opcional: Necesitarás un GET para cargar los datos actuales en el formulario
  getItemById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}
