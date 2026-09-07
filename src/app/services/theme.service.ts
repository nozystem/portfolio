import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'portfolio-theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly theme$ = new BehaviorSubject<Theme>('light');

  readonly current = this.theme$.asObservable();

  init(): void {
    this.apply(this.stored() ?? this.systemPreference());
  }

  toggle(): void {
    this.apply(this.theme$.value === 'dark' ? 'light' : 'dark');
  }

  get value(): Theme {
    return this.theme$.value;
  }

  private apply(theme: Theme): void {
    this.theme$.next(theme);
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // Almacenamiento no disponible (modo privado): el tema solo dura la sesión.
    }
  }

  private stored(): Theme | null {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved === 'dark' || saved === 'light' ? saved : null;
    } catch {
      return null;
    }
  }

  private systemPreference(): Theme {
    return window.matchMedia?.('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }
}
