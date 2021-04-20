// import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Linking, AsyncStorage, Platform, Alert } from "react-native";
import { Modalize } from "react-native-modalize";

export default function App() {
  const modalizeRef = useRef(null);
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const openModal = () => {
    modalizeRef.current ?.open();
  }
  const closeModal = () => {
    modalizeRef.current ?.close();
  }
  const openAppSettings = () => {
    if (Platform.OS === 'ios') {
      Linking.openURL('app-settings:')
    } else {
      // alert('Go to Settings to delete cache and data')
      Alert.alert(
        "Going to Setting's app!",
        "To delete CACHE from app Modal!",
        [
          {
            text: "OK",
            onPress: () => {
              Linking.openSettings('app-settings:storage');
            },
            style: "default",
          },
          {
            text: "Cancel",
            onPress: () => {
              alert("If you don't clear the app's CACHE, you won't be able to make the best use of the new version of the app!")
            },
            style: 'destructive',
          }
        ],
        {
          cancelable: true,
          onDismiss: () =>
            Alert.alert(
              "This alert was dismissed by tapping outside of the alert dialog."
            ),
        }
      );

      // <Modalize
      //   ref={modalizeRef}
      //   snapPoint={200}
      //   modalHeight={0.7 * windowHeight}
      //   HeaderComponent={
      //     <View style={styles.headerModal}>
      //       <Text style={styles.bodyTextHeader}>
      //         Header Modal {'\n'}
      //         To more information, just swip up ...
      //         </Text>
      //     </View>
      //   }
      // ></Modalize>

    }
  }

  return (
    <>
      <View style={styles.container}>

        <TouchableOpacity onPress={openModal}>
          <Text style={{ fontSize: 30 }}>Open MODAL</Text>
        </TouchableOpacity>

        <Modalize
          ref={modalizeRef}
          snapPoint={200}
          modalHeight={0.7 * windowHeight}
          HeaderComponent={
            <View style={styles.headerModal}>
              <Text style={styles.bodyTextHeader}>
                Header Modal {'\n'}
                To more information, just swip up ...
              </Text>
            </View>
          }
        // style={backgroundColor='#10a5f5'}
        // backgroundColor={'#10a5f5'}
        >
          <View style={styles.containerButton}>
            <TouchableOpacity onPress={openAppSettings} style={[styles.button, { backgroundColor: '#29ae19', marginRight: 5 }]}>
              <Text>Clean Cache</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={closeModal} style={[styles.button, { backgroundColor: '#ff0000', marginLeft: 5 }]}>
              <Text>Close!</Text>
            </TouchableOpacity>

          </View>

          <View>
            {/* <Text style={styles.bodyText}>
              Where does it come from?
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
              Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
              consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
              Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
              This book is a treatise on the theory of ethics, very popular during the Renaissance.
              The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
              The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
              Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form,
              accompanied by English versions from the 1914 translation by H. Rackham.
              </Text> */}
            <View style={styles.lineStyle} />
            <Text style={styles.bodyText}>
              To install the new FMobile 6, click in button 'Clean Cache', and you'll be directed to the app settings screen, to clean CACHE up!
              {'\n'}
              And when you return, tap button - Go to Store - to dowload and install the new version from FMobile!
            </Text>


            <Text style={styles.bodyText}>But you don't sure yet, take a look in store: {'\n'}
              <View style={{ flexDirection: 'row'}}>
                <Text style={[styles.bodyText, { color: 'blue', fontSize: 30 }]}
                  onPress={() => Linking.openURL('https://play.google.com/store/apps/details?id=fullttrack.com.br&hl=pt_BR&gl=US')}>
                  Google Play
              </Text>
                <Text style={[styles.bodyText, { color: 'blue', fontSize: 30 }]}
                  onPress={() => Linking.openURL('https://apps.apple.com/br/app/fmobile/id563207819#?platform=iphone')}>
                  App Store
              </Text>
              </View>
            </Text>
          </View>

        </Modalize>

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#10a5f5',
  },
  headerModal: {
    width: '100%',
    height: 70,
  },
  bodyTextHeader: {
    flex: 1,
    fontSize: 22,
    textAlign: 'center',
    // justifyContent: 'center',
    // alignItems: 'center',
    // textAlignVertical: 'center',
    margin: 10,
    color: '#000'
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // padding: 15,
    borderRadius: 7,
    height: 50,
    // paddingLeft:10
  },
  containerButton: {
    flex: 1,
    flexDirection: 'row',
    height: 70,
    // backgroundColor: '#aaa',
    // backgroundColor: '#10a5f5',
    justifyContent: 'center',
    alignItems: 'center',
    // margin: 10,
    padding: 10,
  },
  bodyText: {
    flex: 1,
    fontSize: 20,
    textAlign: 'justify',
    justifyContent: 'center',
    margin: 20,
    color: '#888'
  },
  lineStyle: {
    borderWidth: 0.5,
    borderColor: 'black',
    margin: 10,
  }
});

