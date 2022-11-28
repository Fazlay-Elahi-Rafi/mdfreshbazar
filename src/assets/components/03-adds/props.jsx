import React from "react";

export const Props = (props) => {
  return (
    <>
      <div className="">
        <h4 className={props.clssO}>{props.text}</h4>
        <div className={props.clssTw}>
          <p className="adds__card-desc">{props.desc}</p>
        </div>
      </div>
      <div className="">
        <img className="adds__card-icon" src={props.icon} alt="icon" />
      </div>
    </>
  );
};

export const PropsTwo = (props) => {
  return (
    <>
      <div className="">
        <img
          className="adds__card-icon adds__card-icon--m"
          src={props.icon}
          alt="icon"
        />
      </div>
      <div className="">
        <h4 className={props.clssO}>{props.text}</h4>
        <div className={props.clssTw}>
          <p className="adds__card-desc">{props.desc}</p>
        </div>
      </div>
    </>
  );
};
