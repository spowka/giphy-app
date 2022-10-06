import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiphyLayoutComponent } from './giphy-layout.component';
import { SharedModule } from '@shared/shared.module';
import { CoreModule } from '@core/core.module';
import { GiphyLayoutRoutingModule } from './giphy-layout-routing.module';

@NgModule({
  declarations: [GiphyLayoutComponent],
  imports: [
    CommonModule,
    GiphyLayoutRoutingModule,
    CoreModule,
    SharedModule,
  ]
})
export class GiphyLayoutModule { }
