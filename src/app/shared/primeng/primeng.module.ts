import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { DialogModule } from 'primeng/dialog';
@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    TableModule,
    AccordionModule,
    ButtonModule,
    RippleModule,
    DialogModule,
  ],
})
export class PrimengModule {}
