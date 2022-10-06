import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiphyLayoutComponent } from './giphy-layout.component';
import { SharedModule } from '@shared/shared.module';
import { CoreModule } from '@core/core.module';
import { GiphyLayoutRoutingModule } from './giphy-layout-routing.module';
import { GiphyService } from './services/giphy.service';
import { HttpClientModule } from '@angular/common/http';
import { GiphyGifComponent } from './components/giphy-gif/giphy-gif.component';

@NgModule({
  declarations: [GiphyLayoutComponent, GiphyGifComponent],
  imports: [CommonModule, HttpClientModule, GiphyLayoutRoutingModule, CoreModule, SharedModule],
  providers: [GiphyService],
})
export class GiphyLayoutModule {}
