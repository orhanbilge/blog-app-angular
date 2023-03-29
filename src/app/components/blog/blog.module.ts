import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { ContentComponent } from './layout/content/content.component';
import { FooterComponent } from './layout/footer/footer.component';
import { BlogComponent } from './blog.component';
import { LogoComponent } from './layout/header/logo/logo.component';
import { NavComponent } from './layout/header/nav/nav.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    ListComponent,
    BlogComponent,
    LogoComponent,
    NavComponent,
  ],
  imports: [CommonModule],
  exports: [BlogComponent],
})
export class BlogModule {}
