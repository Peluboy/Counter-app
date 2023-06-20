import { Component } from "react";
import "../pages/error.css";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // logErrorToMyService(error, errorInfo);
    console.log("logging", error, errorInfo);
  }

  render() {
    const refreshPage = () => {
      window.location.reload();
    };

    if (this.state.hasError) {
      return (
        <>
          <div className="errorContainer">
            <div className="text">
              <h3>An Error Occurred</h3>
              <button onClick={refreshPage}>Click to Reload</button>
            </div>
            <div className="error">
              <img src="./images/errorpage.svg" alt="" />
            </div>
          </div>
        </>
      );
    }
    return this.props.children;
  }
}
