import { BoardComponent } from './../tateti/board/board.component';
import { SquareComponent } from './../tateti/square/square.component';

import { Component, OnInit, Input } from '@angular/core';
import { NgModule} from '@angular/core';

@NgModule({
  imports: [,
    SquareComponent,
    BoardComponent  
  ]
})

@Component({
  selector: 'app-tateti',
  templateUrl: './tateti.component.html',
  styleUrls: ['./tateti.component.css']
})
export class TatetiComponent implements OnInit {
	@Input() value: 'X' | 'O';

	squares: string[];
	xIsNext: boolean;
	winner: string;

	constructor() { }

	ngOnInit() {
		this.newGame();
	}

	newGame() {
		this.squares = Array(9).fill(null);
		this.winner = null;
		this.xIsNext = true;
	}

	get player() {
		return this.xIsNext ? 'X' : 'O';
	}

	makeMove(idx: number) {
		if (!this.squares[idx]) {
			this.squares.splice(idx, 1, this.player);
      this.xIsNext = !this.xIsNext;
      console.log('value inside matrix: ', this.squares[idx]);
		}

    this.winner = this.calculateWinner();
    console.log('leaves makeMove');
	}

	calculateWinner() {
		const lines = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6]
		];
		for (let i = 0; i < lines.length; i++) {
			const [a, b, c] = lines[i];
			if (
				this.squares[a] &&
				this.squares[a] === this.squares[b] &&
				this.squares[a] === this.squares[c]
			) {
				return this.squares[a];
			}
		}
		return null;
	}

}
