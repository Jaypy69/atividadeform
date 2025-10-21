export interface ProdutoForm {
    id?:Number;
    nome: string;
    descricao:string;
    precoCusto: string | number;
    precoVenda: number | string;
    estoqueMinimo: number | string;
    marca: string;
    modelo: string;
    anoFabricacao: string;
    compatibilidade: string;
}