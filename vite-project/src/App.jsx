import React, { useState } from "react";
import "./App.css";

import { useForm } from "react-hook-form";

const App = () => {
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <div className="parent">
      <div className="children">
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <input placeholder="name" {...register("name")} />
          <input placeholder="email" {...register("email")} />
          <input
            placeholder="password"
            type="password"
            {...register("password")}
          />
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
