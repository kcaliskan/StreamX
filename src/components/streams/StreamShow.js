import React from "react";
import { fetchStream } from "../../actions";
import { connect } from "react-redux";

class StreamShow {
  componentDidMount() {}
  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.params.match.id] };
};

export default connect(
  mapStateToProps,
  { fetchStream }
)(StreamShow);
