import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { HttpService } from '../core/services/http.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, FeaturesRoutingModule],
  providers: [HttpService],
})
export class FeaturesModule {}
