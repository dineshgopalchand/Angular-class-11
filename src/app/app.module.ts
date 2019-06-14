import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course.component';
import { CoursesComponent } from './courses/courses.component';
import { DemoComponent } from './demo.component';
import { CourseService } from './common/services/course.service';
import { DataHandlingComponent } from './data-handling/data-handling.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipeShowComponent } from './pipe-show/pipe-show.component';
import { SummaryPipe } from './common/pipes/summary.pipe';
import { InputFormatterDirective } from './common/directives/input-formatter.directive';
import { ShowCustomDirectiveComponent } from './show-custom-directive/show-custom-directive.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { HttpClientModule } from '@angular/common/http';
import { PostsComponent } from './posts/posts.component';
import { AppErrorHandler } from './common/errors/app-error-handler';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { BlackWhiteThemeComponent } from './theme/black-white-theme/black-white-theme.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CoursesComponent,
    DemoComponent,
    DataHandlingComponent,
    PipeShowComponent,
    SummaryPipe,
    InputFormatterDirective,
    ShowCustomDirectiveComponent,
    ContactFormComponent,
    SignUpFormComponent,
    ToDoListComponent,
    FormBuilderComponent,
    PostsComponent,
    GithubFollowersComponent,
    GithubProfileComponent,
    HomeComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    BlackWhiteThemeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule
  ],
  providers: [
    CourseService,
    { provide: ErrorHandler, useClass: AppErrorHandler },
    // { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
