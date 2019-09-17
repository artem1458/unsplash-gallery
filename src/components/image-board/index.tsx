import { connect } from 'react-redux';

import mapStateToProps from './state-selector';
import mapDispatchToProps from './dispatch-selector';

import ImageBoard from './component';

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ImageBoard);
