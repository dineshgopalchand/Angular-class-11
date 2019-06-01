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
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CourseService,
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
