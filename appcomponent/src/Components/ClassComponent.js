import React from 'react';

class ClassComponent extends React.Component {
   
    render() {
        const {fairwell}=this.props;
      return <h2>{fairwell} </h2>;
    }
}

export default ClassComponent;