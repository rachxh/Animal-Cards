import { animals } from "./animals";
import AnimalCard from "./AnimalCard";
import React, { Component } from "react";

class App extends Component {
  state = {
    animals: animals,
    search: "",
  };

  removeHandler = (name) => {
    const updatedArray = this.state.animals.filter(
      (animal) => animal.name !== name
    );
    this.setState({ animals: updatedArray });
  };
  addLikeHandler = (name) => {
    console.log("add was clicked and name is:", name);
    this.setState((state) => {
      const updatedArray = state.animals.map((animal) => {
        if (animal.name === name) {
          return { ...animal, likes: animal.likes + 1 };
        } else {
          return animal;
        }
      });
      return {
        animals: updatedArray,
      };
    });
    console.log(this.state);
  };

  searchHandler = (e) => {
    console.log(this.state.search);
    this.setState({ search: e.target.value });
  };

  render() {
    const animalFilter = this.state.animals.filter((animal) => {
      return animal.name
        .toLowerCase()
        .includes(this.state.search.toLowerCase());
    });

    return (
      <main>
        <div className="title">
          <h1> {this.state.animals.length} Animals</h1>
          <input
            type="text"
            onChange={this.searchHandler}
            placeholder="search"
          />
          <h3 className="searchDisplay">{this.state.search}</h3>
        </div>
        <div className="animalList">
          {animalFilter.map((animal) => (
            <AnimalCard
              key={animal.name}
              name={animal.name}
              like={animal.likes}
              remove={() => this.removeHandler(animal.name)}
              add={() => this.addLikeHandler(animal.name)}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;
