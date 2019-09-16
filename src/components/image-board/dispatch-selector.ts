import * as actions from "src/redux/actions";

interface IMapDispatchToProps {
    getRandomPhotos: () => void,
    requestNextSearchPage: () => void
}

const mapDispatchToProps: IMapDispatchToProps = {
    getRandomPhotos: actions.getRandomPhotos,
    requestNextSearchPage: actions.requestNextSearchPage,
};

export default mapDispatchToProps;