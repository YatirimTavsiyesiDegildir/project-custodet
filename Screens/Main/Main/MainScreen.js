import React, {useEffect, useState} from 'react';
import {startCounter, stopCounter} from 'react-native-accurate-step-counter';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  RefreshControl,
  ScrollView,
} from 'react-native';
import {
  Divider,
  Layout,
  TopNavigation,
  TopNavigationAction,
  Icon,
  Modal,
  Button,
  Card,
} from '@ui-kitten/components';
import styles from '../../../src/styles';
import {CardAnimationContext} from '@react-navigation/stack';

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
      <Layout style={styles.layout}>
        <ScrollView
          style={styles.container}
          >
          <View style={styles.container}>
            <Card style={[styles.Card, {justifyContent: 'flex-start', borderRadius:10, padding: 10,}]}>
              <View style={{flex: 1, alignItems: 'center', marginTop: 20}}>
                <Text style={styles.miniTitle}> Bugünkü adımlarım </Text>
              </View>
              <View style={StepStyles.screen}>
                <Text style={StepStyles.step}>{steps} /10,000</Text>
              </View>
            </Card>
          </View>
          <Divider />
          <Card>
            <Text> BBBBBBBBBBBBBBB</Text>
          </Card>
        </ScrollView>
      </Layout>
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
