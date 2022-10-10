import React from "react";

function Header(props) {
    // div method 
    // return ( < div > < h1 > { props.info } < /h1> <
    //     h1 > { props.info } < /h1> </div > )
    // reat.Fragment method
    return ( < React.Fragment > < h1 > { props.info } < /h1> <
        h1 > { props.info } < /h1> </React.Fragment > )
} { /* export { Header }; */ }
export default Header;