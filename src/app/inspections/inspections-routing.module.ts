import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InspectionListComponent } from "./inspection-list/inspection-list.component";
import { InspectionNewComponent } from "./inspection-new/inspection-new.component";

const routes: Routes = [
  {
    path: '',
    component: InspectionListComponent
  },
  {
    path: 'ujvizsg',
    component: InspectionNewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InspectionsRoutingModule { }
