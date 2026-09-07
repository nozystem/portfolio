import { Component, HostListener, OnInit } from '@angular/core';

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
export class HeaderComponent implements OnInit {
  readonly profile = PROFILE;

  readonly navItems: NavItem[] = [
    { label: 'Inicio', path: '/' },
    { label: 'Sobre mí', path: '/about' },
    { label: 'Proyectos', path: '/projects' },
    { label: 'Contacto', path: '/contact' },
  ];

  menuOpen = false;
  scrolled = false;

  constructor(readonly theme: ThemeService) {}

  ngOnInit(): void {
    this.onScroll();
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
  }

  closeMenu(): void {
    this.menuOpen = false;
  }
}
