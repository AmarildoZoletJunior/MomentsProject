export interface Large {
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

    export interface Medium {
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
        large: Large;
        small: Small;
        medium: Medium;
        thumbnail: Thumbnail;
    }

    export interface RootObject {
        id: number;
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

