import React from "react";

const Footer = () => {
  return (
    <div className=" bg-black  text-white mx-auto w-[100%] max-w-[1300px] h-64 p-10">
      <hr className=" mx-10" />
      <div className="flex  mt-10 justify-around">
        <div>
          <h1 className="text-4xl">Candleleaf</h1>
          <p>Your natural candle made for your home and for your wellness</p>
        </div>
        <div className="flex flex-col">
          <a> Discovery</a>
          <a> Discovery</a>
          <a> Discovery</a>
          <a> Discovery</a>
        </div>
        <div className="flex flex-col">
          <a> Discovery</a>
          <a> Discovery</a>
          <a> Discovery</a>
          <a> Discovery</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
