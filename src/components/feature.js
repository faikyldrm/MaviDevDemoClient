import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import featureDetail from '../components/featureDetail'
import * as actions from '../actions';
import '../style/style.css'
import History from '../history.js';
import { Link, Route, useLocation, BrowserRouter as Router } from "react-router-dom";
class Feature extends PureComponent {

    componentWillMount() {
        this.props.fetchFeature();
    }

    renderFeature() {
        return this.props.features.map((feature, i) => {
            return (

                <tr key={i + 50}>
                    <td key={i}><Link to={{ pathname: `featureDetail`, query: { id: feature.username } }}>{feature.username}</Link></td>
                    <td key={i + 10}>{feature.name}</td>
                    <td key={i + 20}>{feature.city}</td>
                </tr>

            );
        })
    }

    render() {
        if (!this.props.features) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                
                <ul>
                    <table>
                        <thead>
                            <tr>
                                <th>Username</th>
                                <th>Name</th>
                                <th>City</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderFeature()}
                            
                        </tbody>
                    </table>
                    <button onClick={() => History.push('/monitorText')}> Show Me Text </button>
                </ul>
              
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { features: state.features.homePageFeatures }
}

export default connect(mapStateToProps, actions)(Feature);
