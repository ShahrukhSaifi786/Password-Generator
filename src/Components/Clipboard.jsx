import React, { useRef } from "react";

const Clipboard = () => {
  const copy = useRef(null);
  const clipcopy = () => {
    window.navigator.clipboard.writeText(copy);
    console.log(copy);
  };
  return (
    <>
      <input type="text" ref={copy} placeholder="Enter Your Name" />
      <button className="m-5 px-5 py-2 bg-green-500" onClick={clipcopy}>
        Copy to Clipboard
      </button>
    </>
  );
};

export default Clipboard;
