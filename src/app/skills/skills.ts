import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  level: number; // 0 - 100
  icon: string;
}

interface SkillCategory {
  title: string;
  subtitle: string;
  icon: 'code' | 'server' | 'database' | 'mobile' | 'desktop' | 'test' | 'analysis' | 'management' | 'soft';
  accent: 'cyan' | 'emerald';
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  skillCategories: SkillCategory[] = [
    {
      title: 'Web Development',
      subtitle: 'Full-stack web application development',
      icon: 'code',
      accent: 'cyan',
      skills: [
        { name: 'Angular & TypeScript', level: 90, icon: 'code' },
        { name: 'REST APIs', level: 95, icon: 'code' },
        { name: 'HTML, CSS & JavaScript', level: 80, icon: 'code' },
      ],
    },
    {
      title: 'Frontend Web Development',
      subtitle: 'Building responsive, interactive UIs',
      icon: 'code',
      accent: 'emerald',
      skills: [
        { name: 'Angular', level: 88, icon: 'code' },
        { name: 'Responsive Design', level: 87, icon: 'code' },
        { name: 'UI/UX Implementation', level: 82, icon: 'code' },
      ],
    },
    {
      title: 'Backend Web Development',
      subtitle: 'Scalable server-side applications',
      icon: 'server',
      accent: 'emerald',
      skills: [
        { name: 'Java & Spring Boot', level: 95, icon: 'server' },
        { name: 'Authentication & Security', level: 90, icon: 'server' },
        { name: 'REST API Design', level: 85, icon: 'server' },
      ],
    },
    {
      title: 'Cross-Platform Mobile',
      subtitle: 'Mobile apps for iOS & Android',
      icon: 'mobile',
      accent: 'cyan',
      skills: [
        { name: 'Flutter & Dart', level: 90, icon: 'mobile' },
        { name: 'Mobile UI Design', level: 85, icon: 'mobile' },
        { name: 'API Integration', level: 90, icon: 'mobile' },
      ],
    },
    {
      title: 'Desktop Application Development',
      subtitle: 'Native & cross-platform desktop apps',
      icon: 'desktop',
      accent: 'cyan',
      skills: [
        { name: 'Java Desktop (JavaFX/Swing)', level: 95, icon: 'desktop' },
        { name: 'Cross-Platform Solutions', level: 85, icon: 'desktop' },
        { name: 'System Integration', level: 90, icon: 'desktop' },
      ],
    },
    {
      title: 'Databases',
      subtitle: 'Data modeling, querying & management',
      icon: 'database',
      accent: 'cyan',
      skills: [
        { name: 'Database Design', level: 95, icon: 'database' },
        { name: 'RDBMS', level: 90, icon: 'database' },
        { name: 'SQL & Query Optimization', level: 80, icon: 'database' },
      ],
    },
    {
      title: 'Testing',
      subtitle: 'Quality assurance & test automation',
      icon: 'test',
      accent: 'emerald',
      skills: [
        { name: 'Unit Testing', level: 80, icon: 'test' },
        { name: 'Integration Testing', level: 75, icon: 'test' },
        { name: 'Debugging & Troubleshooting', level: 85, icon: 'test' },
      ],
    },
    {
      title: 'Software System Analysis',
      subtitle: 'Requirements & system design',
      icon: 'analysis',
      accent: 'cyan',
      skills: [
        { name: 'Requirements Analysis', level: 90, icon: 'analysis' },
        { name: 'System Design', level: 90, icon: 'analysis' },
        { name: 'Architecture Planning', level: 85, icon: 'analysis' },
      ],
    },
    {
      title: 'Software Project Management',
      subtitle: 'Planning, tracking & delivery',
      icon: 'management',
      accent: 'emerald',
      skills: [
        { name: 'Agile & Scrum', level: 85, icon: 'management' },
        { name: 'Task Planning & Estimation', level: 75, icon: 'management' },
        { name: 'Version Control (Git)', level: 90, icon: 'management' },
      ],
    },
    {
      title: 'Soft Skills',
      subtitle: 'Collaboration & communication',
      icon: 'soft',
      accent: 'cyan',
      skills: [
        { name: 'Communication', level: 90, icon: 'soft' },
        { name: 'Teamwork', level: 92, icon: 'soft' },
        { name: 'Problem Solving', level: 88, icon: 'soft' },
      ],
    },
  ];
}