import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpService } from './services/http.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [NavbarComponent, FooterComponent],
  providers: [HttpService],
  imports: [CommonModule, HttpClientModule],
  exports: [FooterComponent, NavbarComponent],
})
export class CoreModule {}
