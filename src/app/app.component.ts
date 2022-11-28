import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'CV';
  name: string = "Samuel Schultz";
  phone: string = "513.418.1632";
  email: string = "sam.schultz@outlook.com";
  linkedin: string="LinkedIn";
  techtitle:string="Technologies";
  namephoneClassStyle:string="";
  tech: string[]=[
    "Git","C#","CSS","SQL","Spring","NET Core",
    "Bootstrap","Typescript","Java","Entity Framework",
    "HTML","MySQL","WebApi","JavaScript","SQL Server","JSON",
    "REST","Maven","Agile","MS SQL","jQuery","Scrum",
    "Angular","ASP .Net",".Net","Eclipse","Hibernate","Git Hub",
    "SSMS"
  ]


  educationtitle:string="Education"
  schools:string[]=[
    "Max Technical Training | Mason, OH | Full Stack Programming Bootcamp",
    "Davenport University | Grand Rapids, MI | Cyber Security",
    "Shawnee State University | Portsmouthm OH | Simulation and Video Engineering",
    "Highlands High School | Fort Thomas, KY | College Prep"
  ]

  highlightText():void {
this.namephoneClassStyle = "text-primary"
  }

}
