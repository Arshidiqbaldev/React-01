import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./App.css";
import mySound from "../public/noti.mp3";

const App = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  
    const playSound =()=>{
      const audio = new Audio(mySound);
      audio.play()
    }
  


  const [audio, setAudio] = useState({})

  function setValues() {
    setValue("name", "arshid");
    setValue("email", "arshidiqbalnet@gmail.com")
  }
  const symb = "*";
  const name = watch("name");

  function onSubmit(data) {
    console.log(data);
    reset();
  }

  return (
    <div className="parent">
      <div className="children">
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("name", {
              required: "this is requird",
              minLength: { value: 10, message: "not to short name " },
              maxLength: {
                value: 15,
                message: "not to long",
              },
            })}
            placeholder="name"
          />

          <p className="err">
            {errors.name && (
              <span>
                {errors.name.message} <span className="symb">{symb}</span>
              </span>
            )}
          </p>

          <input
            {...register("email", {
              required: "email is required",
            })}
            placeholder="email"
          />

          <p className="err">
            

            
            {errors.email && (
              <span>
                {errors.email.message} <span className="symb">{symb}</span>
              </span>
            )}
          </p>

          <button onClick={setValues}>set defaults</button>

          <button type="submit">submit</button>
        </form>

        <p>{name}</p>

        <button onMouseEnter={playSound} >click</button>
      </div>
    </div>
  );
};

export default App;
