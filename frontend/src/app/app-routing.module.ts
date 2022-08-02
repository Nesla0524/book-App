import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BooksComponent } from './books/books.component';
import { SignupComponent } from './signup/signup.component';
import { BookssComponent } from './bookss/bookss.component';
import { AddBookComponent } from './add-book/add-book.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  {path : '',
component : HomeComponent},
{path :'login',
component:LoginComponent},
{path :'signup',
component:SignupComponent},
{path:'bookss',
component:BookssComponent},
{path:'add-book',
component:AddBookComponent},
{path:'logout',
component:LogoutComponent},
{path:'books',
component:BooksComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
