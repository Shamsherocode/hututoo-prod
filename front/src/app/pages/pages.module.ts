import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';



import { PagesRoutes } from './pages.routing';

import { RegisterComponent } from './register/register.component';
import { LockComponent } from './lock/lock.component';
import { LoginComponent } from './login/login.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(PagesRoutes),
        FormsModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
    ],
    declarations: [
        LoginComponent,
        RegisterComponent,
        LockComponent
    ]
})

export class PagesModule {}
