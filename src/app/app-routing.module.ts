import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { AuthGuard } from './auth/auth.guard';
import { NoExistComponent } from './no-exist/no-exist.component';
import { TestsComponent } from './tests/tests.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'test',
    component: TestsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'course',
    component: CourseComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'signup',
    component: HomeComponent
  },
  {
    path: 'signin',
    component: HomeComponent
  },
  {
    path: '**',
    component: NoExistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
