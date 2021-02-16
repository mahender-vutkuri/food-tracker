import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalService } from '../../services/global.service';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private globalServices: GlobalService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      Email: ['2@gmail.com', Validators.required],
      Password: ['12345', Validators.required],
    });
  }

  handleLogin(form: any): void {
    console.log(form);
    form.token = '';
    this.router.navigate(['/home']);
    // this.globalServices.userLogin(form).then((data) => {
    //   console.log(data);
    //   if (data.Result === 'Success') {
    //     this.router.navigate(['/home']);
    //   } else {
    //     alert('Please check your credentials')
    //   }
    // });

  }
}
