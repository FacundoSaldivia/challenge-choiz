import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { HttpService } from 'src/app/core/services/http.service';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, PublicRoutingModule, SharedModule],
  providers: [HttpService],
  exports: [SharedModule],
})
export class PublicModule {}
