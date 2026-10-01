import { Component, signal } from '@angular/core';
import { NavBar } from './nav-bar/nav-bar';
import { MainSection } from './main-section/main-section';
import { Education } from './education/education';
import { Skills } from './skills/skills';
import { TechStack } from './techstack/techstack';
import { Contact } from './contact/contact';
import { Projects } from './projects/projects';

@Component({
  imports: [NavBar, MainSection, Education, Skills, TechStack, Contact, Projects],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Bilal Fayad Portfolio');
}
