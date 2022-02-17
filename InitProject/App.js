/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Section = ({children, title, data, setData, text, setText}): Node => {
  //props: la nhan du lieu
  //props la children, title, data, setData

  const isDarkMode = useColorScheme() === 'dark';
  const count = () => {
    setData((data = data + 1));
  };
  const _onClickChangeText = () => {
    setText('Hello world');
  };
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title} {data ? `Number ${data}` : ''} {text ?? ''}
        {data && (
          <Button onPress={count} title="Click button" color="#841584" />
        )}
        {text && (
          <Button
            onPress={_onClickChangeText}
            title="Click change text"
            color="#841584"
          />
        )}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const [data, setData] = useState(1);
  const [data1, setData1] = useState('Hello');
  //state: la quan ly du lieu

  //tao 1 state text la 'Hello' hien thi o Section 2. Va co 1 button, khi click button doi text thanh Hello world.

  const isDarkMode = useColorScheme() === 'dark';
  //var, let, const
  //var: de gan gia tri scope la global variable
  //let: de gan gia tri va scope la local variable
  //const: khong the gan lai

  //setTimeout: Hàm setTimeout() trong JavaScript được sử dụng để thực thi một hàm hoặc đoạn mã được chỉ định chỉ một lần sau một khoảng thời gian nhất định
  // useEffect(() => {
  //   setTimeout(() => {
  //     alert('Hello');
  //   }, 5000);
  // }, []);

  //setInterval:
  // useEffect(() => {
  //   const date = new Date();
  //   setInterval(() => {
  //     alert('Hello xx', date.getTime().toString());
  //   }, 5000);
  // }, []);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step 1" data={data} setData={setData}>
            Edit <Text style={styles.highlight}>App.js</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes" text={data1} setText={setData1}>
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
