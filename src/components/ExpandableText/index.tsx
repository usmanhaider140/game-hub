import React, { useState } from "react";

interface IProps {
  maxChar: number;
  children: string;
}

const ExpandableText = ({ maxChar, children }: IProps) => {
  const [show, setShow] = useState(false);
  return (
    <div>
      {children?.slice(0, show ? children?.length : maxChar)}
      {show ? "" : "..."}
      <button onClick={() => setShow(!show)}>{show ? "Less" : "More"}</button>
    </div>
  );
};

export default ExpandableText;
