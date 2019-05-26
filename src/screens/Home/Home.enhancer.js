import { connect } from 'react-redux';

const mapStateToProp = ({ home }) => ({
	description: home.description
});

export default Component => connect(mapStateToProp)(Component);
