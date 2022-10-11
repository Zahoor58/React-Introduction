import React, { Component } from "react";

class Footer extends Component {
    // inside class
    // createAlert() {
    //     alert('Hello, you clicked me');
    // }
    state = {
        name: "Zahoor Shad",
        age: 35,
        isLogin: true
    }
    changed = (evt) => {
        this.setState({ name: evt.target.value })
        console.log('changed', evt.target.value);
    }
    render() {

        return <div > {
            /* <
                        h1 onClick = { this.createAlert } > { this.props.trademark } < /h1 >  */
        } {
            // this.state.age === 35 ? "Yes" : "No"
            this.state.isLogin ? ( <
                React.Fragment > <
                h1 onClick = { this.props.myalert } > { this.props.trademark } < /h1 >  <input value={this.state.name} onChange = { this.changed }
                type = 'text' / >
                <
                /React.Fragment>
            ) : ( <
                React.Fragment > <
                h1 > you cannot se e this content < /h1 >  <
                h2 > You must be login < /h2>  < /
                React.Fragment >
            )

        }



        <
        /
        div >
    }

}
export default Footer;