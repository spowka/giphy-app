import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

import {
  IGiphyData,
  IGiphyPagination,
  IGiphyResponse,
} from '../models/giphy.model';

@Injectable()
export class GiphyService {
  private _loading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  public loading$ = this._loading$.asObservable();

  private _giphyGifs$: BehaviorSubject<IGiphyData[]> = new BehaviorSubject<
    IGiphyData[]
  >([]);
  public giphyGifs$ = this._giphyGifs$.asObservable();

  private _pagination$: BehaviorSubject<IGiphyPagination> =
    new BehaviorSubject<IGiphyPagination>({ limit: 9, offset: 0 });
  public pagination$ = this._pagination$.asObservable();

  constructor(private http: HttpClient) {}

  public fetchGifs(query: string) {
    this._loading$.next(true);
    const params = {
      api_key: environment.giphyApiKey,
      q: query,
      limit: this._pagination$.value.limit,
      offset: this._pagination$.value.offset,
    };

    this.http
      .get<IGiphyResponse>(environment.giphyApiUrl, { params })
      .subscribe({
        next: (response) => {
          this._giphyGifs$.next(response.data);
          this._pagination$.next({
            ...this._pagination$.value,
            total_count: response.pagination.total_count,
          });
        },
        complete: () => {
          this._loading$.next(false);
        },
      });
  }

  public setPagination(limit: number, offset: number) {
    this._pagination$.next({ ...this._pagination$.value, limit, offset });
  }

  public resetPagination() {
    this._pagination$.next({ limit: 9, offset: 0 });
  }
}
