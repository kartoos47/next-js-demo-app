import React from "react";

const Anchor = props => {
  return (
    <div>
      <a href={props.url} target="_blank" rel="noopener noreferrer">
        {props.children}
      </a>
      <style jsx>
        {`
          a {
            margin: 10px;
            padding: 5px;
          }
        `}
      </style>
    </div>
  );
};

export default Anchor;
