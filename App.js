// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";
// import { Button } from "react-native-web";
// const logoUri = `https://firebasestorage.googleapis.com/v0/b/art-of-bloom.appspot.com/o/art_of_bloom_logo.jpg?alt=media&token=54eaf04b-78b7-47fb-871c-a99e67faf7b8`;

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Art Of Bloom</Text>
//       <Text style={styles.text}>Home</Text>
//       <Button onPress={() => {}} title="Get Started" />
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   text: {
//     lineHeight: "1.5em",
//     fontSize: "1.125rem",
//     marginVertical: "0.5em",
//     textAlign: "center",
//   },
// });
import React from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  Router,
  Scene,
} from "react-native";

const logoUri = `https://firebasestorage.googleapis.com/v0/b/art-of-bloom.appspot.com/o/art_of_bloom_logo.jpg?alt=media&token=54eaf04b-78b7-47fb-871c-a99e67faf7b8`;

function Link(props) {
  return (
    <Text
      {...props}
      accessibilityRole="link"
      style={StyleSheet.compose(styles.link, props.style)}
    />
  );
}

function App() {
  return (
    <View style={styles.app}>
      <View style={styles.header}>
        <Image
          accessibilityLabel="art of bloom logo"
          source={{ uri: logoUri }}
          resizeMode="contain"
          style={styles.logo}
        />
      </View>
      <Text style={styles.text}>Learn from the Nature.</Text>
      <Text style={styles.text}>Create Nature. </Text>
      <Text style={styles.text}>
        <Link href="https://art-of-bloom.web.app/" style={styles.code}>
          Art Of Bloom
        </Link>
      </Text>
      <Button onPress={() => {}} title="Get Started" />
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    maxWidth: 500,
  },
  logo: {
    height: 80,
    maxWidth: 200,
  },
  header: {
    padding: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: "1.5rem",
    marginVertical: "1em",
    textAlign: "center",
  },
  text: {
    lineHeight: "1.5em",
    fontSize: "1.125rem",
    marginVertical: "0.5em",
    textAlign: "center",
  },
  link: {
    color: "#1B95E0",
  },
  code: {
    fontFamily: "monospace, monospace",
  },
});

export default App;
