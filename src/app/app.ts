import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from './nav-bar/nav-bar';
import { MainSection } from './main-section/main-section';
import { Education } from './education/education';
import { Skills } from './skills/skills';
import { TechStack } from './techstack/techstack';
import { Contact } from './contact/contact';

@Component({
  imports: [RouterOutlet, NavBar, MainSection, Education, Skills, TechStack, Contact],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Bilal Fayad Portfolio');
}
