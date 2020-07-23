import { Component } from "react";
import { View, Text, TextInput, Image, StyleSheet } from "react-native";

export default class GeradordeMeme extends Component {
  constructor(props) {
    super(props);
    this.state;
  }

  render() {
    return (
      <View style={styles.body}>
        <View>
          <Text style={styles.titulo}>Gerador de Meme</Text>
        </View>

        <View style={styles.inputArea}>
          <TextInput
            placeholder="Digite seu mimimi"
            style={styles.input}
          ></TextInput>
        </View>

        <View style={styles.area}>
          <Text style={[styles.texto, styles.texto1]}></Text>
          <Image
            style={styles.guri}
            source={require("./images/mimimi.jpg")}
          ></Image>
          <Text style={[styles.texto, styles.texto2]}></Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#999999",
    paddingTop: 30,
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  titulo: {
    fontSize: 30,
    color: "#FFFFFF",
  },
  inputArea: {
    alignSelf: "stretch",
  },
  input: {
    borderWidth: 1,
    borderColor: "#999999",
    backgroundColor: "#EEEEEE",
    color: "#000000",
    height: 40,
    margin: 20,
    padding: 10,
  },
  area: {
    width: 300,
    height: 300,
    marginTop: 10,
  },
  guri: {
    width: 300,
    height: 300,
    marginTop: -70,
    zIndex: 0,
  },
  texto: {
    fontSize: 25,
    color: "#FFFFFF",
    padding: 10,
    backgroundColor: "transparent",
    fontWeight: "bold",
    textAlign: "center",
    height: 70,
  },
  texto1: {
    zIndex: 1,
  },
  texto2: {
    zIndex: 1,
    marginTop: -70,
  },
});
