export interface Post{
    id?:number,
    Descricao: string;
    DataPostagem: string;
    AutorPostagem: string;
    Titulo: string;
    imagem: File;
    comentarios?: Comentarios;
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
        name: string;
        alternativeText?: any;
        caption?: any;
        width: number;
        height: number;
        formats: Formats;
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
    export interface Formats {
        small: Small;
        thumbnail: Thumbnail;
    }
    export interface Small {
        ext: string;
        url: string;
        hash: string;
        mime: string;
        name: string;
        path?: any;
        size: number;
        width: number;
        height: number;
    }

    export interface Thumbnail {
        ext: string;
        url: string;
        hash: string;
        mime: string;
        name: string;
        path?: any;
        size: number;
        width: number;
        height: number;
    }