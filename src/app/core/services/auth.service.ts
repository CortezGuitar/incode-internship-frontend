import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserAuthModel } from '../../shared/models/UserAuthModel';
import { Observable } from 'rxjs';
import { LoginResponseModel } from '../../shared/models/LoginResponseModel';
import { UserResponseModel } from '../../shared/models/UserResponseModel';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  addUser(user: UserAuthModel): Observable<LoginResponseModel> {
    return this.http.post<LoginResponseModel>(`${environment.baseUrl}/auth`, user);
  }

  logIn(user: UserAuthModel): Observable<LoginResponseModel> {
    return this.http.post<LoginResponseModel>(`${environment.baseUrl}/login`, user);
  }

  getUserByToken(): Observable<UserResponseModel> {
    return this.http.get<UserResponseModel>(
      `${environment.baseUrl}/user`
      );
  }
}
