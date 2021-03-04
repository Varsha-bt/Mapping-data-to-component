import React from "react";

function Avatar(props){
return(
<img className="circle-image"
           src={props.img}
           alt="none"/>
);
}

export default Avatar;