import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {
  worktitle:string="Work Expierence"
  workcompany1:string="Red Wing Shoe Company"
  jobtitle1:string="Sales Manager"
  joblocation1:string="Cincinnati, OH"
  jobduration1:string="05.19 - 08.22"
  jobpoints1: string[]=[
    "Managed five dierect reports; oversaw operations, including scheduling day-to-day operational staff and mobile sales unit",
    "Processed payments, balance cash drawer, oversaw daily sales reports",
    "Lead the company in sales for all three years of tenure"

  ]
  displayCurrentJob: boolean= true;
  workcompany2:string="Home Depot"
  jobtitle2:string="Head Cashier"
  joblocation2:string="Crescent Springs, KY"
  jobduration2:string="02.2015 - 06.2017"
  jobpoints2:string[]=[
  "Provided first level escaltion for customer issues, along with ensuring front end associates had correct cash amount with functional register",
  "Provided direct support in multi-functional capacity including dock, cash registers, and customer service",
  "Was responsible for the training and coaching of ten associates"
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
