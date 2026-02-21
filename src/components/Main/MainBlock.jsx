import { Component } from "react";
import Features from "./Features/Features";
import Results from "./Results/Results";
import Quality from "./Quality/Quality";
import Core from "./Core/Core";
import Tutorial from "./Tutorial/Tutorial";
import Customers from "./Customers/Customers";
import Payment from "./Payment/Payment";
import Products from "./Products/Products";
import Questions from "./Questions/Questions";

export default class MainBlock extends Component {
  render() {
    return (
      <main className="main">
        <Features />
        <Results />
        <Quality />
        <Core />
        <Tutorial />
        <Customers />
        <Payment />
        <Products />
        <Questions />
      </main>
    );
  }
}
