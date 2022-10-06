import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

import { Observable } from 'rxjs';

import { IGiphyData, IGiphyPagination } from './models/giphy.model';
import { GiphyService } from './services/giphy.service';

@Component({
  selector: 'app-giphy-layout',
  templateUrl: './giphy-layout.component.html',
  styleUrls: ['./giphy-layout.component.scss'],
})
export class GiphyLayoutComponent implements OnInit {
  public loading$: Observable<boolean>;
  public giphyGifs$: Observable<IGiphyData[]>;
  public pagination$: Observable<IGiphyPagination>;

  constructor(private giphyService: GiphyService) {
    this.loading$ = this.giphyService.loading$;
    this.giphyGifs$ = this.giphyService.giphyGifs$;
    this.pagination$ = this.giphyService.pagination$;
  }

  ngOnInit(): void {}

  onChangePage(event: PageEvent) {
    this.giphyService.setPagination(
      event.pageSize,
      event.pageIndex * event.pageSize
    );
  }
}
