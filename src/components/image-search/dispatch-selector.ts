import * as actions from 'src/redux/actions'

interface IMapStateToProps {
    searchSubmit: (searchValue: string) => void,
}

const mapDispatchToProps: IMapStateToProps ={
    searchSubmit: actions.searchSubmit,
};

export default mapDispatchToProps;