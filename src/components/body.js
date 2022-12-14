import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/body.css";

function Body() {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.manoapp.com/api/v1/users/products/whats_new", {
        headers: {
          StoreID: 4,
          Authorization: "f44a4aabfc5992514d262d7f517327e7",
          UserAddressID: 60877,
        },
      })
      .then((response) => {
        console.log(response.data.data.items);
        setproducts(Array.from(response.data.data.items));
      })
      .catch((error) => {
        console.log("The error is " + error);
      });
  }, []);
  const productsList = products.map((product) => {
    return (
      <div id={product.id} className="col-md-4  ">
        <div className="col-md-12 shadow p-3 mb-5 bg-body rounded">
          <div className="productName">{product.title}</div>
          <a href={product.images[0].original} target="_blank">
            <img src={product.images[0].large} className="img-fluid" alt="" />
          </a>
        </div>
      </div>
    );
  });
  return (
    <div className="products">
      <div className="row">{productsList}</div>
    </div>
  );
}

export default Body;
