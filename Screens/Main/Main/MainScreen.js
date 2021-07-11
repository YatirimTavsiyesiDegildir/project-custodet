import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  RefreshControl,
  Image,
} from 'react-native';
import {
  Divider,
  Layout,
  TopNavigation,
  Icon,
  TopNavigationAction,
  Text,
  Card,
} from '@ui-kitten/components';

import {LineChart, PieChart, ContributionGraph} from 'react-native-chart-kit';
import * as FIcon from 'react-native-feather';

import {OurProgressChart} from '../../../src/component/ProgressChart';
import styles from '../../../src/styles';

export default class GraphsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {visible: false, visible2: false, refreshing: false};
  }

  componentDidMount() {}

  PlusIcon = props => <Icon {...props} name="plus-outline" />;
  BellIcon = props => <Icon {...props} name="bell-outline" />;

  renderRightActions = () => (
    <React.Fragment>
      <TopNavigationAction
        icon={this.PlusIcon}
        onPress={() => {
          this.props.navigation.navigate('AddBankAPI');
          this.setState({visible: true});
        }}
      />
    </React.Fragment>
  );

  renderLeftActions = () => (
    <React.Fragment>
      <TopNavigationAction
        icon={this.BellIcon}
        onPress={() => {
          this.props.navigation.navigate('NotificationsScreen');
          this.setState({visible: true});
        }}
      />
    </React.Fragment>
  );

  render() {
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
          <ScrollView
            style={styles.container}
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={() => this.setState({refreshing: false})}
              />
            }>
            <Card
              style={[
                styles.card,
                {alignItems: 'flex-start', justifyContent: 'flex-start'},
              ]}>
              <Image
                source={require('../../../src/img/marathon_logo.png')}
                style={{width: 100, height: 100}}
                resizeMode={'contain'}
              />
              <View
                style={{
                  backgroundColor: '#eb008d',
                  width: 310,
                  height: 100,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 16,

                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,

                  elevation: 5,
                }}>
                <Text
                  style={{
                    alignSelf: 'center',
                    width: '100%',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    color: '#FFF',
                    fontSize: 24,
                  }}>
                  3 Ay, 27 Gun, 6 Saat
                </Text>
              </View>
            </Card>

            <View style={styles.divider} />

            <Card
              style={[
                styles.card,
                {
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  backgroundColor: '#0175ec',
                },
              ]}>
              <Text
                style={{
                  alignSelf: 'center',
                  width: '100%',
                  color: '#FFF',
                  fontSize: 18,
                  marginBottom: 8,
                }}>
                Artik Marathona Hazirsin!
              </Text>
              <View
                style={{
                  width: 320,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    backgroundColor: '#00000000',
                    padding: 8,
                    paddingHorizontal: 32,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 16,
                    borderColor: '#ffffff',
                    borderWidth: 2,
                    width: 250,
                  }}>
                  <Text
                    style={{
                      alignSelf: 'center',
                      width: '100%',
                      textAlign: 'center',
                      fontWeight: 'bold',
                      color: '#FFF',
                      fontSize: 24,
                    }}>
                    Hemen Kaydol
                  </Text>
                </View>
              </View>
            </Card>

            <View style={styles.divider} />

            <Card style={[styles.card, {alignItems: 'flex-start'}]}>
              <Text category="h4" style={styles.titleTextMedium}>
                Gunun Gorevi
              </Text>

              <View style={GraphsStyles.taskRow}>
                <View style={GraphsStyles.successCircle} />
                <Text style={{color: '#0B0B0B', fontWeight: 'bold'}}>
                  {' '}
                  Bir arkadasinla kos
                </Text>
              </View>
              <View style={GraphsStyles.taskRow}>
                <View
                  style={[
                    GraphsStyles.successCircle,
                    {backgroundColor: '#eb008d'},
                  ]}>
                  <FIcon.Check style={{width: 10, height: 10, color: '#FFF'}} />
                </View>
                <Text
                  style={{
                    color: '#0B0B0B',
                    textDecorationLine: 'line-through',
                  }}>
                  {' '}
                  1km kos
                </Text>
              </View>
              <View style={GraphsStyles.taskRow}>
                <View
                  style={[
                    GraphsStyles.successCircle,
                    {backgroundColor: '#eb008d'},
                  ]}>
                  <FIcon.Check style={{width: 10, height: 10, color: '#FFF'}} />
                </View>
                <Text
                  style={{
                    color: '#0B0B0B',
                    textDecorationLine: 'line-through',
                  }}>
                  {' '}
                  Nefes egzersizi yap
                </Text>
              </View>

              <View style={[GraphsStyles.taskRow]}>
                <View style={GraphsStyles.smallCircle} />
                <View style={GraphsStyles.smallCircle} />
                <View style={GraphsStyles.smallCircle} />
              </View>
            </Card>

            <View style={styles.divider} />

            <Card style={styles.card}>
              <Text category="h4" style={styles.titleTextMedium}>
                Bu Ay Tamamladigin Kosular
              </Text>
              <LineChart
                data={{
                  labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
                  datasets: [
                    {
                      data: [1000, 1200, 1400, 1600, 1800, 2000, 1500, 1700],
                    },
                  ],
                }}
                width={310} // from react-native
                height={220}
                yAxisLabel=""
                yAxisSuffix="m"
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                  backgroundColor: '#FFD6D9',
                  backgroundGradientFrom: '#FF708D',
                  backgroundGradientTo: '#DB2C66',
                  decimalPlaces: 0, // optional, defaults to 2dp
                  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  labelColor: (opacity = 1) =>
                    `rgba(255, 255, 255, ${opacity})`,
                  style: {
                    borderRadius: 16,
                  },
                  propsForDots: {
                    r: '6',
                    strokeWidth: '2',
                    stroke: '#ffa726',
                  },
                }}
                bezier
                style={{
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 16,
                }}
              />
            </Card>

            <View style={styles.divider} />

            <Card style={styles.card}>
              <Text category="h4" style={styles.titleTextMedium}>
                Dayanikligin
              </Text>
              <OurProgressChart />
            </Card>
            <View style={{height: 75}} />
          </ScrollView>

          {/*
                            <Text category={'h5'} style={{textAlign: 'center'}}>
                                Lütfen bir bankanın API'ile bağlantı kurun.
                            </Text>*/}
        </Layout>
      </SafeAreaView>
    );
  }
}

const GraphsStyles = StyleSheet.create({
  listContainer: {
    flex: 1,
    width: '100%',
  },
  sectionTitle: {
    textAlign: 'center',
  },
  successCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFF',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,

    marginRight: 16,

    alignItems: 'center',
    justifyContent: 'center',
  },

  taskRow: {flexDirection: 'row', alignItems: 'center', marginTop: 16},

  smallCircle: {
    backgroundColor: '#7F7F7F',
    width: 10,
    height: 10,
    borderRadius: 5,
    margin: 8,
  },
});
