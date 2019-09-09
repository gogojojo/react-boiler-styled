import React, { Component } from "react";
import ReactDOM from "react-dom";

import { AppProvider } from "../../context/AppProvider.js";

import "../../../styles/appStyles.scss";
import Grid from '../presentational/Grid.jsx';
import GridItem from '../presentational/GridItem.jsx';

function AppContainer() {
  return (
    <div className="container">
      <AppProvider>
          <Grid>
            <GridItem gridWidth="full">
              hello world
            </GridItem>
          </Grid>
      </AppProvider>
    </div>
  );
}

const wrapper = document.getElementById("app-container");
wrapper ? ReactDOM.render(<AppContainer />, wrapper) : false;
