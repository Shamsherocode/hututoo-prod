import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecaptchaService {
  private baseUrl = 'https://www.google.com/recaptcha/api.js';
  private siteKey = '';
  private isLoaded: Boolean = false;
  private scriptId;

  public constructor() { 
    window['ngRecaptcha3Loaded'] = () => {
      this.isLoaded = true;
    };
    this.scriptId = +(new Date());
  }

  public getToken(action?: any): Promise<any> {
    try {
      let test = (window as { [key: string]: any })["grecaptcha"] ;
      // return window['grecaptcha'].execute(this.siteKey, action);
      return test.execute(this.siteKey, action);
    } catch (e) {
      return new Promise((resolve, reject) => {
        reject(e);
      });
    }
  }

  public init(siteKey?: any) {
    return new Promise((resolve, reject) => {
      if (this.isLoaded) {
        resolve('success');
        return;
      } else {
        this.siteKey = siteKey;
        const script = document.createElement('script');
        script.innerHTML = '';
        script.src = this.baseUrl + `?render=${this.siteKey}&onload=ngRecaptcha3Loaded`;
        script.id = `recaptcha-${this.scriptId}`;
        script.async = true;
        script.defer = true;
        script.onload = () => {
          resolve('success');
        }
        script.onerror = () => {
          reject('error');
        };
        document.head.appendChild(script);
      }
    });
  }

  public destroy() {
    this.isLoaded = false;
      const script = document.getElementById(`recaptcha-${this.scriptId}`);
      if (script) {
        script.remove();
      }
      const badge = document.getElementsByClassName(`grecaptcha-badge`)[0];
      if (badge) {
        badge.remove();
      }
  }

}

