import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './components/hero/hero.component';
import { TableComponent } from './components/table/table.component';
import { PrimengModule } from './primeng/primeng.module';

@NgModule({
  declarations: [HeroComponent, TableComponent],
  imports: [CommonModule, PrimengModule],
  exports: [HeroComponent, TableComponent],
})
export class SharedModule {}
