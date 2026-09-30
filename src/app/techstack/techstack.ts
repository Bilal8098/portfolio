import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Tech {
  name: string;
  description: string;
  mono?: string; // Optional monogram/emoji fallback
}

interface TechCategory {
  title: string;
  subtitle: string;
  icon: 'web' | 'cross' | 'backend' | 'database' | 'hosting' | 'desktop';
  accent: 'cyan' | 'emerald';
  techs: Tech[];
}

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './techstack.html',
  styleUrl: './techstack.css',
})
export class TechStack {
  techCategories: TechCategory[] = [
    {
      title: 'Frontend Web Development',
      subtitle: 'Building modern, responsive web experiences',
      icon: 'web',
      accent: 'cyan',
      techs: [
        { name: 'HTML', description: 'Semantic markup & accessibility' },
        { name: 'CSS', description: 'Responsive layouts & modern styling' },
        { name: 'JavaScript', description: 'Dynamic, interactive functionality' },
        { name: 'TypeScript', description: 'Type-safe, scalable code' },
        { name: 'Angular', description: 'Component-based SPA framework' },
      ],
    },
    {
      title: 'Backend Development',
      subtitle: 'Scalable APIs & cloud services',
      icon: 'backend',
      accent: 'emerald',
      techs: [
        { name: 'Spring Boot', description: 'Robust Java backend framework' },
        { name: 'Firebase', description: 'Realtime backend & authentication' },
        { name: 'Cloud Firestore', description: 'Scalable NoSQL document database' },
        { name: 'Supabase', description: 'Open-source backend as a service' },
      ],
    },
    {
      title: 'Cross-Platform Development',
      subtitle: 'One codebase — web, mobile & desktop apps',
      icon: 'cross',
      accent: 'emerald',
      techs: [
        { name: 'Flutter', description: 'Unified apps for web, mobile & desktop' },
        { name: 'Dart', description: 'Language powering Flutter apps' },
      ],
    },
    {
      title: 'Database Development',
      subtitle: 'Relational & NoSQL data solutions',
      icon: 'database',
      accent: 'cyan',
      techs: [
        { name: 'Oracle SQL', description: 'Enterprise-grade relational databases' },
        { name: 'PostgreSQL', description: 'Advanced open-source relational DB' },
        { name: 'SQL Server', description: 'Microsoft relational database' },
        { name: 'SQLite', description: 'Lightweight embedded database' },
        { name: 'MySQL', description: 'Widely-used open-source database' },
      ],
    },
    {
      title: 'Business Applications',
      subtitle: 'Rapid enterprise app development',
      icon: 'backend',
      accent: 'cyan',
      techs: [
        { name: 'Oracle APEX', description: 'Low-code enterprise business apps' },
      ],
    },
    {
      title: 'Web Hosting & Deployment',
      subtitle: 'Shipping & hosting applications',
      icon: 'hosting',
      accent: 'emerald',
      techs: [
        { name: 'Railway', description: 'Modern app deployment platform' },
        { name: 'GitHub', description: 'Version control & CI/CD workflows' },
        { name: 'Vercel', description: 'Edge-optimized frontend hosting' },
      ],
    },
    {
      title: 'Desktop Applications',
      subtitle: 'Native Java desktop solutions',
      icon: 'desktop',
      accent: 'cyan',
      techs: [
        { name: 'JavaFX', description: 'Modern rich client desktop UI' },
        { name: 'Java Swing', description: 'Classic Java desktop UI toolkit' },
      ],
    },
  ];
}