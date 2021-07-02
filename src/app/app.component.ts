import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer, Title } from '@angular/platform-browser';
const svgImages: any = [
  { name: "logo", path: "/assets/logo.svg" },
  { name: "facebook", path: "/assets/social-media-icons/facebook.svg" },
  { name: "github", path: "/assets/social-media-icons/github.svg" },
  { name: "linkedin", path: "/assets/social-media-icons/linkedin.svg" },
  { name: "stackoverflow", path: "/assets/social-media-icons/stackoverflow.svg" },
]

import jsonData from '../assets/data/data.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public data: IData = jsonData;
  constructor(public matIconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer, private titleService: Title) {
    for (let img of svgImages) {
      matIconRegistry.addSvgIcon(img.name, sanitizer.bypassSecurityTrustResourceUrl(img.path));
    }
    titleService.setTitle(this.data.Title);
  }
}

export interface IData {
  Title: string,
  Toolbar: IToolbar,
  Main: IMain,
  Introduction: IIntroduction,
  SkillCardContainer: ISkillCardContainer,
  ProjectCardContainer: IProjectCardContainer,
  Footer: IFooter
}

export interface IFooter extends IElement {
  Title: string,
  Creadits: string,
  SocialMediaIcons: ISocialMediaIcon[]
}
export interface ISocialMediaIcon {
  Icon: string,
  Link: string
}

export interface IToolbar extends IElement {
  Logo: ISrcElement,
  Contact: ISrcElement
}

export interface IMain extends IElement {
  Title: string,
  SubTitle: string,
  Avatar: ISrcElement
}

export interface IIntroduction extends IElement {
  Title: string,
  Content: string
}

export interface ISkillCardContainer extends IElement {
  SkillCards: SkillCard[]
}

export interface IProjectCardContainer extends IElement {
  Title: string,
  Subtitle: string,
  ProjectCards: IProjectCard[]
}
export interface IProjectCard extends IElement {
  Title: string,
  Subtitle: string,
  ImageSrc: string
}
export interface SkillCard {
  Icon: string,
  Title: string,
  Subtitle: string,
  Skills: string[]
}

export interface IElement {
  Show: boolean
}
export interface ISrcElement extends IElement {
  Value: string
}