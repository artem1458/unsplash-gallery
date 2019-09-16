import IImageItem from "./image-item";

export default interface IState {
    imageList: IImageItem[],
    currentInputValue: string,
    searchKey: string,
    currentSearchPage: number,
    imagesToLoad: number,
    hasMoreImage: boolean,
    hasError: boolean,
    errorMessage: string,
}