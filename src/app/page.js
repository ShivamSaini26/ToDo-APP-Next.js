"use client";
import React, { useState } from "react";

const page = () => {
  //summit task
  const noReload = (e) => {
    e.preventDefault();
    //setting task
    setmainTask([...mainTask, { task, desc }]);
    // console.log(mainTask);
    setDesc(""); //emptying input fields after summit
    setTask("");
   
  
  };

  let [task, setTask] = useState("");
  let [desc, setDesc] = useState("");
  let [mainTask, setmainTask] = useState([]);

  const renderHeading = (
    <h1 className="font-bold text-xl ">No task Available</h1>
  );

   const deleteTask = (index) => {
     const copyTask = [...mainTask];
   copyTask.splice(index, 1);
     setmainTask(copyTask);
   };
//main task list
  let renderTask = mainTask.map((element, index) => (
    <>
      <div
        key={index}
        className="container flex flex-wrap justify-between items-center p-2 my-2 border-2 rounded-lg border-gray-700 bg-gray-200 shadow-md mx-auto w-[95%] "
      >
       
        <span className="text-black font-bold text-2xl mx-2 ">
          {element.task}
        </span>
        <span className="text-gray-600 font-bold text-lg ">{element.desc}</span>
        <button
          className="text-black sm:m-2 font-bold p-1 rounded-lg  bg-red-300 text-lg hover:bg-red-500 mx-auto block w-1/2 sm:inline sm:w-20 "
          type="submit"
          onClick={() => {
            deleteTask(index);
          }}
        >
          &#128465;
        </button>
      </div>
    </>
  ));

 
  return (
    <div className="bg-slate-800 h-screen sm:p-6 p-2  ">
      <h1 className="font-bold text-2xl text-gray-200 mx-auto  w-[90%] sm:w-[65%]  p-2 border-b-2 border-cyan-100 text-center">
        ToDo App - Utilize Your Day EveryDay
      </h1>
      {/* form */}
      <form
        onSubmit={noReload}
        className=" p-3 mt-36 flex items-center w-[65%] mx-auto"
      >
        <input
          className="sm:w-2/5 w-full p-3 m-5 rounded-lg focus:border-cyan-300 focus:border-[3px] outline-none"
          type="text"
          name="nmae"
          id=""
          required
          placeholder="Enter Your Task"
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
        <input
          className="w-2/5 p-3 m-5 rounded-lg focus:border-cyan-300 focus:border-[3px] outline-none"
          type="text"
          required
          name="discription"
          id=""
          placeholder="Enter Discription Of Task"
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
        <button
          className="text-black sm:m-2 font-bold px-5 py-2 rounded-lg  bg-green-300 text-2xl hover:bg-green-500 mx-auto block w-1/2 sm:inline sm:w-20 "
          type="submit"
        >
          &#43;
        </button>
      </form>
      {/* tasks */}
      <div className="bg-slate-500 text-gray-200 mt-28 border-2 p-5 flex flex-wrap justify-evenly rounded-sm  w-[80%] sm:w-[65%] mx-auto">
        {mainTask.length > 0 ? renderTask : renderHeading}
      </div>
    </div>
  );
};

export default page;
