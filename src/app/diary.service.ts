import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { DiaryEntry } from './diaryEntry';

@Injectable({
  providedIn: 'root',
})
export class DiaryService {
  private options = {
    headers: new HttpHeaders().set('Content-Type', 'application/json'),
  };

  constructor(private http: HttpClient) {}

  get(date: String): Observable<DiaryEntry> {
    return this.http.get<DiaryEntry>(`http://localhost:3000/diary/${date}`);
  }

  getAll(): Observable<DiaryEntry[]> {
    return this.http.get<DiaryEntry[]>('http://localhost:3000/diary');
  }

  create(diary: DiaryEntry): Observable<DiaryEntry> {
    return this.http.post<DiaryEntry>(
      'http://localhost:3000/diary',
      JSON.stringify(diary),
      this.options
    );
  }
}
