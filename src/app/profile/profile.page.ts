import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  facilityData = [{
    name:"Dr Pooja Raudale",
    position:"Head Of Department",
    areaOfInterest:"C programming, Artificial Intelligence, Computer Graphics, Object Oriented Programming in C++, Data Structures",
    facultyImg:"http://mca.spit.ac.in/images/faculty/pjmam1.jpg",
    linkedinpage:"https://in.linkedin.com/in/dr-pooja-raundale-6b258661",
    personalPage:"http://mca.spit.ac.in/id1.php"
  },
  {
    name:"Prof. Harshil Kanakia",
    position:"Assistent Professor",
    areaOfInterest:"Software Engineering, Advanced Microprocessor, Data Structures, Database Management Systems",
    facultyImg:"http://mca.spit.ac.in/images/faculty/juna.jpg",
    linkedinpage:"https://in.linkedin.com/in/harshil-kanakia-b477246a",
    personalPage:"http://harshilkanakia.com/"
  },
  {
    name:"Dr. Aarti Karande",
    position:"Assistent Professor",
    areaOfInterest:"Object Oriented Programming, Service Oriented Architecture, Soft Computing Data Mining, Software",
    facultyImg:"http://mca.spit.ac.in/images/faculty/aarti.jpg",
    linkedinpage:"https://in.linkedin.com/in/aartimkarande",
    personalPage:"https://aartimkarande.in/"
  },
  {
    name:"Mayura Nagar",
    position:"Assistent Professor",
    areaOfInterest:"Mobile Programming, Ethical Hacking",
    facultyImg:null,
    linkedinpage:"https://in.linkedin.com/in/mayura-nagar-68a431210",
    personalPage:"http://mca.spit.ac.in/id5.php"
  }]

  constructor() { }

  ngOnInit() {
  }

}
