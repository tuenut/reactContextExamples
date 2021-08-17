import React from "react";


export const Explanation = ({children}) => {
  return (

    <section className={"explanation-section"}>
      <header>
        <h3>
          Explanation
        </h3>
      </header>

      <article>
        {children}
      </article>
    </section>
  );
};

