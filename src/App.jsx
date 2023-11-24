import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Greeter from "./Greeter";
import Die from "./die";
import ListPicker from "./ListPicker";
import DoubleDice from "./DoubleDice";
import Heading from "./Heading";
import ColorList from "./ColorList";
import Slots from "./Slots";
import ShoppingList from "./ShoppingList";
import PropertyList from "./PropertyList";
import Clicker from "./Clicker";
import Form from "./From";

// const data = [
//   {
//     id: 1,
//     item: "eggs",
//     quantity: 12,
//     completed: false,
//   },
//   {
//     id: 2,
//     item: "milk",
//     quantity: 12,
//     completed: true,
//   },
//   {
//     id: 3,
//     item: "chicken breasts",
//     quantity: 12,
//     completed: false,
//   },
//   {
//     id: 4,
//     item: "carrots",
//     quantity: 12,
//     completed: true,
//   },
// ];
const properties = [
  { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
  { id: 129331, name: "Lone Mountaine Cabin", rating: 4.8, price: 250 },
  { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
  { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
  { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
  { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
];

function App() {
  return (
    <div>
      {/* <Greeter person="bill" from="shivansh"></Greeter>
      <Greeter person="bill" from="shivansh"></Greeter>
      <Greeter person="bill" from="shivansh"></Greeter> */}
      {/* <Die></Die> // passing default values
      <Die numSides={20}></Die> // passing
      <Die numSides={20}></Die> */}
      {/* <ListPicker values={[1, 2, 3, 4]}></ListPicker>
      <ListPicker values={["a", "b", "c", "d"]}></ListPicker> */}
      {/* <ListPicker values={{ a: 1, b: 2 }}></ListPicker>
       */}
      {/* <DoubleDice></DoubleDice>
      <DoubleDice></DoubleDice>
      <DoubleDice></DoubleDice> */}
      {/* <Heading color="magenta" text={"welcome"} fontSize="20px"></Heading> */}
      {/* <ColorList colors={["red", "pink", "purple", "teal"]}></ColorList> */}
      {/* <Slots val1={1} val2={1} val3={1}></Slots>
      <Slots val1={1} val2={2} val3={1}></Slots>
      <Slots val1={1} val2={1} val3={3}></Slots> */}
      {/* <ShoppingList items={data}></ShoppingList> */}
      {/* <PropertyList data={properties}></PropertyList> */}
      {/* <Clicker></Clicker> */}
      <Form></Form>
    </div>
  );
}

export default App;
