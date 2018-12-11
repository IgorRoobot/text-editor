import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SynonymsService {

  constructor(private http: HttpClient) { }

  getSynonyms(word) {
    const url = "https://api.datamuse.com/words?rel_syn=";
    return this.http.get(url + word);
  }
}
