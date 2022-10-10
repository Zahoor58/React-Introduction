import React, { Component } from "react";

class Footer extends Component {
    // inside class
    // createAlert() {
    //     alert('Hello, you clicked me');
    // }
    state = {
        name: "Zahoor Shad"
    }
    changed = (evt) => {
        this.setState({ name: evt.target.value })
        console.log('changed', evt.target.value);
    }
    render() {

        return <div > {
                /* <
                            h1 onClick = { this.createAlert } > { this.props.trademark } < /h1 >  */
            } <
            h1 onClick = { this.props.myalert } > { this.props.trademark } < /h1 >  <input value={this.state.name} onChange = { this.changed }
        type = 'text' / >
            <
            /
        div >
    }

}
export default Footer;