import {StyleSheet, Platform, StatusBar} from "react-native";

export default StyleSheet.create ({
  container: {
    flex: 1,
    flexDirection: "column",
    ...Platform.select({
      ios: {paddingTop: 20},
      android: {paddingTop: StatusBar.currentHeight}
    })
  },

  // List style
  item: {
      margin: 5,
      padding: 5,
      color: "slategray",
      backgroundColor: "#dddddd",
      textAlign: "center"
  }
}
);