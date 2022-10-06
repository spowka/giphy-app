import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { GiphySearchOptions } from '@core/definitions/giphy-search-options';
import { GiphyService } from '@workspace/giphy-layout/services/giphy.service';
import { debounceTime, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  public searchControl: FormControl;
  public giphySearchOptions = GiphySearchOptions;

  private unsubscribe$: Subject<void> = new Subject();

  constructor(private fb: FormBuilder, private giphyService: GiphyService) {
    this.searchControl = this.fb.control('');
  }

  ngOnInit(): void {
    this.searchControl.valueChanges
      .pipe(takeUntil(this.unsubscribe$), debounceTime(300))
      .subscribe((value) => this.handleSearchChange(value));
  }

  handleSearchChange(value: string) {
    this.giphyService.fetchGifs(value);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
