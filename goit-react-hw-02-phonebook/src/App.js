import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form/Form";
import React, { Component } from "react";
import ContactsList from "./components/ContactsList/ContactsList";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    name: "",
  };
  addName = (text) => {
    console.log(text);
  };
  render() {
    return (
      <div className="App">
        <Form onSubmit={this.addName} />
        <ContactsList contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
