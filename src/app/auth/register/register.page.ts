import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { AlertController, ToastController, LoadingController } from '@ionic/angular';
/*to avoid issues with library below you have to install SweetAlert2 with the following command
              npm install sweetalert2
  and that's it, you won't have issues with SweetAlert library
*/
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  password = '';
  constructor(
    private authService: AuthService,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController
  ) { }

  form = new FormGroup({
    firstname: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    lastname: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  async onSubmit() {
    if (!this.functionToValitePasswordFormat(this.password)) {
      this.validatingPassword();
    } else {
      this.authService.register(this.form.value).subscribe(
        // If success
        async () => {
          const toast = await this.toastCtrl.create({ message: 'User Created', duration: 2000, color: 'dark' });
          await toast.present();
          loading.dismiss();
          this.form.reset();
        },
        // If there is an error
        async () => {
          const alert = await this.alertCtrl.create({ message: 'There is an error', buttons: ['OK'] });
          loading.dismiss();
          await alert.present();
        }
      );

      const loading = await this.loadingCtrl.create({ message: 'Registering...' });
      await loading.present();
    }
  }

  validatingPassword(){
    let showMessage = document.getElementById("wrong-password"); //variable to show a message in case there was an error
    Swal.fire("Error", "Contraseña inválida, por favor ingrese una contraseña válida", "error");
    showMessage.innerHTML = `
          <ul>
              <li>Mínimo 8 caracteres</li>
              <li>Máximo 15 caracteres</li>
              <li>Al menos una letra mayúscula</li>
              <li> Al menos una letra mínuscula</li>
              <li>Al menos un número</li>
              <li>No espacios en blanco</li>
              <li>Al menos 1 caracter especial</li>
          </ul>
    `;
    setTimeout(() => {
      showMessage.innerHTML = ``;
    }, 10000);
  }

  functionToValitePasswordFormat(password) {
    let passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
    /*
        Minimo 8 caracteres
        Maximo 15 caracteres
        Al menos una letra mayúscula
        Al menos una letra minuscula
        Al menos un dígito
        No espacios en blanco
        Al menos 1 caracter especial
    */
    if (passRegex.test(password)) {
        return true;
    } else {
        return false;
    }
}
}
