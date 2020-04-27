import { Home as HomeDumb } from './home.dumb';
import { connect } from 'react-redux';

const mapDispatchToProps = () => ({})
const mapStateToProps = () => ({});
export const Home = connect(mapStateToProps, mapDispatchToProps)(HomeDumb);
