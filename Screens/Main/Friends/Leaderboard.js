import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, View, ScrollView} from 'react-native';
import {
  Divider,
  Layout,
  Text,
  TopNavigation,
  Icon,
  TopNavigationAction,
} from '@ui-kitten/components';
import styles from '../../../src/styles';

import Leaderboard from 'react-native-leaderboard';

export default class LeaderboardScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      name: '',
      target: 0,
      stored: 0,
    };
  }

  componentDidMount() {}

  GoBackIcon = props => <Icon {...props} name="arrow-back-outline" />;

  renderLeftActions = () => (
    <React.Fragment>
      <TopNavigationAction
        icon={this.GoBackIcon}
        onPress={() => this.props.navigation.goBack()}
      />
    </React.Fragment>
  );

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <TopNavigation
          title={<Text style={styles.miniTitle}>Haftanin Liderleri</Text>}
          alignment="center"
          accessoryLeft={this.renderLeftActions}
        />
        <Divider />

        <Leaderboard
          data={[
            {
              userName: 'Dogu',
              km: 5000,
              img:
                'https://project-lyda.s3.eu-central-1.amazonaws.com/dogu.jpeg',
            },
            {
              userName: 'Ada',
              km: 12000,
              img:
                'https://project-lyda.s3.eu-central-1.amazonaws.com/ada.jpeg',
            },
            {
              userName: 'Cinar',
              km: 10000,
              img:
                'https://project-lyda.s3.eu-central-1.amazonaws.com/cinar.jpg',
            },
            {
              userName: 'Ebru',
              km: 9800,
              img:
                'https://imgproxy.generated.photos/6hpYeg88e25dSr4x5SqR_vDzd_2F9EmcGgyiYHh9M4w/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Ry/YW5zcGFyZW50X3Yz/L3YzXzA1NDM3MDMu/cG5n.png',
            },
            {
              userName: 'Murat',
              km: 102000,
              img: 'https://thispersondoesnotexist.com/image',
            },
            {
              userName: 'Erhan',
              km: 12400,
              img:
                'https://images.generated.photos/8xnkPoc5Jdp5vv1sc2-qATbEeGxX_IDX--CDekM9t84/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAwMjUyNzkuanBn.jpg',
            },
            {
              userName: 'Salih',
              km: 16000,
              img:
                'https://images.generated.photos/XGPwTkAbmIj4Sr0au5BLlIVbOznd_WcKQ4CcWRgCJfw/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA0OTg0NDguanBn.jpg',
            },
            {
              userName: 'İbrahim',
              km: 1400,
              img:
                'https://images.generated.photos/T6cK3shnsInnChmSICYtKaO1LWaKY7y7O4BRoXnsD-E/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA2MTI0NjMuanBn.jpg',
            },
            {
              userName: 'Alara',
              km: 16000,
              img:
                'https://images.generated.photos/Akr_QH_4aD38Byz34NL-YXdqVrdKz7rb2cB-Xgny2Cc/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAwNTAwMzIuanBn.jpg',
            },
            {
              userName: 'Genco',
              km: 16200,
              img:
                'https://images.generated.photos/cJqV8j5DxWHaBNjk7EsMJTqpjH-Qm3qtT2P4oM_-GFQ/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAzNzA0MDIuanBn.jpg',
            },
          ]}
          sortBy="km"
          labelBy="userName"
          icon="img"
          style={{backgroundColor: '#000', width: 100}}
        />
      </SafeAreaView>
    );
  }
}
