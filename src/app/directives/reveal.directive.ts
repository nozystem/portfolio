import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  Renderer2,
} from '@angular/core';

/**
 * Revela el elemento cuando entra en el viewport.
 * Se aplica con `appReveal` y acepta un retardo en ms: `appReveal="120"`.
 */
@Directive({
  selector: '[appReveal]',
})
export class RevealDirective implements AfterViewInit, OnDestroy {
  @Input('appReveal') delay: string | number = 0;

  private observer?: IntersectionObserver;

  constructor(
    private readonly host: ElementRef<HTMLElement>,
    private readonly renderer: Renderer2
  ) {}

  ngAfterViewInit(): void {
    const el = this.host.nativeElement;
    this.renderer.addClass(el, 'reveal');

    const delay = Number(this.delay) || 0;
    if (delay) {
      this.renderer.setStyle(el, '--reveal-delay', `${delay}ms`);
    }

    // Sin IntersectionObserver el contenido se muestra sin animar.
    if (typeof IntersectionObserver === 'undefined') {
      this.renderer.addClass(el, 'reveal--visible');
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }
          this.renderer.addClass(el, 'reveal--visible');
          this.observer?.disconnect();
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );

    this.observer.observe(el);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
