import { Component, Input, OnInit } from '@angular/core';
import { dataInfo } from '../../models/dataInfo';
import { medication } from '../../models/medication';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() data!: medication[];
  @Input() title!: string;

  constructor() {}

  ngOnInit(): void {
    console.log(this.data);
  }
}
