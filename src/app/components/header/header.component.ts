import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription, filter } from 'rxjs';

import { PROFILE } from '../../data/profile.data';
import { ThemeService } from '../../services/theme.service';

interface NavItem {
  label: string;
  path: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  readonly profile = PROFILE;

  readonly navItems: NavItem[] = [
    { label: 'Inicio', path: '/' },
    { label: 'Sobre mí', path: '/about' },
    { label: 'Proyectos', path: '/projects' },
    { label: 'Contacto', path: '/contact' },
  ];

  menuOpen = false;
  scrolled = false;

  private routerSub?: Subscription;

  constructor(readonly theme: ThemeService, private readonly router: Router) {}

  ngOnInit(): void {
    this.onScroll();

    // Si se navega desde el overlay, hay que soltar el bloqueo de scroll.
    this.routerSub = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => this.closeMenu());
  }

  ngOnDestroy(): void {
    this.routerSub?.unsubscribe();
    this.lockScroll(false);
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled = window.scrollY > 8;
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeMenu();
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
    this.lockScroll(this.menuOpen);
  }

  closeMenu(): void {
    this.menuOpen = false;
    this.lockScroll(false);
  }

  private lockScroll(locked: boolean): void {
    document.body.style.overflow = locked ? 'hidden' : '';
  }
}
