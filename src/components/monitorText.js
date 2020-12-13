import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import History from '../history.js';

class monitorText extends PureComponent {

	componentWillMount() {

		this.props.getTextMonitor();
	}


	renderText(monitorinText) {

		return (<div>{monitorinText}</div>)
	}



	render() {

		if (!this.props.monitorText) {
			return <div>Loading...</div>;
		}
		if (this.props.monitorText) {

			return <div>
				{this.renderText(this.props.monitorText)}
				<button onClick={() => History.push('/feature')}> Back </button>
			</div>
		}

	}












}
const mapStateToProps = (state) => {
	return { monitorText: state.monitorText.monitorText }
}
export default connect(mapStateToProps, actions)(monitorText);