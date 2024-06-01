import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../../core/services/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
  isLoading: boolean = false;
  isFadingOut: boolean = false;

  constructor(private loadingService: LoadingService) { }

  ngOnInit(): void {
    this.loadingService.getLoading().subscribe(isLoading => {
      this.isLoading = isLoading;
      this.toggleScroll(isLoading);
      if (isLoading) {
        this.scrollToTop();
      }
    });

    this.loadingService.getFadeOut().subscribe(isFadingOut => {
      this.isFadingOut = isFadingOut;
    });

    this.loadingService.getDataLoaded().subscribe(isDataLoaded => {
      if (isDataLoaded && !this.isFadingOut) {
        this.startFadeOut();
      }
    });
  }

  startFadeOut(): void {
    this.loadingService.setFadeOut(true);
    setTimeout(() => {
      this.loadingService.setLoading(false);
      this.loadingService.setFadeOut(false);
    }, 1500); // Match the fade-out duration in CSS
  }

  toggleScroll(disable: boolean): void {
    if (disable) {
      document.body.classList.add('disable-scroll');
      window.addEventListener('touchmove', this.preventScroll, { passive: false } as EventListenerOptions);
    } else {
      document.body.classList.remove('disable-scroll');
      window.removeEventListener('touchmove', this.preventScroll, { passive: false } as EventListenerOptions);
    }
  }

  preventScroll(event: TouchEvent): void {
    event.preventDefault();
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }
}