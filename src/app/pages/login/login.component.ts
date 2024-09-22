import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers:[UserService]
})
export class LoginComponent implements OnInit {
  formLogar! : FormGroup;
  mensagemErro = "";
  submetido = false;

  public email:string = '';
  public password:string = '';
  
  constructor(
    private fb: FormBuilder,
    private service: UserService,
    private route: Router,
   
  ) { }

  ngOnInit(): void {
    this.formLogar = this.fb.group({
      email: ['',[ Validators.required]],
      senha: ['', [Validators.required]]
    })
  }
  btnInscrever(){
    this.route.navigateByUrl('register')
  }

  async login():Promise<void>{
    this.submetido = true
    if(this.formLogar.valid){
      const form = this.formLogar.value
      await this.service.login(form).then((resposta : boolean)=>{
        console.log (resposta)
        if(resposta){
          this.route.navigateByUrl("")
        }else{
            this.mensagemErro = 'Usuario o Contrasenha incorrecta'
            console.log(this.mensagemErro)
        }
      })
    }
  }
}
