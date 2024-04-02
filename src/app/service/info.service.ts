import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Info } from '../info';
import { Observable, Subject, catchError, throwError } from 'rxjs';
import { JwtService } from './jwt.service'; // Import JwtService

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  private baseApiUrl = 'http://localhost:8082/api/infos'; 
  private apiUrl = 'http://localhost:8082/api/addInfo'; 
  private apiGetAllUrl = 'http://localhost:8082/api/getAll'; 
  private infoAddedSubject = new Subject<void>(); 

  constructor(private http: HttpClient, private jwtService: JwtService) { } 

  addInfo(info: Info): Observable<Info> {
    return this.http.post<Info>(this.apiUrl, info, { headers: this.jwtService.createAuthorizationHeader() }) // Include JWT token in the headers
      .pipe(
        catchError(error => {
          console.error('Erreur lors de l\'ajout d\'info:', error);
          return throwError(error);
        })
      );
  }

  getAllInfos(): Observable<Info[]> {
    return this.http.get<Info[]>(this.apiGetAllUrl, { headers: this.jwtService.createAuthorizationHeader() }) // Include JWT token in the headers
      .pipe(
        catchError(error => {
          console.error('Erreur lors de la récupération des informations:', error);
          return throwError(error);
        })
      );
  }

  updateInfo(id: number, updatedInfo: Info): Observable<Info> {
    const url = `${this.baseApiUrl}/${id}`;
    return this.http.put<Info>(url, updatedInfo,{ headers: this.jwtService.createAuthorizationHeader() });
  }
  deleteInfo(id: number): Observable<void> {
    const url = `${this.baseApiUrl}/${id}`;
    return this.http.delete<void>(url,{ headers: this.jwtService.createAuthorizationHeader() });
  }

  emitInfoAddedEvent() {
    this.infoAddedSubject.next();
  }

  // Observable to subscribe to for information added event
  onInfoAdded(): Observable<void> {
    return this.infoAddedSubject.asObservable();
  }
}
