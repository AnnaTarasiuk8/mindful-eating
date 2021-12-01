import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { DiaryEntry } from './diaryEntry';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DiaryService {
  private options = {
    headers: new HttpHeaders().set('Content-Type', 'application/json'),
  };

  constructor(private http: HttpClient) {}

  get(date: String): Observable<DiaryEntry> {
    return this.http.get<DiaryEntry>(
      `${environment.apiUrl}/diary?date=${date}`
    );
  }

  getAll(): Observable<DiaryEntry[]> {
    return this.http.get<DiaryEntry[]>(`${environment.apiUrl}/diary`);
  }

  create(diary: DiaryEntry): Observable<DiaryEntry> {
    return this.http.post<DiaryEntry>(
      `${environment.apiUrl}/diary`,
      JSON.stringify(diary),
      this.options
    );
  }
}
