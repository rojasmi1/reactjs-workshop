import { connect } from "react-redux";
import CharactersTable from "components/characters/CharactersTable";

const mapStateToProps = state => ({
  rows: state.characters.charactersList
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharactersTable);
