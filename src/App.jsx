import { useState } from "react";
import LocomotiveScroll from 'locomotive-scroll';

const locomotiveScroll = new LocomotiveScroll();

import "./App.css";

function App() {
  const [color, setColor] = useState("#fffffff");
  const [text, setText] = useState("black");

  return (
    <div>

<div
      className="w-full h-screen flex justify-end items-center "
      style={{ backgroundColor: color }}
    >
      <h1 className="text-5xl absolute top-5 right-1/3 underline font-thin italic animate-bounce" style={{color:text}}>Click in the box for change Color</h1>
      <div data-scroll data-scroll-directions="horizontal" data-scroll-speed="-2" className="  p-3 rounded-lg flex flex-col w-fit h-fit gap-2 bg-slate-400 mr-10 z-20">
        <button
          onClick={() =>setColor("red")}
          className="w-2 rounded-md px-5 py-4"
          style={{backgroundColor: "red"}}></button>
        <button
          onClick={() => setColor("yellow")}
          className="w-2 rounded-md px-5 py-4"
          style={{backgroundColor: "yellow"}}></button>
        <button
          onClick={() => setColor("green")}
          className=" w-2 rounded-md px-5 py-4"
          style={{backgroundColor: "green"}}></button>
        <button
          onClick={() => setColor("brown")}
          className="w-2 rounded-md px-5 py-4"
          style={{backgroundColor: "brown"}}></button>
        <button
          onClick={() => {
            setColor("black")
            setText("white")
          }}
          className="w-2 rounded-md px-5 py-4"
          style={{backgroundColor: "black"}}></button>
        <button
          onClick={() => setColor("blue")}
          className="w-2 rounded-md px-5 py-4"
          style={{backgroundColor: "blue"}}></button>
        <button
          onClick={() => setColor("lightGreen")}
          className="w-2 rounded-md px-5 py-4"
          style={{backgroundColor: "lightGreen"}}></button>
        <button
          onClick={() => setColor("olive")}
          className="w-2 rounded-md px-5 py-4"
          style={{backgroundColor: "olive"}}></button>
        <button
          onClick={() => setColor("purple")}
          className="w-2 rounded-md px-5 py-4"
          style={{backgroundColor: "purple"}}></button>
        <button
          onClick={() => setColor("orange")}
          className="w-2 rounded-md px-5 py-4"
          style={{backgroundColor: "orange"}}></button>
        <button
          onClick={() => setColor("cyan")}
          className="w-2 rounded-md px-5 py-4"
          style={{backgroundColor: "cyan"}}></button>
        <button
          onClick={() => setColor("lightBlue")}
          className="w-2 rounded-md px-5 py-4"
          style={{backgroundColor: "lightBlue"}}></button>
        <button
          onClick={() => setColor("#238794")}
          className="w-2 rounded-md px-5 py-4"
          style={{backgroundColor: "#238794"}}></button>
        <button
          onClick={() => setColor("#497111")}
          className="w-2 rounded-md px-5 py-4"
          style={{backgroundColor: "#497111"}}></button>
        
        
        
      </div>

    </div>
      <div className="w-full h-screen bg-blue-500 flex justify-evenly items-center">
        <img data-scroll  data-scroll-speed="0.5"  src="https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3R8ZW58MHwxfDB8fHww" alt="" className=" rounded-lg w-2/12 " />
        <img data-scroll  data-scroll-speed="0.5" src="https://images.unsplash.com/photo-1564466809058-bf4114d55352?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3R8ZW58MHwxfDB8fHww" alt=""  className=" rounded-lg w-2/12 "/>
      </div>
      <div data-scroll  data-scroll-speed="0.5" className="w-full h-screen bg-blue-700 flex justify-center items-center text-8xl text-white " ><h1  className="italic underline" >WELCOME</h1></div>
    </div>
    
  );
}

export default App;
