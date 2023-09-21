import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  perfil = [
    {
      icon: "person",
      titulo: "Información Personal"
    },
    {
      icon: "book",
      titulo: "Educación"
    },
    {
      icon: "ribbon",
      titulo: "Experiencia Profesional"
    },
    {
      icon: "cog",
      titulo: "Habilidades"
    }
  ];
  constructor() {}
}
