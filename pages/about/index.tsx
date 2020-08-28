import React from "react";
import Router from "next/router";
import { NavLayout } from "../../components/NavLayout";

export default () => {
  return (
    <>
      <NavLayout />
      <button onClick={() => Router.push("/")}>Назад</button>
      <div>About</div>
    </>
  );
};
