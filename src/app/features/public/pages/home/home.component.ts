import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';
import { dataInfo } from 'src/app/shared/models/dataInfo';
import { faqs } from 'src/app/shared/models/faqs';
import { medication } from 'src/app/shared/models/medication';

import { medications } from 'src/app/shared/models/medications';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  medication_url: string =
    'https://run.mocky.io/v3/1f00949f-adc2-4484-ad6d-4f565e82ad30';
  faqs_url: string =
    'https://run.mocky.io/v3/6f0fb5ae-1758-4537-84c7-f6669edd614f';
  pills!: medication[];
  patches!: medication[];
  rings!: medication[];
  medication!: medications;
  faqs!: faqs;
  display: boolean = false;

  constructor(private http: HttpService) {}

  ngOnInit(): void {
    this.getMedication();
    this.getFaqs();
  }

  getMedication(): void {
    this.http.get(this.medication_url).subscribe((res: any) => {
      let data: medications = res.data;
      this.pills = data.pills;
      this.rings = data.rings;
      this.patches = data.patches;
    });
  }

  getFaqs(): void {
    this.http.get<faqs>(this.faqs_url).subscribe((res) => {
      this.faqs = res;
    });
  }
  showDialog() {
    this.display = true;
  }
}
