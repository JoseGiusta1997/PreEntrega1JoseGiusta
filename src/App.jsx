import React from "react";
import "./App.css";

// COMPONENTS
import Header from "./components/Header/Header";
import UserCard from "./components/UserCard/UserCard";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

// PROPS => strings, arrays, booleans, functions, objetos, todo tipo de datos


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };

    // Binding
    // this.handlerCounterUp = this.handlerCounterUp.bind(this);
  }

  handlerCounterUp = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  handlerCounterDown = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div className="App">
        {}
        <Header
          title="Todo lo que necesitas , en un solo lugar."
        />
        <NavBar />
        <ItemListContainer />
        <div className="UserSection">
          <UserCard
            name= "Chomba Misericordia"
            date="Precio $350"
            description="Talle L"
            img="https://verdemasweb.com.ar/wp-content/uploads/CHOMBA-DIVINA-1-500x500.jpg"
          />
          <div className="btn-section">
          <button className="btn" onClick={this.handlerCounterUp}>
            Agregar al carrito
          </button>
          <button className="btn" onClick={this.handlerCounterDown}>
          Eliminar del carrito
          </button>
        </div>
          <UserCard
            name="Chomba Misericordia"
            date="Precio $350"
            description="Talle M"
            img="https://verdemasweb.com.ar/wp-content/uploads/CHOMBA-DIVINA-1-500x500.jpg"
          />
          <div className="btn-section">
          <button className="btn" onClick={this.handlerCounterUp}>
            Agregar al carrito
          </button>
          <button className="btn" onClick={this.handlerCounterDown}>
          Eliminar del carrito
          </button>
        </div>
          <UserCard
            name="Short Misericordia"
            date="Precio $250"
            description="Talle M"
            img="https://http2.mlstatic.com/D_NQ_NP_618517-MLA48486821458_122021-O.webp"
          />
          <div className="btn-section">
          <button className="btn" onClick={this.handlerCounterUp}>
            Agregar al carrito
          </button>
          <button className="btn" onClick={this.handlerCounterDown}>
          Eliminar del carrito
          </button>
        </div>
          <UserCard
            name="Uniforme San José"
            date="Precio $500"
            description="Talle L"
            img="https://i.pinimg.com/236x/c9/7c/d3/c97cd32745b4104cba9ad81fef18f116.jpg"
          />
          <div className="btn-section">
          <button className="btn" onClick={this.handlerCounterUp}>
            Agregar al carrito
          </button>
          <button className="btn" onClick={this.handlerCounterDown}>
          Eliminar del carrito
          </button>
        </div>
        </div>
        <div className="CounterSection">
          <p>Elementos en el carrito: {this.state.counter}</p>
        </div>
      </div>
    );
  }
}

export default App;
