import React, { Component } from "react";
import API from "../utils/API";
import CardContainer from "../components/CardContainer";
import Row from "../components/Row";
import ContextAPI from "../utils/ContextAPI";

// const ContextAPI = React.createContext();

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      languages: [],
      user: {},
      users: [],
      userIndex: 0,
      // name: ""
      // BEWARE this binding!!! arrow function doesn't work below
      capFirst: this.capitalizeFirstLetter,
      // function (first = "", last = "") {
      //   let a = first.charAt(0).toUpperCase() + first.slice(1);
      //   let b = last.charAt(0).toUpperCase() + last.slice(1);
      //   console.log(a + " " + b);
      //   return a + " " + b;
      // },
      handleBtnClick: this.handleBtnClick
      // (event) => {
      //   const btnName = event.target.getAttribute("data-value");
      //   if (btnName === "next") {
      //     const userIndex = this.state.userIndex + 1;
      //     this.nextUser(userIndex);
      //   } else {
      //     const userIndex = this.state.userIndex - 1;
      //     this.previousUser(userIndex);
      //   }
      // },
    };
  }

  // When the component mounts, a call will be made to get random users.
  componentDidMount() {
    this.loadUsers();
    // this.state.capFirst();
  }
  // Moved to state object
  capitalizeFirstLetter(string = "", last = "") {
    console.log(string, last);
    let a = string.charAt(0).toUpperCase() + string.slice(1);
    let b = last.charAt(0).toUpperCase() + last.slice(1);
    console.log(a + " " + b);
    return a + " " + b;
  }

  nextUser(userIndex) {
    // Ensure that the user index stays within our range of users
    if (userIndex >= this.state.users.length) {
      userIndex = 0;
    }
    this.setState({
      user: this.state.users[userIndex],
      userIndex: userIndex,
    });
  }

  previousUser(userIndex) {
    // Ensure that the user index stays within our range of users
    if (userIndex < 0) {
      userIndex = this.state.users.length - 1;
    }
    this.setState({
      user: this.state.users[userIndex],
      userIndex: userIndex,
    });
  }

  handleBtnClick = (event) => {
    // Get the title of the clicked button
    const btnName = event.target.getAttribute("data-value");
    if (btnName === "next") {
      const userIndex = this.state.userIndex + 1;
      this.nextUser(userIndex);
    } else {
      const userIndex = this.state.userIndex - 1;
      this.previousUser(userIndex);
    }
  };

  loadUsers = () => {
    API.getLanguagesList()
      .then((languages) => {
        return API.getUsersByLanguage(languages[0]).then((users) => {
          return this.setState({
            languages: languages,
            users: users,
            user: users[0],
            // name: this.capitalizeFirstLetter(this.state.user.firstname, this.state.user.lastname)
          });
        });
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <h1 className="text-center">Welcome to LinkedUp</h1>
        <h3 className="text-center">Click on the arrows to browse users</h3>
        <Row>
          <ContextAPI.Provider value={this.state}>
            <CardContainer
              // title={
              //   this.state.capFirst(this.state.user.firstname) +
              //   " " +
              //   this.state.capFirst(this.state.user.lastname)
              // }
              // image={this.state.user.image}
              // language={this.state.user.language}
              // email={this.state.user.email}
              // handleBtnClick={this.handleBtnClick}
            />
          </ContextAPI.Provider>
        </Row>
      </div>
    );
  }
}

export default Gallery;
