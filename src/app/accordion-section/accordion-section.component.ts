import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SectionService } from '../shared/services/section.service';
import { SectionModel } from '../shared/model/sectionList.model';

@Component({
  selector: 'app-accordion-section',
  templateUrl: './accordion-section.component.html',
  styleUrls: ['./accordion-section.component.css']
})
export class AccordionSectionComponent implements OnInit {
  @ViewChild('sectionHeader') headers: ElementRef | any;
  @ViewChild('sectionDetails') sectionDetails: ElementRef | any;

  sectionList: any[] = [];

  constructor(private sectionServ: SectionService) {
    this.sectionList = this.sectionServ.getSectionList();
    this,sectionServ.sectionListChangeEvent.subscribe((updatedSectionList : any)=>{
      this.sectionList= updatedSectionList;
    })
  }

  ngOnInit(): void {
  }

  activeState: boolean[] = [true, false, false];

  toggle(index: number) {
    this.activeState[index] = !this.activeState[index];
  }

  addNewSection() {
    let newSectionObj = new SectionModel(this.headers.nativeElement.value, this.sectionDetails.nativeElement.value);
    this.sectionServ.setSectionList(newSectionObj)
    this.headers.nativeElement.value = this.sectionDetails.nativeElement.value = '';
  }

}
