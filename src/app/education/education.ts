import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface EducationItem {
  institution: string;
  degree: string;
  field: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  icon: 'school' | 'university' | 'briefcase';
  status: 'completed' | 'in-progress';
  statusText: string;
}
const startYear = 2026;
const currentYear = new Date().getFullYear();
const duration = 4;

const isCompleted = currentYear >= startYear + duration;
@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.html',
  styleUrl: './education.css',
})
export class Education {

  educationItems: EducationItem[] = [
    {
  institution: 'NTG Clarity',
  degree: 'Software Development Trainee',
  field: 'Full-Stack Development',
  period: isCompleted
    ? '2025 — 2028'
    : `${startYear} — Present`,
  location: 'Giza, Egypt',
  description:
    'Completed hands-on technical training focused on advanced web development, backend engineering, database management, and data processing. Worked with modern technologies and practical development workflows across the full stack.',
  highlights: [
    'Advanced Angular development and modern frontend architecture',
    'Backend development with Java and Spring Boot',
    'Database design, SQL, and data management',
    'Data parsing, transformation, and manipulation',
    'Hands-on experience building and integrating full-stack applications',
    'Applied software engineering practices through practical projects',
  ],
  icon: 'briefcase',
  status: isCompleted ? 'completed' : 'in-progress',
  statusText: isCompleted ? 'Completed' : 'In Progress',
},
    {
      institution: 'NCTU (New Cairo Technology University)',
      degree: 'Bachelor\'s Degree',
      field: 'Computer Science & Information Technology',
      period: isCompleted
        ? `${startYear} — ${startYear + duration}`
        : `${startYear} — Present`,
      location: 'New Cairo, Egypt',
      description:
        'Pursuing a comprehensive education in software engineering, computer science fundamentals, and modern application development. Focused on building strong foundations in algorithms, data structures, and system design.',
      highlights: [
        'Core focus on Software Engineering and Full-Stack Development',
        'Studying Data Structures, Algorithms, and System Design',
        'Hands-on experience with Java, Spring Boot, Angular, and PostgreSQL',
        'Active participation in practical development projects',
      ],
      icon: 'university',
      status: isCompleted ? 'completed' : 'in-progress',
      statusText: isCompleted ? 'Completed' : 'In Progress',
    },
    {
      institution: 'NTG School for Applied Technology',
      degree: 'Technical Diploma',
      field: 'Applied Technology & Software Development',
      period: '2023 — 2026',
      location: 'El-Shorouk, Egypt',
      description:
        'Built the technical foundation that sparked my passion for programming. Gained early exposure to software development, problem-solving, and applied technology principles.',
      highlights: [
        'Introduced to programming fundamentals and software development',
        'Developed strong analytical and problem-solving skills',
        'Built first applications and discovered a passion for coding',
        'Prepared for advanced studies in computer science',
      ],
      icon: 'school',
      status: 'completed',
      statusText: 'Completed',
    },
  ];
}