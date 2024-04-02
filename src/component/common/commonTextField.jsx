import { TextField } from "@material-ui/core";
import React, {  } from "react";
const CommonTextField = ({variant, fullWidth,name, id, value,...rest}) => {
    return ( 
        <>
            <TextField 
                variant={variant}
                fullWidth={fullWidth ? true : false}
                name={name}
                id={id}
                value={value}
                {...rest}
            />
        </>
     );
}

// const commonTextField = (props) => {
//     return ( 
//         <>
//             <TextField 
//                 variant={props.variant}
//                 fullWidth={props.fullWidth ? true : false}
//                 name={props.name}
//                 id={props.id}
//                 value={props.value}
//             />
//         </>
//      );
// }

export default CommonTextField;