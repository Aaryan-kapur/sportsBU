import React from "react";
import { LinearGradient, View, Text, ScrollView } from "react-native";
import {  ListItem, Icon } from "react-native-elements";
import { SliderBox } from "react-native-image-slider-box";
import TouchableScale from "react-native-touchable-scale";
import { Container,Header, Content, Tab, Tabs } from 'native-base';
import Tab1 from './tab1';
import Tab2 from './tab2';
import Tab3 from './tab3';
const TabIcon = props => (
  <Icon
    name="md-paper"
    type="ionicon"

    // size={35}
  />
);
const list = [
  {
    name: "Themes",
    subtitle: "News Content here we have lorem",

    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
  },
  {
    name: "Notifications",
    subtitle: "News Content here we have lorem",

    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"
  },
  {
    name: "Sound",
    subtitle: "News Content here we have lorem",

    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
  },
  {
    name: "Vibration",
    subtitle: "News Content here we have lorem",

    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"
  },
  {
    name: "Video Quality",
    subtitle: "News Content here we have lorem",

    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
  },
  {
    name: "Themes",
    subtitle: "News Content here we have lorem",

    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
  },
  {
    name: "Notifications",
    subtitle: "News Content here we have lorem",

    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"
  }
];
class News extends React.Component {
  static navigationOptions = {
    tabBarIcon: TabIcon
  };
  state = {};
  render() {
    return (
      <View>
          <Container>
        <Header hasTabs />
        <Tabs>
          <Tab heading="Tab1">
            <Tab1 />
          </Tab>
          <Tab heading="Tab2">
            <Tab2 />
          </Tab>
          <Tab heading="Tab3">
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
        <View>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Header
              centerComponent={{
                text: "News",
                style: { fontWeight: "bold", color: "#fff" }
              }}
            />
          </View>
          <ScrollView>
            <View style={{ alignItems: "center" }}>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 24,
                  borderBottomColor: "black",
                  borderBottomWidth: 2
                }}
              >
                Match History
              </Text>
            </View>
            <View>
              <Text style={{ marginTop: 5, fontWeight: "bold" }}>Match A</Text>
              <ListItem
                style={{ marginTop: 5 }}
                Component={TouchableScale}
                friction={90} //
                tension={100} // These props are passed to the parent component (here TouchableScale)
                activeScale={0.95} //
                linearGradientProps={{
                  colors: ["#FF9800", "#F44336"],
                  start: [1, 0],
                  end: [0.2, 0]
                }}
                ViewComponent={LinearGradient} // Only if no expo
                leftAvatar={{ rounded: true }}
                title="0"
                subtitle="Team A"
                titleStyle={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 40
                }}
                subtitleStyle={{ color: "white", fontWeight: "bold" }}
                rightTitle="0"
                rightSubtitle="Team B"
                rightTitleStyle={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 40
                }}
                rightSubtitleStyle={{ color: "white", fontWeight: "bold" }}
                rightAvatar={{ rounded: true }}
                leftElementStyle={{ color: "white", fontWeight: "bold" }}
              />

              <Text style={{ marginTop: 5, fontWeight: "bold" }}>Match A</Text>
              <ListItem
                style={{ marginTop: 5 }}
                Component={TouchableScale}
                friction={90} //
                tension={100} // These props are passed to the parent component (here TouchableScale)
                activeScale={0.95} //
                linearGradientProps={{
                  colors: ["#8E54E9", "#4776E6"],
                  start: [1, 0],
                  end: [0.2, 0]
                }}
                ViewComponent={LinearGradient} // Only if no expo
                leftAvatar={{ rounded: true }}
                title="0"
                subtitle="Team A"
                titleStyle={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 40
                }}
                subtitleStyle={{ color: "white", fontWeight: "bold" }}
                rightTitle="0"
                rightSubtitle="Team B"
                rightTitleStyle={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 40
                }}
                rightSubtitleStyle={{ color: "white", fontWeight: "bold" }}
                rightAvatar={{ rounded: true }}
                leftElementStyle={{ color: "white", fontWeight: "bold" }}
              />
              <Text style={{ marginTop: 5, fontWeight: "bold" }}>Match A</Text>
              <ListItem
                style={{ marginTop: 5 }}
                Component={TouchableScale}
                friction={90} //
                tension={100} // These props are passed to the parent component (here TouchableScale)
                activeScale={0.95} //
                linearGradientProps={{
                  colors: ["#FF9800", "#F44336"],
                  start: [1, 0],
                  end: [0.2, 0]
                }}
                ViewComponent={LinearGradient} // Only if no expo
                leftAvatar={{ rounded: true }}
                title="0"
                subtitle="Team A"
                titleStyle={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 40
                }}
                subtitleStyle={{ color: "white", fontWeight: "bold" }}
                rightTitle="0"
                rightSubtitle="Team B"
                rightTitleStyle={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 40
                }}
                rightSubtitleStyle={{ color: "white", fontWeight: "bold" }}
                rightAvatar={{ rounded: true }}
                leftElementStyle={{ color: "white", fontWeight: "bold" }}
              />
            </View>

            <View>
              <View style={{ alignItems: "center" }}>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 24,
                    marginTop: 10,
                    borderBottomColor: "black",
                    borderBottomWidth: 2
                  }}
                >
                  Event News
                </Text>
              </View>
              {list.map((l, i) => (
                <ListItem
                  key={i}
                  leftAvatar={{ source: { uri: l.avatar_url } }}
                  title={l.name}
                  subtitle={l.subtitle}
                  bottomDivider
                />
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default News;
