import React, { Fragment } from "react";

class ErrorBoundary extends React.Component {
  state = { error: undefined };

  static getDerivedStateFromError(error) {
    return { error };
  }

  retry = () => this.setState({ error: undefined });

  render() {
    if(this.state.error)
      return (
        <Fragment>
          error fetching data... <br />
          <button onClick={this.retry}>retry</button>
        </Fragment>
      )
    
    return (
      <Fragment>{this.props.children}</Fragment>
    );
  }
}

export default ErrorBoundary