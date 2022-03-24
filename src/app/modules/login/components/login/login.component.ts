import { Input, Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  @Output() submitEM = new EventEmitter();
  returnUrl!: string;
  error = '';
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });



  

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute,


  ) { 
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) { 
      this.router.navigate(['/']);
  }
  }

  ngOnInit(): void {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }   
  
  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }




  submit() {
    if (this.form.valid) {
        this.authenticationService.login('user', 'root')
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate(['/dishes']);
                },
                error => {
                    this.error = error;
                });
    }
      // this.submitEM.emit(this.form.value);
    }
  

}
