import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Categoria, Produto } from '../../models/produtos.model';
import { FormsModule } from '@angular/forms';
import { ProdutoService } from '../../service/produtos.service';
import { CommonModule } from '@angular/common';
import { isStringObject } from 'util/types';

@Component({
  selector: 'app-adicionar-produto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './adicionar-produto.component.html',
  styleUrls: ['./adicionar-produto.component.css']
})
export class AdicionarProdutoComponent implements OnInit {

  mensagem: string | null = null;


  private _produtoSelecionado!: Produto;
  @Input()
  public get produtoSelecionado(): Produto {
    return this._produtoSelecionado;
  }
  public set produtoSelecionado(v: Produto) {
    this._produtoSelecionado = v;
    this.produtoSelecionadoChange.emit(v)
  }
  @Output() produtoSelecionadoChange = new EventEmitter<Produto>();

  @Output() alterouProduto = new EventEmitter<Produto>();
  @Output() voltarParaTabela = new EventEmitter();
  @Output() notificarMensagem = new EventEmitter();

  private _categorias!: Categoria[];
  @Input()
  public get categorias(): Categoria[] {
    return this._categorias;
  }
  public set categorias(v: Categoria[]) {
    this._categorias = v;
  }

  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {

  }

  adicionarOuEditarProduto() {
    if (this.produtoSelecionado.id) {
      this.produtoService.atualizarProduto(this.produtoSelecionado.id, this.produtoSelecionado).subscribe(ret => {
        this.mensagem = 'Produto atualizado com sucesso!';
        this.voltarParaTabela.emit();
        this.notificarMensagem.emit(this.mensagem);
      });
    } else {
      this.produtoService.inserirProduto(this.produtoSelecionado).subscribe(ret => {
        this.mensagem = 'Produto cadastrado com sucesso!';
        this.alterouProduto.emit(ret.produto);
        this.notificarMensagem.emit(this.mensagem);
      });
    }
  }

  fecharMensagem() {
    this.mensagem = null;
  }

  voltar(): void {
    this.produtoSelecionado = {} as Produto;
    this.voltarParaTabela.emit();
  }

}
