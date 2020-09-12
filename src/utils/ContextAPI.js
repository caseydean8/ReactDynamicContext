import React from "react";

const ContextAPI = React.createContext({
  languages: [],
  user: {},
  users: [],
  userIndex: 0,
  capFirst: () => undefined,
  handleBtnClick: () => undefined
});

export default ContextAPI;