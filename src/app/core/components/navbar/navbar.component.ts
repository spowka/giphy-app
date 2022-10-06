import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { GiphySearchOptions } from '@core/definitions/giphy-search-options';
import { IGiphyPagination } from '@workspace/giphy-layout/models/giphy.model';
import { GiphyService } from '@workspace/giphy-layout/services/giphy.service';
import { Observable, pairwise, skip } from 'rxjs';
import { debounceTime, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  public searchControl: FormControl;
  public giphySearchOptions = GiphySearchOptions;
  public pagination$: Observable<IGiphyPagination>;

  private unsubscribe$: Subject<void> = new Subject();

  constructor(private fb: FormBuilder, private giphyService: GiphyService) {
    this.pagination$ = this.giphyService.pagination$;
    this.searchControl = this.fb.control('');
  }

  ngOnInit(): void {
    this.searchControl.valueChanges
      .pipe(takeUntil(this.unsubscribe$), debounceTime(300))
      .subscribe((value) => this.handleSearchChange(value));

    this.pagination$
      .pipe(pairwise(), skip(1), takeUntil(this.unsubscribe$))
      .subscribe(([prev, next]) => {
        if (
          prev.offset === next.offset ||
          (prev.offset > 0 && next.offset === 0)
        )
          return;

        this.giphyService.fetchGifs(this.searchControl.value);
      });
  }

  handleSearchChange(value: string) {
    this.giphyService.resetPagination();
    this.giphyService.fetchGifs(value);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
