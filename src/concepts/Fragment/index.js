import React from "react";

const glossary = ["Bacardi", "Malibu", "Aperol", "Whisky"];

function Glossary() {
  return (
    <dl>
      {glossary.map((item) => (
        // Without the `key`, React will fire a key warning
        <React.Fragment key={item.id}>
          <div>{item}</div>
        </React.Fragment>
      ))}
    </dl>
  );
}

export default Glossary;
