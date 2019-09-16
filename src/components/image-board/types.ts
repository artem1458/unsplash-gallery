import IImageItem from "../../types/image-item";

export interface IProps {
    requestNextSearchPage: ()=> void,
    searchKey: string,
    getRandomPhotos: () => void,
    imageList: IImageItem[],
    hasError: boolean,
    hasMoreImage: boolean,
    errorMessage: string,
}