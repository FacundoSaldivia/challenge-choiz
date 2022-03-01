import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { HttpService } from '../core/services/http.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, FeaturesRoutingModule, SharedModule],
  providers: [HttpService],
})
export class FeaturesModule {}
