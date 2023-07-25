import { Injectable } from '@angular/core';
import { invoke } from '@tauri-apps/api/tauri';
import { ToastsService } from '../toasts.service';

@Injectable({
  providedIn: 'root',
})
export class TauriService {
  constructor(private readonly toastsService: ToastsService) {}

  get isTauri(): boolean {
    return !!(window && window.__TAURI__);
  }

  async callHelloWorld() {
    const text: string = await invoke('hello_world_command');
    this.toastsService.success(text);
  }
}
