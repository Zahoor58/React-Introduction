import React, { Component } from "react";

class Footer extends Component {
    // inside class
    // createAlert() {
    //     alert('Hello, you clicked me');
    // }
    changed() {
        console.log('change');
    }
    render() {

        return <div > {
                /* <
                            h1 onClick = { this.createAlert } > { this.props.trademark } < /h1 >  */
            } <
            h1 onClick = { this.props.myalert } > { this.props.trademark } < /h1 >  <
        input onChange = { this.changed }
        type = 'text' / >
            <
            /
        div >
    }

}
export default Footer;