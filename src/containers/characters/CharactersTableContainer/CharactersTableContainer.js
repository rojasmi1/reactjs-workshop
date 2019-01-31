import { connect } from "react-redux";
import CharactersTable from "components/characters/CharactersTable";
import { actions } from "store/charactersReducer";

const mapStateToProps = state => ({
  rows: state.characters.charactersList
});

const mapDispatchToProps = dispatch => ({
  loadCharacters: () => dispatch(actions.loadCharacters())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharactersTable);
