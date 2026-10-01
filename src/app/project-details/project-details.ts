import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Project {
  id: string;
  name: string;
  subtitle: string;
  shortDescription: string;
  description: string;
  category: string;
  year: string;
  status: 'completed' | 'in-progress' | 'concept';
  statusText: string;
  techStack: string[];
  features: string[];
  images: string[];
  accent: 'cyan' | 'emerald';
}

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Backdrop -->
    <div class="modal-backdrop" (click)="onBackdropClick($event)">
      <!-- Modal -->
      <div class="modal" [class.accent-emerald]="project.accent === 'emerald'">
        <!-- Close Button -->
        <button class="modal-close" (click)="close.emit()" aria-label="Close project details">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <!-- Modal Header -->
        <div class="modal-header">
          <div class="header-glow"></div>

          <div class="header-top">
            <span class="modal-category">{{ project.category }}</span>
            <span class="modal-status" [class.status-active]="project.status === 'in-progress'">
              <span class="status-dot"></span>
              {{ project.statusText }}
            </span>
          </div>

          <h2 class="modal-title">{{ project.name }}</h2>
          <p class="modal-subtitle">{{ project.subtitle }}</p>

          <div class="modal-meta">
            <span class="meta-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              {{ project.year }}
            </span>
          </div>
        </div>

        <!-- Modal Body -->
        <div class="modal-body">
          <!-- Description -->
          <div class="section-block">
            <h3 class="block-title">
              <span class="block-marker"></span>
              Overview
            </h3>
            <p class="block-text">{{ project.description }}</p>
          </div>

          <!-- Tech Stack -->
          <div class="section-block" *ngIf="project.techStack.length">
            <h3 class="block-title">
              <span class="block-marker"></span>
              Technologies Used
            </h3>
            <div class="tech-tags">
              <span class="tech-tag" *ngFor="let tech of project.techStack">
                {{ tech }}
              </span>
            </div>
          </div>

          <!-- Key Features -->
          <div class="section-block" *ngIf="project.features.length">
            <h3 class="block-title">
              <span class="block-marker"></span>
              Key Features
            </h3>
            <ul class="features-list">
              <li *ngFor="let feature of project.features">
                <span class="feature-bullet">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <span>{{ feature }}</span>
              </li>
            </ul>
          </div>

          <!-- Image Gallery -->
          <div class="section-block" *ngIf="project.images.length">
            <h3 class="block-title">
              <span class="block-marker"></span>
              Gallery
            </h3>
            <div class="gallery-grid">
              <div
                class="gallery-item"
                *ngFor="let image of project.images; let i = index"
                (click)="openLightbox(i)"
              >
                <img
                  [src]="image"
                  [alt]="project.name + ' screenshot ' + (i + 1)"
                  loading="lazy"
                  onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
                />
                <div class="gallery-placeholder">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                  </svg>
                  <span>Image {{ i + 1 }}</span>
                </div>
                <div class="gallery-overlay">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    <line x1="11" y1="8" x2="11" y2="14"></line>
                    <line x1="8" y1="11" x2="14" y2="11"></line>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Lightbox -->
    <div class="lightbox" *ngIf="lightboxIndex !== null" (click)="closeLightbox()">
      <button class="lightbox-close" (click)="closeLightbox()" aria-label="Close image">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
      <button class="lightbox-nav prev" (click)="prevImage($event)" *ngIf="project.images.length > 1" aria-label="Previous image">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
      <img
        class="lightbox-image"
        [src]="project.images[lightboxIndex]"
        [alt]="project.name"
        (click)="$event.stopPropagation()"
      />
      <button class="lightbox-nav next" (click)="nextImage($event)" *ngIf="project.images.length > 1" aria-label="Next image">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
      <div class="lightbox-counter">{{ lightboxIndex + 1 }} / {{ project.images.length }}</div>
    </div>
  `,
  styles: [`
    :host {
      --bg-main: #080B12;
      --bg-secondary: #0F141D;
      --bg-card: #151B26;
      --border: #252D3A;
      --text-primary: #F1F5F9;
      --text-secondary: #94A3B8;
      --accent: #22D3EE;
      --accent-hover: #67E8F9;
      --success: #34D399;
    }

    /* ---------- Backdrop ---------- */
    .modal-backdrop {
      position: fixed;
      inset: 0;
      background: rgba(8, 11, 18, 0.85);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      z-index: 2000;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1.5rem;
      animation: fadeIn 0.25s ease-out;
      overflow-y: auto;
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    /* ---------- Modal ---------- */
    .modal {
      position: relative;
      width: 100%;
      max-width: 860px;
      max-height: 90vh;
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: 20px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      animation: slideUp 0.35s cubic-bezier(0.4, 0, 0.2, 1);
      box-shadow: 0 40px 80px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(34, 211, 238, 0.1);
    }

    .modal.accent-emerald {
      box-shadow: 0 40px 80px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(52, 211, 153, 0.1);
    }

    @keyframes slideUp {
      from { opacity: 0; transform: translateY(40px) scale(0.97); }
      to { opacity: 1; transform: translateY(0) scale(1); }
    }

    /* ---------- Close Button ---------- */
    .modal-close {
      position: absolute;
      top: 1rem;
      right: 1rem;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(15, 20, 29, 0.8);
      backdrop-filter: blur(8px);
      border: 1px solid var(--border);
      border-radius: 10px;
      color: var(--text-secondary);
      cursor: pointer;
      z-index: 10;
      transition: all 0.25s ease;
    }

    .modal-close:hover {
      color: var(--accent);
      border-color: var(--accent);
      background: rgba(34, 211, 238, 0.1);
      transform: rotate(90deg);
    }

    .accent-emerald .modal-close:hover {
      color: var(--success);
      border-color: var(--success);
      background: rgba(52, 211, 153, 0.1);
    }

    /* ---------- Modal Header ---------- */
    .modal-header {
      position: relative;
      padding: 2rem 2rem 1.5rem;
      border-bottom: 1px solid var(--border);
      background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-card) 100%);
      flex-shrink: 0;
      overflow: hidden;
    }

    .header-glow {
      position: absolute;
      top: -100px;
      right: -100px;
      width: 300px;
      height: 300px;
      background: radial-gradient(circle, rgba(34, 211, 238, 0.15) 0%, transparent 70%);
      pointer-events: none;
    }

    .accent-emerald .header-glow {
      background: radial-gradient(circle, rgba(52, 211, 153, 0.15) 0%, transparent 70%);
    }

    .header-top {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-bottom: 0.85rem;
      flex-wrap: wrap;
    }

    .modal-category {
      display: inline-block;
      padding: 0.3rem 0.75rem;
      background: rgba(34, 211, 238, 0.1);
      border: 1px solid rgba(34, 211, 238, 0.3);
      border-radius: 100px;
      font-size: 0.72rem;
      font-weight: 600;
      color: var(--accent);
      letter-spacing: 0.6px;
      text-transform: uppercase;
    }

    .accent-emerald .modal-category {
      background: rgba(52, 211, 153, 0.1);
      border-color: rgba(52, 211, 153, 0.3);
      color: var(--success);
    }

    .modal-status {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      padding: 0.3rem 0.7rem;
      background: rgba(148, 163, 184, 0.08);
      border: 1px solid rgba(148, 163, 184, 0.2);
      border-radius: 100px;
      font-size: 0.7rem;
      font-weight: 600;
      color: var(--text-secondary);
      letter-spacing: 0.4px;
      text-transform: uppercase;
    }

    .modal-status.status-active {
      background: rgba(52, 211, 153, 0.08);
      border-color: rgba(52, 211, 153, 0.3);
      color: var(--success);
    }

    .status-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: currentColor;
    }

    .status-active .status-dot {
      animation: pulse 2s infinite;
    }

    @keyframes pulse {
      0% { box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.6); }
      70% { box-shadow: 0 0 0 8px rgba(52, 211, 153, 0); }
      100% { box-shadow: 0 0 0 0 rgba(52, 211, 153, 0); }
    }

    .modal-title {
      font-size: clamp(1.5rem, 3vw, 2rem);
      font-weight: 800;
      color: var(--text-primary);
      line-height: 1.2;
      letter-spacing: -0.02em;
      margin: 0 0 0.5rem;
      position: relative;
      z-index: 1;
    }

    .modal-subtitle {
      font-size: 1rem;
      color: var(--accent);
      font-weight: 500;
      margin: 0 0 1rem;
      line-height: 1.5;
      position: relative;
      z-index: 1;
    }

    .accent-emerald .modal-subtitle {
      color: var(--success);
    }

    .modal-meta {
      display: flex;
      align-items: center;
      gap: 1.25rem;
      position: relative;
      z-index: 1;
    }

    .meta-item {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      font-size: 0.8rem;
      color: var(--text-secondary);
      font-weight: 500;
    }

    .meta-item svg {
      color: var(--accent);
    }

    .accent-emerald .meta-item svg {
      color: var(--success);
    }

    /* ---------- Modal Body ---------- */
    .modal-body {
      padding: 1.75rem 2rem 2rem;
      overflow-y: auto;
      flex: 1;
    }

    .modal-body::-webkit-scrollbar {
      width: 8px;
    }

    .modal-body::-webkit-scrollbar-track {
      background: transparent;
    }

    .modal-body::-webkit-scrollbar-thumb {
      background: var(--border);
      border-radius: 4px;
    }

    .modal-body::-webkit-scrollbar-thumb:hover {
      background: var(--accent);
    }

    /* ---------- Section Block ---------- */
    .section-block {
      margin-bottom: 1.75rem;
    }

    .section-block:last-child {
      margin-bottom: 0;
    }

    .block-title {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      font-size: 0.95rem;
      font-weight: 700;
      color: var(--text-primary);
      margin: 0 0 0.85rem;
      letter-spacing: -0.01em;
      text-transform: uppercase;
      font-size: 0.8rem;
      letter-spacing: 1.2px;
      color: var(--text-secondary);
    }

    .block-marker {
      display: inline-block;
      width: 18px;
      height: 2px;
      background: var(--accent);
      border-radius: 2px;
    }

    .accent-emerald .block-marker {
      background: var(--success);
    }

    .block-text {
      font-size: 0.92rem;
      line-height: 1.75;
      color: var(--text-secondary);
      margin: 0;
    }

    /* ---------- Tech Tags ---------- */
    .tech-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .tech-tag {
      display: inline-block;
      padding: 0.4rem 0.85rem;
      background: rgba(34, 211, 238, 0.06);
      border: 1px solid rgba(34, 211, 238, 0.25);
      border-radius: 8px;
      font-size: 0.8rem;
      font-weight: 600;
      color: var(--accent);
      font-family: 'JetBrains Mono', ui-monospace, monospace;
      transition: all 0.2s ease;
    }

    .accent-emerald .tech-tag {
      background: rgba(52, 211, 153, 0.06);
      border-color: rgba(52, 211, 153, 0.25);
      color: var(--success);
    }

    .tech-tag:hover {
      background: rgba(34, 211, 238, 0.15);
      transform: translateY(-1px);
    }

    .accent-emerald .tech-tag:hover {
      background: rgba(52, 211, 153, 0.15);
    }

    /* ---------- Features List ---------- */
    .features-list {
      list-style: none;
      padding: 0;
      margin: 0;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 0.6rem;
    }

    .features-list li {
      display: flex;
      align-items: flex-start;
      gap: 0.6rem;
      font-size: 0.87rem;
      color: var(--text-secondary);
      line-height: 1.5;
    }

    .feature-bullet {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 18px;
      height: 18px;
      flex-shrink: 0;
      background: rgba(52, 211, 153, 0.1);
      border-radius: 50%;
      color: var(--success);
      margin-top: 1px;
    }

    /* ---------- Gallery ---------- */
    .gallery-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 0.85rem;
    }

    .gallery-item {
      position: relative;
      aspect-ratio: 16 / 10;
      border-radius: 12px;
      overflow: hidden;
      border: 1px solid var(--border);
      background: var(--bg-secondary);
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .gallery-item:hover {
      border-color: var(--accent);
      transform: translateY(-3px);
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.4);
    }

    .accent-emerald .gallery-item:hover {
      border-color: var(--success);
    }

    .gallery-item img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      transition: transform 0.5s ease;
    }

    .gallery-item:hover img {
      transform: scale(1.06);
    }

    .gallery-placeholder {
      display: none;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0.6rem;
      width: 100%;
      height: 100%;
      color: var(--text-secondary);
      font-size: 0.75rem;
    }

    .gallery-placeholder svg {
      color: var(--accent);
      opacity: 0.4;
    }

    .accent-emerald .gallery-placeholder svg {
      color: var(--success);
    }

    .gallery-overlay {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(8, 11, 18, 0.7);
      backdrop-filter: blur(2px);
      color: var(--accent);
      opacity: 0;
      transition: opacity 0.25s ease;
      pointer-events: none;
    }

    .accent-emerald .gallery-overlay {
      color: var(--success);
    }

    .gallery-item:hover .gallery-overlay {
      opacity: 1;
    }

    /* ---------- Lightbox ---------- */
    .lightbox {
      position: fixed;
      inset: 0;
      background: rgba(8, 11, 18, 0.96);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      z-index: 3000;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2rem;
      animation: fadeIn 0.25s ease-out;
    }

    .lightbox-image {
      max-width: 90vw;
      max-height: 85vh;
      object-fit: contain;
      border-radius: 8px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.7);
      animation: slideUp 0.3s ease-out;
    }

    .lightbox-close {
      position: absolute;
      top: 1.5rem;
      right: 1.5rem;
      width: 44px;
      height: 44px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(21, 27, 38, 0.9);
      border: 1px solid var(--border);
      border-radius: 10px;
      color: var(--text-primary);
      cursor: pointer;
      transition: all 0.25s ease;
    }

    .lightbox-close:hover {
      color: var(--accent);
      border-color: var(--accent);
      transform: rotate(90deg);
    }

    .lightbox-nav {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(21, 27, 38, 0.9);
      border: 1px solid var(--border);
      border-radius: 12px;
      color: var(--text-primary);
      cursor: pointer;
      transition: all 0.25s ease;
    }

    .lightbox-nav:hover {
      color: var(--accent);
      border-color: var(--accent);
      background: rgba(34, 211, 238, 0.1);
    }

    .lightbox-nav.prev {
      left: 1.5rem;
    }

    .lightbox-nav.next {
      right: 1.5rem;
    }

    .lightbox-counter {
      position: absolute;
      bottom: 1.5rem;
      left: 50%;
      transform: translateX(-50%);
      padding: 0.5rem 1rem;
      background: rgba(21, 27, 38, 0.9);
      border: 1px solid var(--border);
      border-radius: 100px;
      font-size: 0.85rem;
      font-weight: 600;
      color: var(--text-primary);
      font-family: 'JetBrains Mono', ui-monospace, monospace;
    }

    /* ---------- Responsive ---------- */
    @media (max-width: 640px) {
      .modal-backdrop {
        padding: 0;
        align-items: flex-start;
      }

      .modal {
        max-height: 100vh;
        border-radius: 0;
        min-height: 100vh;
      }

      .modal-header {
        padding: 3.5rem 1.25rem 1.25rem;
      }

      .modal-body {
        padding: 1.25rem;
      }

      .modal-close {
        top: 0.75rem;
        right: 0.75rem;
        width: 36px;
        height: 36px;
      }

      .modal-title {
        font-size: 1.35rem;
      }

      .gallery-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 0.6rem;
      }

      .features-list {
        grid-template-columns: 1fr;
      }

      .lightbox {
        padding: 1rem;
      }

      .lightbox-nav {
        width: 40px;
        height: 40px;
      }

      .lightbox-nav.prev {
        left: 0.5rem;
      }

      .lightbox-nav.next {
        right: 0.5rem;
      }

      .lightbox-close {
        top: 1rem;
        right: 1rem;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .modal,
      .modal-backdrop,
      .lightbox,
      .lightbox-image,
      .gallery-item,
      .gallery-item img,
      .gallery-overlay,
      .modal-close,
      .lightbox-close,
      .lightbox-nav,
      .tech-tag {
        animation: none;
        transition: none;
      }
    }
  `]
})
export class ProjectDetails {
  @Input({ required: true }) project!: Project;
  @Output() close = new EventEmitter<void>();

  lightboxIndex: number | null = null;

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.lightboxIndex !== null) {
      this.closeLightbox();
    } else {
      this.close.emit();
    }
  }

  @HostListener('document:keydown.arrowright')
  onArrowRight(): void {
    if (this.lightboxIndex !== null) {
      this.nextImage();
    }
  }

  @HostListener('document:keydown.arrowleft')
  onArrowLeft(): void {
    if (this.lightboxIndex !== null) {
      this.prevImage();
    }
  }

  onBackdropClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('modal-backdrop')) {
      this.close.emit();
    }
  }

  openLightbox(index: number): void {
    this.lightboxIndex = index;
  }

  closeLightbox(): void {
    this.lightboxIndex = null;
  }

  nextImage(event?: Event): void {
    if (event) event.stopPropagation();
    if (this.lightboxIndex === null) return;
    this.lightboxIndex = (this.lightboxIndex + 1) % this.project.images.length;
  }

  prevImage(event?: Event): void {
    if (event) event.stopPropagation();
    if (this.lightboxIndex === null) return;
    this.lightboxIndex = (this.lightboxIndex - 1 + this.project.images.length) % this.project.images.length;
  }
}