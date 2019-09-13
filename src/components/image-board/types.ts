import IImageItem from "@/types/image-item";

export interface IRequestNextSearchPageArgTuple extends Array<number | string> {
    0: string;
    1: number;
    2: number;
    length: 3;
}

export interface IProps {
    searchKey: string,
    currentSearchPage: number,
    imagesToLoad: number,
    requestNextSearchPage: (IRequestNextSearchPageArgTuple)=> void,
    getRandomPhotos: (arg0: number) => void,
    imageList: IImageItem[],
    hasError: boolean,
    hasMoreImage: boolean
}