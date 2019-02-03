import { connect } from "react-redux";
import ErrorMessage from "components/common/ErrorMessage";

const mapStateToProps = state => ({
  hasErrors: state.characters.hasErrors,
  errorMessage: state.characters.errorMessage,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ErrorMessage);
