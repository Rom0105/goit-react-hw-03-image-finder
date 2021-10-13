import PropTypes from 'prop-types';
import styles from '../Container/Container.module.css';

const Container = ({ children }) => <div className={styles.container}>{children}</div>;

Container.defaultProps = {
  children: [],
};

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;