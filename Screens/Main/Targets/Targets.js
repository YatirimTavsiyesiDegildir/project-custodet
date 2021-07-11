import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  View,
  Image,
  TouchableOpacity,
  Button,
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
  Card,
} from '@ui-kitten/components';
import styles from '../../../src/styles';
import * as Progress from 'react-native-progress';

const OtherPlusIcon = props => <Icon {...props} name="plus-outline" />;

let i = 0;
let date = new Date();

export default class TargetScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {targets: [], progress1: 0, progress2: 0, progress3: 0};
  }

  componentDidMount() {
    this.setState({progress1: 0.9, progress2: 0.21, progress3: 0.85});
  }

  PlusIcon = props => <Icon {...props} name="plus-circle-outline" />;

  renderRightActions = () => (
    <React.Fragment>
      <TopNavigationAction
        icon={this.PlusIcon}
        onPress={() => {
          this.props.navigation.navigate('AddTarget');
          this.setState({visible: true});
        }}
      />
    </React.Fragment>
  );

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <TopNavigation
          title={<Text style={styles.miniTitle}>Koş</Text>}
          alignment="center"
        />
        <Divider />

        <View style={BackStyles.container}>
          <ImageBackground
            source={require('../../../src/img/map.png')}
            resizeMode="cover"
            style={BackStyles.image}>
            <View
              style={{
                position: 'absolute',
                bottom: 5,
                left: 0,
                right: 0,
                alignItems: 'center',
              }}>
              <TouchableOpacity
                style={{
                  height: 100,
                  width: 100,
                  borderRadius: 50,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#eb008d',
                }}>
                <Text style={{fontWeight: 'bold', color: '#FFF'}}>KOŞ</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </SafeAreaView>
    );
  }
}

const BackStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    backgroundColor: '#eb008d',
    borderColor: '#eb008d',
  },
});

const ProfileStyles = StyleSheet.create({
  newContainer: {
    minHeight: 192,
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarContainer: {
    flex: 2,
    padding: 16,
  },
  infoContainer: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    padding: 16,
  },
  logoutContainer: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
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
});
