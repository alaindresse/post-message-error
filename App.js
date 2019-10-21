import * as React from "react";
import { View, Button } from "react-native";

export default class App extends React.Component {
  handlePress = () => {
    navigator.serviceWorker.controller.postMessage({
      content: "non text message"
    });
  };
  render() {
    return (
      <View>
        <Button onPress={this.handlePress} title="Send message" />
      </View>
    );
  }
}
