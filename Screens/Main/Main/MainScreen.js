import React, {useEffect, useState} from 'react';
import {startCounter, stopCounter} from 'react-native-accurate-step-counter';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Divider, TopNavigation} from '@ui-kitten/components';
import styles from '../../../src/styles';

const App = () => {
  const [steps, setSteps] = useState(0);

  useEffect(() => {
    const config = {
      default_threshold: 15.0,
      default_delay: 150000000,
      cheatInterval: 3000,
      onStepCountChange: stepCount => {
        setSteps(stepCount);
      },
      onCheat: () => {
        console.log('User is Cheating');
      },
    };
    startCounter(config);
    return () => {
      stopCounter();
    };
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <TopNavigation
        title={<Text style={styles.miniTitle}>Adımlar</Text>}
        alignment="center"
      />
      <Divider />
      <View style={{flex: 1, alignItems: 'center', marginTop: 20}}>
        <Text style={styles.miniTitle}> Bugünkü adımlarım </Text>
      </View>
      <Divider />

      <View style={StepStyles.screen}>
        <Text style={StepStyles.step}>{steps} /10,000</Text>
      </View>

      <Divider />
    </SafeAreaView>
  );
};

const StepStyles = StyleSheet.create({
  screen: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 25,
  },
  step: {
    fontSize: 36,
  },
});

export default App;
