import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'education-experience',
  templateUrl: './education-experience.component.html',
  styleUrls: ['./education-experience.component.css']
})
export class EducationExperienceComponent implements OnInit {

  educationtitle:string="Education"
  schools:string[]=[
    "Max Technical Training | Mason, OH | Full Stack Programming Bootcamp",
    "Davenport University | Grand Rapids, MI | Cyber Security",
    "Shawnee State University | Portsmouthm OH | Simulation and Video Engineering",
    "Highlands High School | Fort Thomas, KY | College Prep"
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
