import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Text, StyleSheet} from 'react-native';

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {ok: ''};
  }

  static defaultProps = {
    title: 'Valor padrao',
  };

  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  /* ciclo de vida */
  componentDidMount() {
    // componente montado
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {ok: 'true'};
  }

  shouldComponentUpdate(nextProps, nextState) {
    // valida se o componente precisa ser renderizado novamente
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    // componente atualizou
  }

  componentWillUnmount() {
    // antes do componente ser desmontado
  }

  render() {
    return (
      <View>
        <Text>{this.props.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
