import { Component, Input, OnInit } from '@angular/core';
import { SkillCard } from 'src/app/app.component';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  @Input() skill! : SkillCard
  constructor() { }

  ngOnInit(): void {
  }

}
