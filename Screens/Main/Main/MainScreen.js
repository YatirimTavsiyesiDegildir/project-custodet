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
  Avatar,
  Modal,
  Button,
  Card,
} from '@ui-kitten/components';
import styles from '../../../src/styles';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import * as Progress from 'react-native-progress';

const LockIcon = props => <Icon {...props} name="lock" />;
const LogoutIcon = props => <Icon {...props} name="log-out" />;

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

const App = props => {
  const [steps, setSteps] = useState(3248);

  useEffect(() => {
    const config = {
      default_threshold: 15.0,
      default_delay: 150000000,
      cheatInterval: 3000,
      onStepCountChange: stepCount => {
        setSteps(steps + stepCount);
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

  const logout = () => {
    console.log(props);
    props.route.params.mainFunctions.logout();
  };
  const BackAction = () => (
    <TopNavigationAction icon={LogoutIcon} onPress={() => logout()} />
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('../../../src/img/wcover_barrow.png')}
          style={{
            height: 40,
            width: 40,
            overflow: 'visible',
            resizeMode: 'center',
            padding: 8,
            zIndex: 10,
            position: 'absolute',
            top: 10,
          }}
        />
      </View>

      <TopNavigation
        style={{margin: 0}}
        alignment="center"
        accessoryRight={BackAction}
      />
      <Divider />
      <Layout style={styles.layout}>
        <ScrollView style={styles.container}>
          <Card
            style={[styles.card, {backgroundColor: '#045c9c'}]}
            status="basic">
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text
                style={{
                  justifyContent: 'center',
                  alignSelf: 'center',
                  fontWeight: 'bold',
                  color: '#ffffff',
                  textAlign: 'center',
                }}>
                Yurumeye onem verip saglikli yasadigin icin sana ozel bir
                hediyemiz var! {'\n'}
                {'\n'}
                Hemen tikla ve Anadolu Hayat Emekliligin indirimli saglik
                sigortasindan yararlan.
              </Text>
            </View>
          </Card>
          <View style={styles.divider} />
          <Card
            style={[
              styles.card,
              {
                alignItems: 'center',
                margin: 0,
                padding: 20,
                justifyContent: 'center',
              },
            ]}>
            <View
              style={[
                StepStyles.avatarContainer,
                {alignSelf: 'center', flex: 0},
              ]}>
              <View style={StepStyles.avatarInnerContainer}>
                <Image
                  style={StepStyles.avatar}
                  source={require('../../../src/img/dogu.jpeg')}
                />
              </View>
            </View>
            <View
              style={[
                StepStyles.infoContainer,
                {padding: 0, alignSelf: 'center'},
              ]}>
              <Text category={'h1'} style={StepStyles.realName}>
                {'Dogu'}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 24,
                }}>
                <View style={{height: 10}}>
                  <Progress.Bar
                    progress={0.7}
                    animated={true}
                    width={280}
                    color={'#6eb648'}
                  />
                </View>
                <View
                  style={{
                    backgroundColor: '#6eb648',
                    width: 30,
                    height: 30,
                    borderRadius: 15,
                    marginLeft: 8,

                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: 16,
                  }}>
                  <Text style={{color: '#efefef', fontWeight: 'bold'}}>9</Text>
                </View>
              </View>
              <Text style={{color: '#7d7878', fontWeight: 'bold'}}>
                Toplam adımlarım: 289,312
              </Text>
            </View>
          </Card>
          <View style={styles.divider} />

          <Card style={[styles.card]}>
            <Text category="h4" style={styles.titleTextMedium}>
              Bugünkü Adımlarım
            </Text>
            <AnimatedCircularProgress
              size={200}
              width={20}
              backgroundWidth={30}
              fill={steps / 100}
              tintColor="#6eb648"
              backgroundColor="#efefef">
              {steps => (
                <Text style={{fontWeight: 'bold'}}>
                  {Math.floor(steps * 100)} / 10,000
                </Text>
              )}
            </AnimatedCircularProgress>
          </Card>

          <View style={styles.divider} />

          <Card style={[styles.card]}>
            <Text category={'h3'} style={styles.titleTextMedium}>
              Koleksiyon
            </Text>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <View style={StepStyles.badgeContainer}>
                <Avatar source={require('../../../src/img/sprites/1.png')} />
                <Text style={StepStyles.badgeText}>Genesis</Text>
                <Text style={StepStyles.badgeSubText}>#1</Text>
              </View>
              <View style={StepStyles.badgeContainer}>
                <Avatar source={require('../../../src/img/sprites/2.png')} />
                <Text style={StepStyles.badgeText}>Atlas</Text>
                <Text style={StepStyles.badgeSubText}>#3</Text>
              </View>
              <View style={StepStyles.badgeContainer}>
                <Avatar source={require('../../../src/img/sprites/3.png')} />
                <Text style={StepStyles.badgeText}>Icarus</Text>
                <Text style={StepStyles.badgeSubText}>#5</Text>
              </View>
            </View>

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

          <View style={{height: 75}} />
        </ScrollView>
      </Layout>
    </SafeAreaView>
  );
};

const StepStyles = StyleSheet.create({
  badgeText: {
    fontWeight: 'bold',
  },
  badgeSubText: {
    color: '#7f7f7f',
  },
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
    width: 80,
    margin: 16,
    padding: 8,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  avatarContainer: {
    padding: 16,
    height: 200,
  },
  infoContainer: {
    alignItems: 'center',
    width: '100%',
    padding: 16,
    paddingTop: 0,
  },
  logoutContainer: {
    justifyContent: 'flex-start',
  },
  avatar: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
    padding: 10,
    zIndex: 10,
    borderRadius: 1000,
  },
  avatarInnerContainer: {
    height: '100%',
    aspectRatio: 1,
    borderRadius: 1000,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  realName: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  badgeTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    width: '100%',
  },
});

export default App;
