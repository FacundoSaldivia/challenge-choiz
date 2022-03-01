import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './components/hero/hero.component';
import { TableComponent } from './components/table/table.component';
import { PrimengModule } from './primeng/primeng.module';
import { FaqsComponent } from './components/faqs/faqs.component';

import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [HeroComponent, TableComponent, FaqsComponent, ModalComponent],
  imports: [CommonModule, PrimengModule],
  exports: [
    HeroComponent,
    TableComponent,
    FaqsComponent,
    PrimengModule,
    ModalComponent,
  ],
})
export class SharedModule {}
