

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

    export interface Formats {
        small: Small;
        thumbnail: Thumbnail;
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

    export interface Data2 {
        id: number;
        attributes: Attributes2;
    }

    export interface ImagemPost {
        data: Data2;
    }

    export interface Attributes3 {
        Comentario: string;
        Autor: string;
        createdAt: Date;
        updatedAt: Date;
    }

    export interface Datum {
        id: number;
        attributes: Attributes3;
    }

    export interface Comentarios {
        data: Datum[];
    }

    export interface Attributes {
        Descricao: string;
        DataPostagem: Date;
        createdAt: Date;
        updatedAt: Date;
        AutorPostagem: string;
        Titulo: string;
        ImagemPost: ImagemPost;
        comentarios?: Comentarios;
    }

    export interface Data {
        id: number;
        attributes: Attributes;
    }

    export interface Meta {
    }

    export interface RootObject {
        data: Data;
        meta?: Meta;
    }


