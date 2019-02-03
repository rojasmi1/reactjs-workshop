import { connect } from "react-redux";
import CharactersTable from "components/characters/CharactersTable";
import { actions } from "store/charactersReducer";

const mapStateToProps = state => ({
  characters: state.characters.charactersList,
  selectedRow: state.characters.selectedRow,
  isLoadingCharacters: state.characters.isLoadingCharacters
});

const mapDispatchToProps = dispatch => ({
  selectCharacter: (character) => dispatch(actions.selectCharacter(character)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharactersTable);
