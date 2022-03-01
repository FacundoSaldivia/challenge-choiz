import { Component, Input, OnInit } from '@angular/core';
import { faqs } from '../../models/faqs';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss'],
})
export class FaqsComponent implements OnInit {
  @Input() faqs!: faqs;
  @Input() title!: string;
  constructor() {}

  ngOnInit(): void {}
}
