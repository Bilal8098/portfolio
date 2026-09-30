import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideBraces, lucideDatabase, lucideLeaf } from '@ng-icons/lucide';

@Component({
  selector: 'app-main-section',
  standalone: true,
  imports: [CommonModule, NgIcon],
  providers: [provideIcons({ lucideDatabase, lucideBraces, lucideLeaf })],
  templateUrl: './main-section.html',
  styleUrl: './main-section.css',
})
export class MainSection implements AfterViewInit {
  @ViewChild('heroImage') heroImage?: ElementRef;
  yearsCoding = new Date().getFullYear() - 2023;

  ngAfterViewInit(): void {
    // Optional: Add subtle parallax effect on mouse move
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
      const hero = document.querySelector('.hero') as HTMLElement;
      const imageWrapper = document.querySelector('.hero-image-wrapper') as HTMLElement;

      if (hero && imageWrapper) {
        hero.addEventListener('mousemove', (e: MouseEvent) => {
          const { clientX, clientY } = e;
          const { innerWidth, innerHeight } = window;
          const x = (clientX / innerWidth - 0.5) * 15;
          const y = (clientY / innerHeight - 0.5) * 15;
          imageWrapper.style.transform = `translate(${x}px, ${y}px)`;
        });

        hero.addEventListener('mouseleave', () => {
          imageWrapper.style.transform = 'translate(0, 0)';
        });
      }
    }
  }
}