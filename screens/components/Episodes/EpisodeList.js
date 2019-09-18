import React, { Fragment, Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableHighlight
} from "react-native";

import firebase from "firebase";
import "@firebase/firestore";
import { initFirestorter, Collection } from "firestorter";
import { observer } from "mobx-react";

// Firebase Init
const firebaseConfig = {
  apiKey: "AIzaSyAITLDmtIK2ZyEjwYfGZkKqYHab5CnVHXo",
  authDomain: "podcast-68ac0.firebaseapp.com",
  databaseURL: "https://podcast-68ac0.firebaseio.com",
  projectId: "podcast-68ac0",
  storageBucket: "podcast-68ac0.appspot.com",
  messagingSenderId: "354277042339",
  appId: "1:354277042339:web:fb61eba51d8dfa2fc57716"
};

firebase.initializeApp(firebaseConfig);
// init firestorter
initFirestorter({ firebase: firebase });

//Define collection
const episodes = new Collection("episodes");

//wrap component with mobx observer pattern
const Episodes = observer(
  class Episodes extends Component {
    render() {
      return (
        <Fragment>
          {episodes.docs.reverse().map(doc => (
            <EpisodeItem key={doc.id} doc={doc} />
          ))}
        </Fragment>
      );
    }
  }
);

const EpisodeItem = observer(({ doc }) => {
  const { name, id, date } = doc.data;
  return (
    <View style={styles.prevEP}>
      <View style={styles.cont}>
        <View>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.id}>Ep.{id}</Text>
          <Text style={styles.date}>{date}</Text>
          <TouchableHighlight>
            <Image
              source={require("../../../assets/smPlay.png")}
              style={styles.playbutton}
            />
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
});

export default Episodes;

const styles = StyleSheet.create({
  playbutton: {
    height: 20,
    width: 20,
    position: "absolute",
    top: 50,
    left: 230
  },
  prevEP: {
    margin: 10,
    borderRadius: 30,
    borderWidth: 5,
    width: 300,
    height: 100,
    backgroundColor: "rgba(73, 90, 76, 0.9)"
  },
  cont: {
    flexDirection: "row"
  },
  date: {
    fontSize: 15,
    position: "absolute",
    top: 60,
    left: 15
  },
  title: {
    fontSize: 20,
    position: "absolute",
    top: 0,
    left: 15
  },
  id: {
    fontSize: 15,
    position: "absolute",
    top: 3,
    left: 230
  }
});
