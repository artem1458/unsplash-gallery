import IState from "src/types/state";
import IImageItem from "src/types/image-item";

interface IMapStateToProps {
    imageList: IImageItem[],
    hasMoreImage: boolean,
    hasError: boolean,
    errorMessage: string,
    searchKey: string,
}

const mapStateToProps = (state: IState): IMapStateToProps => ({
    imageList: state.imageList,
    hasMoreImage: state.hasMoreImage,
    hasError: state.hasError,
    errorMessage: state.errorMessage,
    searchKey: state.searchKey,
});

export default mapStateToProps;