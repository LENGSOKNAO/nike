import React, { useState } from "react";
import { DataProducts } from "../../data/DataProduct";

const Test = () => {
  const [search, setSearch] = useState("");

  const data = DataProducts.filter((e) =>
    e.title
      .toLowerCase()
      .includes(
        search.toLowerCase() ||
          e.price.toLowerCase().includes(search.toLowerCase())
      )
  );

  return (
    <>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="searching "
        className="border"
      />

      {search.length > 0 &&
        data.map((e, i) => (
          <div className="">
            <h2> {e.title} </h2>
          </div>
        ))}
    </>
  );
};

export default Test;
