import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProdutoComponent } from './produtos/produtos.component';

@Component({
  selector: 'app-root',
  imports: [ProdutoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Projeto Phoenix';
}
