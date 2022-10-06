import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

import { IGiphyPagination, IGiphyResponse } from '../models/giphy.model';

@Injectable({
  providedIn: 'root',
})
export class GiphyService {
  private _giphyGifs$: Subject<IGiphyResponse> = new Subject<IGiphyResponse>();
  public giphyGifs$ = this._giphyGifs$.asObservable();

  private _pagination$: BehaviorSubject<IGiphyPagination> =
    new BehaviorSubject<IGiphyPagination>({ limit: 9, offset: 0 });
  public pagination$ = this._pagination$.asObservable();

  constructor(private http: HttpClient) {}

  public fetchGifs(query: string) {
    const params = {
      api_key: environment.giphyApiKey,
      q: query,
      limit: this._pagination$.value.limit,
      offset: this._pagination$.value.offset
    };

    this.http
      .get<IGiphyResponse>(environment.giphyApiUrl, { params })
      .subscribe((gifs) => {
        console.log(gifs);
        this._giphyGifs$.next(gifs);
      });
  }

  public setPagination(limit: number, offset: number) {
    this._pagination$.next({ limit, offset });
  }
}
