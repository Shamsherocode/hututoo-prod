import { Component } from '@angular/core';
import { AuthService } from 'app/services/auth.service';

@Component({
    moduleId: module.id,
    selector: 'user-cmp',
    templateUrl: 'user.component.html'
})

export class UserComponent{ 
    data: any;
    username: string = '';
    email: string = '';

    constructor(private auth: AuthService) { }

    ngOnInit() {
        // this.data = this.auth.getUser();
        // this.username = this.data.username
        // this.email = this.data.email
    }
}
