import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Project } from '../domain/project.model';
import { Observable } from 'rxjs';

@Injectable()
export class ProjectService {

  private readonly domain = 'api/project';

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
  })

  constructor(private http: HttpClient, @Inject('BASE_CONFIG') private config) { }

  getAllProject(): Observable<Project[]> {
    const url = `${this.config.url}/${this.domain}/getAllProjects`;
    return this.http.get<Project[]>(url, {headers: this.headers});
  }

  createProject(name:string, desc: string, beginDate: Date, endDate: Date,
    coverImage:string, ownerId: string): Observable<Project[]> {
      const url = `${this.config.url}/${this.domain}/createProject`;
      const params = {
        Name: name,
        Desc: desc,
        BeginDate: beginDate,
        EndDate: endDate,
        CoverImage: coverImage,
        OwnerId: ownerId,
      }
      return this.http.post<Project[]>(url, params, {headers: this.headers});
  }

  editProject(id: string, name:string, desc: string, beginDate: Date, endDate: Date,
    coverImage:string, ownerId: string, state: number, scoreTot: number): Observable<Project[]> {
    const url = `${this.config.url}/${this.domain}/editProject`;
    const params = {
      Id: id,
      Name: name,
      Desc: desc,
      BeginDate: beginDate,
      EndDate: endDate,
      CoverImage: coverImage,
      OwnerId: ownerId,
      State: state,
      ScoreTot: scoreTot,
    }
    return this.http.post<Project[]>(url, params, {headers: this.headers});
  }

  removeProject(id: string): Observable<Project[]> {
    const url = `${this.config.url}/${this.domain}/removeProject`;
    const params = {
      Id: id,
    }
    console.log(id);
    return this.http.post<Project[]>(url, params, {headers: this.headers});
  }
}
