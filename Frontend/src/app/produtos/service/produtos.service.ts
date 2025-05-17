import { Injectable } from '@angular/core';
import { Categoria, Produto } from '../models/produtos.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const urlProduto = 'http://localhost:8080/produto';
const urlCategoria = 'http://localhost:8080/categoria';

@Injectable({ providedIn: 'root' })
export class ProdutoService {


  constructor(private http: HttpClient) { }

  listarProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${urlProduto}/listar`);
  }

  filtrarProdutoPorNome(nome: string): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${urlProduto}/filtrar-por-nome`, { params: { nome } });
  }

  inserirProduto(produto: Produto): Observable<any> {
    return this.http.post(`${urlProduto}/inserir`, produto);
  }

  atualizarProduto(id: number, produto: Produto): Observable<any> {
    return this.http.put(`${urlProduto}/atualizar?id=${id}`, produto);
  }

  deletarProduto(id: number): Observable<any> {
    return this.http.delete(`${urlProduto}/deletar?id=${id}`);
  }

  listarCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${urlCategoria}/listar`);
  }
}
