import React, { Component, Fragment } from 'react';
import { NavLink } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/authActions';

class Logout extends Component {
	state = {};

	static propTypes = {
		logout: PropTypes.func.isRequired
	};

	render() {
		return (
			<Fragment>
				<NavLink onClick={this.props.logout} href="#">
					Logout
				</NavLink>
			</Fragment>
		);
	}
}

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(
	mapStateToProps,
	{ logout }
)(Logout);
