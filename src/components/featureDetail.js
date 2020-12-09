import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import '../style/style.css'
import History from '../history.js';

class FeatureDetail extends PureComponent {

    componentWillMount() {
        const { location } = this.props;
        if (!location.query) {
            return History.push('/feature');
        }
         this.props.fetchDeatilFeature(location.query.id);
    }
    renderFeature(detailFeature) {
        return  (
            <div>
                <table>

                    <thead>
                        <tr>
                            <th> </th>
                            <th> </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td> User Name</td>
                            <td> {detailFeature.username}</td>
                        </tr>
                        <tr>
                            <td> Name</td>
                            <td> {detailFeature.name}</td>
                        </tr>
                        <tr>
                            <td> Surname</td>
                            <td> {detailFeature.surname}</td>
                        </tr>
                        <tr>
                            <td> Phone</td>
                            <td> {detailFeature.phone}</td>
                        </tr>
                        <tr>
                            <td> City</td>
                            <td> {detailFeature.city}</td>
                        </tr> 
                        <tr>
                            <td> Address Detail</td>
                            <td> {detailFeature.addressDetail}</td>
                        </tr> 
                     
                    </tbody>
                </table>
            </div>
       );
    }
    render() {
       
        if (!this.props.featureDetail) {
            return <div>Loading...</div>;
        }
        if (this.props.featureDetail) {
    
            return (
                <div>
          
                    {this.renderFeature(this.props.featureDetail)}
                    <button onClick={() => History.push('/feature')}> Back </button>
                </div>);
        }
        return (
            <div>
                <h1>Feature</h1><small>You must be logged in to see the features</small>
                {this.renderFeature()}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return { featureDetail: state.featureDetail.detailPageFeatures }
}

export default connect(mapStateToProps, actions)(FeatureDetail);