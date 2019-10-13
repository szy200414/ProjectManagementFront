import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable()
export class UserService {

  private readonly domain = 'api/user';

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
  })

  constructor(private http: HttpClient, @Inject('BASE_CONFIG') private config) { }

  createUser(firstName:string, lastName:string, email:string, password:string, imagePath:string, tel:string) {
    const url = `${this.config.url}/${this.domain}/createUser`;
    const params = {
      FirstName: firstName,
      LastName: lastName,
      Email: email,
      Password: password,
      ImagePath: imagePath,
      Tel: tel
    }
    return this.http.post(url, params, {headers: this.headers});
  }

  login(email:string, password:string) {
    const url = `${this.config.url}/${this.domain}/login`;
    const params = {
      Email: email,
      Password: password,
    }
    return this.http.post(url, params, {headers: this.headers});
  }
}
