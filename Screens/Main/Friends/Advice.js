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

export default class Advice extends Component {
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
          title={<Text style={styles.miniTitle}>Lider Tablosu</Text>}
          alignment="center"
          accessoryLeft={this.renderLeftActions}
        />
        <Divider />

        <Leaderboard
          data={[
            {
              userName: 'Dogu',
              km: 50,
              img:
                'https://project-lyda.s3.eu-central-1.amazonaws.com/dogu.jpeg',
            },
            {
              userName: 'Ada',
              km: 120,
              img:
                'https://project-lyda.s3.eu-central-1.amazonaws.com/ada.jpeg',
            },
            {
              userName: 'Cinar',
              km: 100,
              img:
                'https://project-lyda.s3.eu-central-1.amazonaws.com/cinar.jpg',
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
