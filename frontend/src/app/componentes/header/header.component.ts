import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  mostrarOcultarMenu() {
    let menuVisible: boolean = false;
    const navElement = document.getElementById("nav");
  
    if (navElement) {
      if (menuVisible) {
        navElement.classList.remove("responsive");
        menuVisible = false;
      } else {
        navElement.classList.add("responsive");
        menuVisible = true;
      }
    }
  }


  // Funcion que oculta el manu una vez que es seleccionada una opcion

  seleccionar(){
    let menuVisible: boolean = false;
    const navElement : HTMLElement | null = document.getElementById("nav");

    navElement?.classList.remove("responsive");
    menuVisible = false;
  }







} 




