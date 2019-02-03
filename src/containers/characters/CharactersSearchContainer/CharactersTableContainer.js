import { connect } from "react-redux";
import CharactersSearch from "components/characters/CharactersSearch";
import { actions } from "store/charactersReducer";

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  searchCharacters: (keyword) => dispatch(actions.searchCharacters(keyword)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharactersSearch);
