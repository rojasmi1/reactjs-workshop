import { connect } from "react-redux";
import CharacterProfile from "components/characters/CharacterProfile";

const mapStateToProps = state => ({
  selectedCharacter: state.characters.selectedRow
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterProfile);
