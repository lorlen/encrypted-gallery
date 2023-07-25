import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { PageNotFoundComponent } from './components/';
import { WebviewDirective } from './directives/';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';

const PRIMENG_MODULES = [ButtonModule];

@NgModule({
  declarations: [PageNotFoundComponent, WebviewDirective],
  imports: [CommonModule, TranslateModule, FormsModule, ...PRIMENG_MODULES],
  exports: [TranslateModule, WebviewDirective, FormsModule, ...PRIMENG_MODULES],
})
export class SharedModule {}
