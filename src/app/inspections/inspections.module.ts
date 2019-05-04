import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InspectionsRoutingModule } from './inspections-routing.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { MatButtonModule } from "@angular/material/button";
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from "@angular/material/card";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import {MatTableModule} from '@angular/material/table';
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { FlexLayoutModule } from '@angular/flex-layout';

import { InspectionListComponent } from './inspection-list/inspection-list.component';
import { InspectionNewComponent } from './inspection-new/inspection-new.component';
import { InspectionService } from './inspection.service';
import { InspectionPastComponent } from './inspection-past/inspection-past.component';

@NgModule({
  declarations: [InspectionListComponent, InspectionNewComponent, InspectionPastComponent],
  imports: [
    CommonModule,
    InspectionsRoutingModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatMomentDateModule
  ],
  providers: [InspectionService],
})
export class InspectionsModule { }
