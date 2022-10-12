import React from "react";
import GridView from "./GridView";

const MemeListPage = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-title">Owls</h1>
        <p>Life starts at night</p>
        <GridView />
      </header>
    </div>
  );
};

export default MemeListPage;
