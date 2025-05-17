export interface Produto {
  id?: number;
  nome: string;
  quantidade: number;
  idCategoria: number;
  criacao?: string;
  criacao_formatada?: string;
}

export interface Categoria {
  id?: number;
  nome: string;
}
