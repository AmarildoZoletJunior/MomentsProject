export interface Post{
    id?:number,
    Descricao: string;
    DataPostagem: string;
    AutorPostagem: string;
    Titulo: string;
    ImagemPost: ImagemPost;
    comentarios: Comentarios;
}
   export interface Comentarios {
        data: Datum[];
    }
    export interface Datum {
        id: number;
        attributes: Attributes3;
    }
    export interface Attributes3 {
        id?:number,
        Comentario: string;
        Autor: string;
    }
    export interface ImagemPost {
        data: Data2;
    }
    export interface Data2 {
        id: number;
        attributes: Attributes2;
    }
    export interface Attributes2 {
        url: string;
    }