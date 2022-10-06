import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiphyLayoutComponent } from './giphy-layout.component';
import { SharedModule } from '@shared/shared.module';
import { CoreModule } from '@core/core.module';
import { GiphyLayoutRoutingModule } from './giphy-layout-routing.module';
import { GiphyService } from './services/giphy.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [GiphyLayoutComponent],
  imports: [CommonModule, HttpClientModule, GiphyLayoutRoutingModule, CoreModule, SharedModule],
  providers: [GiphyService],
})
export class GiphyLayoutModule {}
