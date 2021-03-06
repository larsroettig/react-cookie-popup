import React from "react";

declare type CookiesBtnClickCallback = () => void;

type CookieButtonProps = {
  rootClass: string;
  clickCallback: CookiesBtnClickCallback;
};

function CookieButton(props: React.PropsWithChildren<CookieButtonProps>) {
  function onClick() {
    props.clickCallback();
  }

  return (
    <button onClick={onClick} className={props.rootClass}>
      {props.children}
    </button>
  );
}

CookieButton.defaultProps = {
  rootClass:
    "focus:outline-none py-1 px-2 md:py-2 md:px-3 w-24 mr-2 bg-gray-700 hover:bg-gray-600 text-white rounded w-full text-xl",
  clickCallback: function() {}
};

export default CookieButton;
