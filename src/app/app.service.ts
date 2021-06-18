import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export type BaseResponse = {
  result: boolean,
  number_code: number,
  message: string,
  data?: any;
  meta_data?: any
}

@Injectable({
  providedIn: 'root'
})
export class AppService {
  SERVER_API_URL: string = "https://vocabulary-be.herokuapp.com";

  constructor(public _http: HttpClient) {
  }

  doSearchWord(en?: string, vn?: string, limit?: any, skip?: any): Observable<BaseResponse> {
    let query: string = '?';
    if (en) {
      query += `en=${en}`;
    }
    if (vn) {
      query += `&vn=${vn}`;
    }
    if (limit) {
      query += `&limit=${limit}`;
    } else {
      query += '&limit=20';
    }
    if (skip) {
      query += `&skip=${skip}`;
    } else {
      query += '&skip=0';
    }
    return this._http.get<BaseResponse>(`${(this.SERVER_API_URL)}/api/v1/vocabulary${query}`);
  }

  createNewWord(insertVm: {
    en: string,
    vn: string,
    label_code: string
  }): Observable<BaseResponse> {
    return this._http.post<BaseResponse>(`${(this.SERVER_API_URL)}/api/v1/vocabulary`, insertVm);
  }

  updateWord(id: string, updateVm: {
    field: 'en' | 'vn' | 'labelCode',
    value: string
  }[]): Observable<BaseResponse> {
    return this._http.put<BaseResponse>(`${(this.SERVER_API_URL)}/api/v1/vocabulary/${id}`, updateVm);
  }

  deleteWord(id: string): Observable<BaseResponse> {
    return this._http.delete<BaseResponse>(`${(this.SERVER_API_URL)}/api/v1/vocabulary/${id}`);
  }
}
