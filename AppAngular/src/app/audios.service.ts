import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Audio } from './Audio';

const HttpOptions = {
  headers : new HttpHeaders({
    'Content-Type' : 'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class AudiosService {

  url = 'https://localhost:7273/api/audios'

  constructor(private http: HttpClient) { }

  SelecionarTodos(): Observable<Audio[]>{
    return this.http.get<Audio[]>(this.url);
  }

  SelecionarPK(AudioId:number): Observable<Audio>{
    const apiUrl = `${this.url}/${AudioId}`;
    return this.http.get<Audio>(apiUrl);
  }

  SalvarAudio(audio:Audio):Observable<any>{
    return this.http.post<Audio>(this.url, audio, HttpOptions);
  }

  AtualizarAudio(audio:Audio): Observable<any>{
    return this.http.put<Audio>(this.url, audio, HttpOptions)
  }
  
    ExcluirAudio(AudioId:number):Observable<any>{
      const apiUrl = `${this.url}/${AudioId}`;
      return this.http.delete<number>(apiUrl, HttpOptions);
    }


}


