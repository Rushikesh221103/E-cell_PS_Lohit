import Item from "./Item";

const arr = [
  {
    src: "item.png",
    title: "Small",
    body: "Paper Courier Bags / EcoFriendly Packaging / Recyclable Paper Bags / Paper Packing Bag / Paper Pouch / Water Resistent With Permanent Self Adhesive Seal Tape ",
  },
  {
    src: "item.png",
    title: "Medium",
    body: "Paper Courier Bags / EcoFriendly Packaging / Recyclable Paper Bags / Paper Packing Bag / Paper Pouch / Water Resistent With Permanent Self Adhesive Seal Tape  ",
  },
  {
    src: "item.png",
    title: "Large",
    body: "Paper Courier Bags / EcoFriendly Packaging / Recyclable Paper Bags / Paper Packing Bag / Paper Pouch / Water Resistent With Permanent Self Adhesive Seal Tape ",
  },
  // {
  //   src: "item.png",
  //   title: "Thane",
  //   body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, nobis!",
  // },
  // {
  //   src: "item.png",
  //   title: "Thane",
  //   body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, nobis!",
  // },
  // {
  //   src: "item.png",
  //   title: "Thane",
  //   body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, nobis!",
  // },
  // {
  //   src: "item.png",
  //   title: "Thane",
  //   body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, nobis!",
  // },
  // {
  //   src: "item.png",
  //   title: "Thane",
  //   body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, nobis!",
  // },
];

const Shop = () => {
  return (
    <div className="shop-container">
      {arr.map((i) => (
        <Item src={i.src} title={i.title} body={i.body} />
      ))}
    </div>
  );
};

export default Shop;