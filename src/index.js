import React, {Component, Fragment} from 'react';
import {StyleSheet, View, Button, Text} from 'react-native';

import Todo from './components/todo';

// import StyledApp from './StyledApp';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {todos: ['ok', 'fazer...', 'bla bla']};

    this.addTodo = this.addTodo.bind(this);
  }

  addTodo() {
    this.setState({todos: [...this.state.todos, `novo ${Math.random()}`]});
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.todos.map(t => (
          <Todo key={Math.random()} title={t} />
        ))}

        <Text>Usuari</Text>

        <Button
          title="Add Todo"
          onPress={f => {
            this.addTodo();
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    color: '#f0f0f0',
  },
  texto: {color: '#808080'},
});
