import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import styled from "styled-components";

import allReducers from "./reducers";

import Logo from "./components/Logo";
import Body from "./components/Body";

const store = createStore(allReducers);

const AppContainer = styled.div`
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

const FormContainer = styled.div`
  width: 450px;
  background-color: #2ecc71;
  display: flex;
  flex-flow: column;
  padding: 20px 0px;
  border-radius: 3px;
`;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer>
          <Logo />
          <FormContainer>
            <Body />
          </FormContainer>
        </AppContainer>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
