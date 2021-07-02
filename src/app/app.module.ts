import { NgModule } from '@angular/core';
import { BrowserModule, Title, DomSanitizer  } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SkillsComponent } from './components/skills/skills.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';


const materialImports = [
  MatToolbarModule, MatButtonModule, MatIconModule, MatCardModule, MatDividerModule
];

@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ...materialImports
  ],
  providers: [MatIconRegistry, Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
