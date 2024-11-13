const productData = [
  [
    {
      productID: 19,
      productName: "carton shirt",
      productImage: "images/card1.jpg",
      productBrand: "Adidas",
      productPrice: 78,
    },
    {
      productID: 37,
      productName: "Havain shirt",
      productImage: "images/card2.jpg",
      productBrand: "Chanel",
      productPrice: 70,
    },
    {
      productID: 46,
      productName: "Printed shirt",
      productImage: "images/card3.jpg",
      productBrand: "Prada",
      productPrice: 265,
    },
    {
      productID: 55,
      productName: "Emo-Boy Shirt",
      productImage: "images/card4.jpg",
      productBrand: "GAP",
      productPrice: 99,
    },
    {
      productID: 307,
      productName: "off white shirt",
      productImage: "images/card5.jpg",
      productBrand: "H3h3",
      productPrice: 76,
    },
    {
      productID: 110,
      productName: "green Cargo Pants",
      productImage: "images/card6.jpg",
      productBrand: "Adidas",
      productPrice: 290,
    },
    {
      productID: 115,
      productName: "blue Cargo Pants",
      productImage: "images/card7.jpg",
      productBrand: "H3h3",
      productPrice: 210,
    },
    {
      productID: 130,
      productName: "Brown Cargo Pants",
      productImage: "images/card8.jpg",
      productBrand: "Adidas",
      productPrice: 230,
    },
    {
      productID: 64,
      productName: "winter shirt",
      productImage: "images/f6.jpg",
      productBrand: "Non",
      productPrice: 8,
    },
    {
      productID: 73,
      productName: "Pants",
      productImage: "images/f7.jpg",
      productBrand: "H3h3",
      productPrice: 875,
    },
    {
      productID: 82,
      productName: "ladies shirts",
      productImage: "images/f8.jpg",
      productBrand: "H3h3",
      productPrice: 82,
    },
  ],
];

const sendProductDataToDB = async () => {
  try {
    const response = await fetch("http://localhost:5000/api/add-products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productData),
    });
    const result = await response.json();
    console.log("Products added:", result);
  } catch (error) {
    console.error("Error adding products:", error);
  }
};

sendProductDataToDB();
