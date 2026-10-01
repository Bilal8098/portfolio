import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project, ProjectDetails } from '../project-details/project-details';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectDetails],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css'],
})
export class Projects {
  selectedProject: Project | null = null;

  projects: Project[] = [
    {
      id: 'hr-management',
      name: 'HR Management System',
      subtitle: 'Complete workforce management and administration platform',

      shortDescription:
        'A full-stack HR management system with JavaFX and Flutter applications for employee management, attendance, payroll, approvals, and workforce administration.',

      description:
        'A full-stack Human Resources Management and Workforce Administration System built with JavaFX desktop interfaces and a Flutter mobile application, powered by a Spring Boot backend and PostgreSQL database. The system provides employee management, QR-code attendance tracking, salary and deduction management, raises, department administration, complaints and suggestions, document submission and approval workflows, dashboards, and payment and report generation. Authentication and Firebase Cloud Messaging are integrated to provide secure access, notifications, and real-time communication across the system.',

      category: 'Enterprise / HR',
      year: '2025',
      status: 'completed',
      statusText: 'Completed',

      techStack: [
        'JavaFX',
        'Flutter',
        'Spring Boot',
        'PostgreSQL',
        'Firebase',
        'REST API'
      ],

      features: [
        'Employee records & profile management',
        'QR-code based attendance tracking',
        'Salary, deductions & raises management',
        'Department & workforce administration',
        'Complaints & suggestions management',
        'Document submission & approval workflows',
        'Dashboards & HR management reports',
        'Payment & report generation',
        'Authentication & role-based access',
        'Firebase push notifications'
      ],

      images: [
        'hr.png',
        'assets/images/projects/hr-management/2.jpg',
        'assets/images/projects/hr-management/3.jpg',
        'assets/images/projects/hr-management/4.jpg',
      ],

      accent: 'cyan',
    },
    {
      id: 'learning-management',
      name: 'Learning Management System',
      subtitle: 'Multi-role platform for complete academic management',

      shortDescription:
        'A full-stack learning management platform supporting school administration, teachers, students, and guardians with academic management, attendance, homework, exams, and reports.',

      description:
        'A full-stack Learning Management System developed using Angular, Spring Boot, and PostgreSQL, with native Android and iOS mobile applications. The platform provides role-based interfaces for school administration, student affairs, teachers, students, and guardians. It supports student registration and class management, guardian access to student performance, teacher-managed course materials and homework, student homework submissions, attendance tracking, automated examinations and grading, and centralized academic records and reports. Role-based access control and structured workflows were implemented to manage the complete academic process through a unified platform.',

      category: 'EdTech / Education',
      year: '2025',
      status: 'completed',
      statusText: 'Completed',

      techStack: [
        'Angular',
        'Spring Boot',
        'PostgreSQL',
        'Android',
        'iOS',
        'REST API'
      ],

      features: [
        'Multi-role access for administrators, teachers, students & guardians',
        'Student registration & class management',
        'Teacher-managed course materials & homework',
        'Student homework submission & tracking',
        'Guardian access to student performance',
        'Attendance tracking & management',
        'Automated exams & grading',
        'Centralized academic records',
        'Academic reports & performance tracking',
        'Role-based workflows & access control'
      ],

      images: [
        'lms.jpg',
        'lms-1.jpeg',
        'lms-2.jpeg',
        'lms-3.jpeg',
        'lms-4.jpeg',
        'lms-5.jpeg',
        'lms-6.jpeg',
        'lms-7.jpeg',
        'lms-8.jpeg',
      ],

      accent: 'emerald',
    },
    // {
    //   id: 'opportunity-guidance',
    //   name: 'Opportunity Guidance',
    //   subtitle: 'Helping students discover the right career path',
    //   shortDescription:
    //     'A guidance platform that recommends scholarships, internships, and career paths based on student profiles and interests.',
    //   description:
    //     'A career and opportunity guidance platform designed to help students and young professionals discover relevant scholarships, internships, training programs, and job opportunities. The system uses a personalized recommendation engine based on user profiles, skills, and interests. It features a curated opportunity feed, application tracking, and a mentorship connection module to bridge the gap between talent and opportunity.',
    //   category: 'Career Tech / Web App',
    //   year: '2023',
    //   status: 'completed',
    //   statusText: 'Completed',
    //   techStack: ['Angular', 'Spring Boot', 'PostgreSQL', 'REST API'],
    //   features: [
    //     'Personalized opportunity recommendations',
    //     'Curated feed of scholarships & internships',
    //     'Application tracking & reminders',
    //     'Mentorship connection module',
    //     'User profile & skill-based matching',
    //     'Admin dashboard for opportunity management',
    //   ],
    //   images: [
    //     'assets/images/projects/opportunity-guidance/1.jpg',
    //     'assets/images/projects/opportunity-guidance/2.jpg',
    //     'assets/images/projects/opportunity-guidance/3.jpg',
    //   ],
    //   accent: 'cyan',
    // },
    {
      id: 'restaurant-management',
      name: 'Restaurant Management System',
      subtitle: 'Restaurant management & table reservation platform',

      shortDescription:
        'A full-stack restaurant management platform with customer and admin experiences for menu management, table reservations, scheduling, and feedback.',

      description:
        'A full-stack Restaurant Management and Table Reservation System built using Angular, Python, and PostgreSQL. The platform provides separate customer and admin experiences, allowing administrators to manage menu items and restaurant tables while customers can browse the menu, view table availability, and make reservations. An admin scheduling interface provides an organized view of table bookings by date and time. The system also includes user authentication, customer feedback, and responsive interfaces designed to provide a smooth and visually engaging restaurant booking experience.',

      category: 'Business / Web App',
      year: '2025',
      status: 'completed',
      statusText: 'Completed',

      techStack: [
        'Angular',
        'Python',
        'PostgreSQL',
        'REST API'
      ],

      features: [
        'Separate customer & admin experiences',
        'Restaurant menu management',
        'Table availability management',
        'Table reservation system',
        'Date & time-based booking schedule',
        'Admin reservation scheduling interface',
        'User authentication',
        'Customer feedback system',
        'Responsive & visually engaging UI'
      ],

      images: [
        'rrms.jpg',
        'rrms-1.png',
        'rrms-2.png',
        'rrms-3.png',
        'rrms-4.png',
        'rrms-5.png',
        'rrms-6.png',
        'rrms-7.png',
        'rrms-8.png',
      ],

      accent: 'emerald',
    },
  ];

  openProject(project: Project): void {
    this.selectedProject = project;
    document.body.style.overflow = 'hidden';
  }

  closeProject(): void {
    this.selectedProject = null;
    document.body.style.overflow = '';
  }
}