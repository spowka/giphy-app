import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GiphyLayoutComponent } from './giphy-layout.component';

const routes: Routes = [{ path: '', component: GiphyLayoutComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GiphyLayoutRoutingModule { }
