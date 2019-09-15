export interface ISearchSubmitArgTuple extends Array<number | string>  {
    0: string,
    1: number,
    2: number,
    length: 3
}

export interface IProps {
    currentInputValue: string,
    searchSubmit: (arg0: ISearchSubmitArgTuple) => void,
    searchKey: string,
    imagesToLoad: number,
    inputChange: (arg0: string) => void
}