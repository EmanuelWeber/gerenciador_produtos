import { Component, Input, OnInit } from '@angular/core';
import { Categoria, Produto } from './models/produtos.model';
import { ProdutoService } from './service/produtos.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AdicionarProdutoComponent } from './components/adicionar-produto/adicionar-produto.component';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
  imports: [CommonModule, FormsModule, AdicionarProdutoComponent]
})
export class ProdutoComponent implements OnInit {
  produtos: Produto[] = [];
  editando = false;

  mensagem: string | null = null;


  private _produtoSelecionado!: Produto;
  @Input()
  public get produtoSelecionado(): Produto {
    return this._produtoSelecionado;
  }
  public set produtoSelecionado(v: Produto) {
    this._produtoSelecionado = v;
  }

  private _filtro!: string;
  public get filtro(): string {
    return this._filtro;
  }
  public set filtro(v: string) {
    this._filtro = v;
  }

  private _categorias!: Categoria[];
  public get categorias(): Categoria[] {
    return this._categorias;
  }
  public set categorias(v: Categoria[]) {
    this._categorias = v;
  }

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.obterDados();
  }

  obterDados(): void {
    this.produtoService.listarProdutos().subscribe(produtos => {
      this.produtos = produtos
    });
    this.produtoService.listarCategorias().subscribe(categorias => {
      this.categorias = categorias
    });
  }

  adicionarProduto() {
    this.produtoSelecionado = {} as Produto;
    this.editando = true;
  }

  alterar(produto: Produto): void {
    this.produtoSelecionado = produto;
    this.editando = true;
  }

  remover(id: number): void {
    this.produtoService.deletarProduto(id).subscribe(() => {
      this.mensagem = 'Produto excluido com sucesso!';
      this.tratarNotificacaoMensagem(this.mensagem);
      this.produtos = this.produtos.filter(p => p.id !== id);
    });
  }

  filtrar() {
    this.produtoService.filtrarProdutoPorNome(this.filtro).subscribe((ret) => {
      this.produtos = ret;
    });
  }

  obterNomeCategoria(id: number): string {
    if (this.categorias && this.categorias.length > 0) {
      const categoria = this.categorias.find(c => c.id === id);
      return categoria ? categoria.nome : '';
    } else {
      return '';
    }
  }

  fecharMensagem() {
    this.mensagem = null;
  }

  tratarNotificacaoMensagem(mensagem: string) {
    this.mensagem = mensagem;
    setTimeout(() => this.mensagem = null, 3000);
  }

}
