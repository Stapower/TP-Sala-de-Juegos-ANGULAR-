import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }

  Juego(tipo: string) {
    switch (tipo) {
      case 'Home':
        this.router.navigate(['/Principal']);      
      break;
      case 'About':
      this.router.navigate(['/QuienSoy']);      
      break;

      case 'Adivina':
          this.router.navigate(['/Juegos/Adivina']);
        break;
      case 'Agilidad':
          this.router.navigate(['/Juegos/Agilidad']);
        break;
      case 'AdivinaMasListado':
          this.router.navigate(['/Juegos/AdivinaMasListado']);
        break;
      case 'AgilidadaMasListado':
          this.router.navigate(['/Juegos/AgilidadaMasListado']);
        break;  
      case 'Anagrama':
          this.router.navigate(['/Juegos/Anagrama']);
        break;
      case 'PPTLS':
          this.router.navigate(['/Juegos/PPTLS']);
        break;
      case 'JuegoDeMemoria':
        this.router.navigate(['/Juegos/JuegoDeMemoria']);
      break;
      case 'tateti':
        this.router.navigate(['/Juegos/tateti']);
      break;

    }
  }

}
