import IState from "src/types/state";

interface IMapStateToProps {
    searchKey: string
}

const mapStateToProps = (state: IState): IMapStateToProps => ({
    searchKey: state.searchKey,
});

export default mapStateToProps;