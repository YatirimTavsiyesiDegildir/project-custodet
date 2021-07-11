import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  Divider,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
  Icon,
  Modal,
  Button,
  Card,
} from '@ui-kitten/components';

const LogoutIcon = props => <Icon {...props} name="log-out" />;
const LockIcon = props => <Icon {...props} name="lock" />;
import styles from '../../src/styles';

import * as Progress from 'react-native-progress';

let date = new Date();

export default class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {visible: false, badgeText: ''};
  }

  BackAction = () => (
    <TopNavigationAction
      icon={LogoutIcon}
      onPress={() => this.props.route.params.mainFunctions.logout()}
    />
  );

  ModalWithBackdropShowcase = (
    badgeString = '',
    imgUri = '',
    locked = false,
  ) => {
    return (
      <View
        style={[
          ProfileStyles.badgeContainer,
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
              backdropStyle={ProfileStyles.backdrop}
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

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <TopNavigation
          title={<Text style={styles.miniTitle}>Profilim</Text>}
          alignment="center"
          accessoryRight={this.BackAction}
        />
        <Divider />
        <Layout style={styles.layout}>
          <ScrollView style={styles.container}>
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
                  ProfileStyles.avatarContainer,
                  {alignSelf: 'center', flex: 0},
                ]}>
                <View style={ProfileStyles.avatarInnerContainer}>
                  <Image
                    style={ProfileStyles.avatar}
                    source={require('../../src/img/dogu.jpeg')}
                  />
                </View>
              </View>
              <View
                style={[
                  ProfileStyles.infoContainer,
                  {padding: 0, alignSelf: 'center'},
                ]}>
                <Text category={'h1'} style={ProfileStyles.realName}>
                  {global.real_name}
                </Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View style={{height: 10}}>
                    <Progress.Bar
                      progress={0.7}
                      width={310}
                      animated={true}
                      color={'#eb008d'}
                    />
                  </View>
                  <View
                    style={{
                      backgroundColor: '#eb008d',
                      width: 30,
                      height: 30,
                      borderRadius: 15,
                      marginLeft: 8,

                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text style={{color: '#EFEFEF'}}>9</Text>
                  </View>
                </View>
                <Text style={{color: '#ACACAC'}}>Çırak -> Amatör</Text>
              </View>
            </Card>
            <View style={styles.divider} />
            <Card style={[styles.card]}>
              <Text category={'h3'} style={styles.titleTextMedium}>
                Rozetlerim
              </Text>
              <View style={ProfileStyles.badgeRow}>
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
              <View style={ProfileStyles.badgeRow}>
                {this.ModalWithBackdropShowcase('', '', true)}
                {this.ModalWithBackdropShowcase('', '', true)}
                {this.ModalWithBackdropShowcase('', '', true)}
                {this.ModalWithBackdropShowcase('', '', true)}
              </View>
            </Card>
            <View style={{height: 75}} />
          </ScrollView>
        </Layout>
      </SafeAreaView>
    );
  }
}

const ProfileStyles = StyleSheet.create({
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
