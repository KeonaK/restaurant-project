import React from "react";
import CustomPizza from "../components/CustomPizza";

function Ordering() {
  return (
    <div>
      <section className="hero is-danger is-fullheight">
        <div className="hero-body">
          <div className="">
            <CustomPizza />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Ordering;
