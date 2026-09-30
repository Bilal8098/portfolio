import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ContactMethod {
  label: string;
  value: string;
  href: string;
  icon: 'email' | 'whatsapp' | 'phone' | 'linkedin' | 'github';
  accent: 'cyan' | 'emerald';
  external: boolean;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  contactMethods: ContactMethod[] = [
    {
      label: 'Email',
      value: 'bilalfayad72@gmail.com',
      href: 'mailto:bilalfayad72@gmail.com',
      icon: 'email',
      accent: 'cyan',
      external: false,
    },
    {
      label: 'WhatsApp',
      value: '+20 114 151 1177',
      href: 'https://wa.me/201141511177',
      icon: 'whatsapp',
      accent: 'emerald',
      external: true,
    },
    {
      label: 'Phone',
      value: '+20 104 215 9229',
      href: 'tel:+201042159229',
      icon: 'phone',
      accent: 'cyan',
      external: false,
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/bilal-fayad',
      href: 'https://www.linkedin.com/in/bilal-fayad-29857743b',
      icon: 'linkedin',
      accent: 'emerald',
      external: true,
    },
    {
      label: 'GitHub',
      value: 'github.com/Bilal8098',
      href: 'https://github.com/Bilal8098',
      icon: 'github',
      accent: 'cyan',
      external: true,
    },
  ];
}