import IImageItem from "@/types/image-item";

export interface IRequestNextSearchPageArgTuple extends Array<number | string> {
    0: string;
    1: number;
    2: number;
    length: 3;
}

export interface IProps {
    searchKey: string,
    requestNextSearchPage: ()=> void,
    getRandomPhotos: () => void,
    imageList: IImageItem[],
    hasError: boolean,
    hasMoreImage: boolean,
}