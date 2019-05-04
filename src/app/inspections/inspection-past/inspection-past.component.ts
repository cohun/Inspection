import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Inspection } from '../inspection.model';
import { InspectionService } from '../inspection.service';

@Component({
  selector: 'app-inspection-past',
  templateUrl: './inspection-past.component.html',
  styleUrls: ['./inspection-past.component.css']
})
export class InspectionPastComponent implements OnInit {
  displayedColumns = ['id', 'name', 'date', 'valid'];
  dataSource = new MatTableDataSource<Inspection>();

  constructor(private inspectionService: InspectionService) { }

  ngOnInit() {
    this.dataSource.data = this.inspectionService.getinspections();
  }

}
