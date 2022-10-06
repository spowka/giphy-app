import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-giphy-gif',
  templateUrl: './giphy-gif.component.html',
  styleUrls: ['./giphy-gif.component.scss']
})
export class GiphyGifComponent implements OnInit {
  @Input() url!: string;
  @Input() name: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
