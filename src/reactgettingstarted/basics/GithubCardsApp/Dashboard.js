import React from "react";
import FormComponent from './FormComponent';
import './Dashboard.css'
import testData from "./testData";

class Dashboard extends React.Component {
  state = {
    profiles: [],
  };

  addNewProfile = (profileData) => {
    this.setState((prevState) => ({
      profiles: [...prevState.profiles, profileData],
    }));
  };
    
      render() {
        return (
          <div>
            <div className="header">{this.props.title}</div>
          <FormComponent />
          </div>
      );
    }	
  }

export default Dashboard;
