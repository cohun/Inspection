import { Component, OnInit} from '@angular/core';
import { InspectionService } from '../inspection.service';
import { Inspection } from '../inspection.model';

@Component({
  selector: 'app-inspection-new',
  templateUrl: './inspection-new.component.html',
  styleUrls: ['./inspection-new.component.css']
})
export class InspectionNewComponent implements OnInit {
  inspections: Inspection[];
  newInspection: Inspection = {id: '', name:  '', date: '', valid: ''};
  ne: Inspection = {id: '', name:  '', date: '', valid: ''};
  constructor(private inspectionService: InspectionService) { }

  ngOnInit() {
    this.inspections = this.inspectionService.getinspections();
  }

  onSubmit() {
    this.ne = this.newInspection;
    this.newInspection =  {id: '', name:  '', date: '', valid: ''};
    this.inspections.push(this.ne);
    console.log(this.inspections);
    this.inspectionService.setInspection(this.ne);
  }
}
