export interface Geral{
    data: Dat[]
    meta:Meta
}
export interface Geral2{
    data: Dat
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
    comentarios: Comentarios;
    ImagemPost: ImagemPost;
}
export interface Comentarios {
    data: CommentsList[];
}
export interface CommentsList{
    id:number,
    attributes: DataComment
}
export interface DataComment{
    Comentario:string,
    Autor:string
}

export interface ImagemPost {
    data: Data2;
}
export interface Data2 {
    id: number;
    attributes: Attributes2;
}

export interface Attributes2 {
    name: string;
    alternativeText?: any;
    caption?: any;
    width: number;
    height: number;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl?: any;
    provider: string;
    provider_metadata?: any;
    createdAt: Date;
    updatedAt: Date;
}