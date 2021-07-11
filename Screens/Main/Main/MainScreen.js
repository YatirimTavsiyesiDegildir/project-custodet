import React, {useEffect, useState} from 'react';
import {startCounter, stopCounter} from 'react-native-accurate-step-counter';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Alert,
  TouchableOpacity,
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
import {AnimatedCircularProgress} from 'react-native-circular-progress';

const LockIcon = props => <Icon {...props} name="lock" />;

/*
const ModalWithBackdropShowcase = (
  badgeString = '',
  imgUri = '',
  locked = false,
) => {
  return (
    <View
      style={[
        StepStyles.badgeContainer,
        locked
          ? {
              backgroundColor: '#7F7F7F77',
              borderRadius: 10,
            }
          : null,
      ]}>
      {!locked ? (
        <>
          <TouchableOpacity
            onPress={() =>
              this.setState({visible: true, badgeText: badgeString})
            }>
            <Image
              style={{height: 60, width: 60}}
              source={{
                uri: imgUri,
              }}
            />
          </TouchableOpacity>

          <Modal
            visible={this.state.visible}
            backdropStyle={StepStyles.backdrop}
            onBackdropPress={() => this.setState({visible: false})}>
            <Card disabled={true} style={{margin: 10}}>
              <Text>{this.state.badgeText}</Text>
            </Card>
          </Modal>
        </>
      ) : (
        <LockIcon fill={'#575757'} style={{height: '100%', width: '100%'}} />
      )}
    </View>
  );
};
 */

const App = () => {
  const [steps, setSteps] = useState(5000);

  useEffect(() => {
    const config = {
      default_threshold: 15.0,
      default_delay: 150000000,
      cheatInterval: 3000,
      onStepCountChange: stepCount => {
        setSteps(stepCount);
      },
      onCheat: () => {
        Alert.alert("Please don't cheat!");
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
        title={
          <Image
            source={require('../../../src/img/logo_transparent.png')}
            style={{
              height: 30,
              width: 70,
              overflow: 'visible',
              resizeMode: 'center',
              padding: 8,
            }}
          />
        }
        style={{margin: 0}}
        alignment="center"
      />
      <Divider />
      <Layout style={styles.layout}>
        <ScrollView style={styles.container}>
          <Card style={[styles.Card]}>
            <View style={{flex: 1, alignItems: 'center', marginTop: 20}}>
              <Text style={styles.miniTitle}> Bugünkü adımlarım </Text>
            </View>
            <AnimatedCircularProgress
              size={200}
              width={20}
              backgroundWidth={30}
              fill={steps / 100}
              tintColor="#00e0ff"
              backgroundColor="#3d5875">
              {steps => <Text>{steps * 100} / 10,000</Text>}
            </AnimatedCircularProgress>
          </Card>

          <View style={styles.divider} />
          <Card style={[styles.card]}>
            <Text category={'h3'} style={styles.titleTextMedium}>
              NFT'lerim
            </Text>
            {/*
            <View style={StepStyles.badgeRow}>
              {this.ModalWithBackdropShowcase(
                'Tebrikler! İlk arkadaşlı koşunu gerçeklerştirdin.',
                'https://project-lyda.s3.eu-central-1.amazonaws.com/badges/clap.jpeg',
              )}
              {this.ModalWithBackdropShowcase(
                'Tebrikler! Bir hafta boyunca eksiksiz hazırlandın.',
                'https://project-lyda.s3.eu-central-1.amazonaws.com/badges/flag.jpg',
              )}
              {this.ModalWithBackdropShowcase(
                'Tebrikler! Haftanın birincisi oldun.',
                'https://project-lyda.s3.eu-central-1.amazonaws.com/badges/natural.jpeg',
              )}
              {this.ModalWithBackdropShowcase('', '', true)}
            </View>
            <View style={StepStyles.badgeRow}>
              {this.ModalWithBackdropShowcase('', '', true)}
              {this.ModalWithBackdropShowcase('', '', true)}
              {this.ModalWithBackdropShowcase('', '', true)}
              {this.ModalWithBackdropShowcase('', '', true)}
            </View>
            */}
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
  badgeRow: {
    height: 80,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeContainer: {
    aspectRatio: 1,
    width: 60,
    margin: 10,
    justifyContent: 'center',
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export default App;
