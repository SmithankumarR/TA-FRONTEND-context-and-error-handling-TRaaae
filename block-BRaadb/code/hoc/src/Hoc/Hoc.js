import React from 'react';

const HOC = (Component, data) => {
    console.log("data",data)
    return class extends React.Component {
        state = {
            searchTerm: data,
        };
        handleChange = ({ target: { value } }) => {
            this.setState({ searchTerm: value });
        };

        render() {
            return (
                <Component searchTerm={this.state.searchTerm} handleChange={this.handleChange} />
            )
        }

    }
}

export default HOC;