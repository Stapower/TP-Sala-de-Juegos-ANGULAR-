import { Juego } from '../clases/juego'

export class JuegoPiedraPapelTijera extends Juego{

    opcionUsuario : string = "";
    opcionSheldon : string ="";
    opciones = ["Piedra", "Papel", "Tijeras", "Lagarto", "Spock"];
    mensaje;
    gano = false;
    empato = false;
    
    constructor(nombre?: string, gano?: boolean, jugador?:string) {
        super("PPTLS",false,jugador);
      }

    aleatorio(minimo,maximo){
        var numero = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
        var eleccion = this.opciones[numero];
        
        return eleccion;
    }

    verificar()
    {
        return this.gano;
    }
    calcular(opcionUsuario){
        this.opcionUsuario = opcionUsuario;
        this.opcionSheldon = this.aleatorio(0,4);
        //empata
        if(this.opcionUsuario == this.opcionSheldon){
            this.mensaje = "<h2>Es un empate!<br /><img height=250 width=250 src='https://i.pinimg.com/originals/e6/71/13/e67113a7f74e5659c5f2112666008950.jpg'/></h2>";
        }
        else if(this.opcionUsuario == "Piedra" && this.opcionSheldon == "Tijeras"
                                    ||
                this.opcionUsuario == "Piedra" && this.opcionSheldon == "Lagarto"
                                    ||
                this.opcionUsuario == "Papel" && this.opcionSheldon == "Spock"
                                    ||
                this.opcionUsuario == "Papel" && this.opcionSheldon == "Piedra"
                                    ||
                this.opcionUsuario == "Tijeras" && this.opcionSheldon == "Lagarto"
                                    ||
                this.opcionUsuario == "Tijeras" && this.opcionSheldon == "Papel"
                                    ||
                this.opcionUsuario == "Lagarto" && this.opcionSheldon == "Spock"
                                    ||
                this.opcionUsuario == "Lagarto" && this.opcionSheldon == "Papel"
                                    ||
                this.opcionUsuario == "Spock" && this.opcionSheldon == "Piedra"
                                    ||
                this.opcionUsuario == "Spock" && this.opcionSheldon == "Tijeras"
                )						
        {
    //gana
        this.mensaje = "<h2>Has ganado!<br /><img height=250 width=250 src='https://previews.123rf.com/images/macrovector/macrovector1504/macrovector150401234/39266640-mano-sosteniendo-un-trofeo-ganador-en-la-ilustraci%C3%B3n-de-vector-de-concepto-de-confeti-multicolor.jpg'/></h2>";
        this.gano = true;
        }
    //pierde
        else
        this.mensaje = "<h2>Has perdido!<br /> <img src='https://the-big-bang-theory.com/images/uploads/4/th_574e7c36606306d94a4.jpg'/>"; 
        return this.mensaje;            
    }
}
