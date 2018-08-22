import React, { Component } from 'react';
import { connect } from 'react-redux';
import { binsActionCreators, bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        };

        this.onInputChage = this.onInputChage.bind(this);
    }

    onInputChage(event) {
        this.setState({ term: event.target.value })
    }

    onFormSubmit(event) {
        event.preventDefault();

        this.props.fetchWeather(this.state.term);
        this.setState({ term: '' });
    }
    render() {
        return (
            <form className="input-group">
                <input
                    placeholder="forecast"
                    value={this.state.term}
                    onChange={this.onInputChage}
                />
                <span className="input-group-btn">
                    <button type="submit">Submit</button>
                </span>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);