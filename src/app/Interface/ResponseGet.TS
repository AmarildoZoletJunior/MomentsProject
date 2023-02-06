export interface Geral{
    data: Dat[]
    meta:Meta
}
export interface Meta {
}
export interface Dat{
    attributes: Objecta;
    id: number;
}

export interface Objecta {
    Descricao: string;
    AutorPostagem: string;
    Titulo: string;
    DataPostagem: string;
}