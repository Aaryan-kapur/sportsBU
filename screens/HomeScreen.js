import * as WebBrowser from "expo-web-browser";
import { Header, ListItem, Icon } from "react-native-elements";

import { SliderBox } from "react-native-image-slider-box";
import TouchableScale from "react-native-touchable-scale";
// import LinearGradient from "react-native-linear-gradient";
import React from "react";
import { LinearGradient, View, Text, ScrollView } from "react-native";

const TabIcon = props => (
  <Icon name="md-home" size={35} type="ionicon"/>
);

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    tabBarIcon: TabIcon
  };

  state = {
    images: [
      "https://source.unsplash.com/1024x768/?nature",
      "https://source.unsplash.com/1024x768/?water",
      "https://source.unsplash.com/1024x768/?water",
      "https://source.unsplash.com/1024x768/?water",
      "https://source.unsplash.com/1024x768/?girl",
      "https://source.unsplash.com/1024x768/?tree"
    ]
  };
  render() {
    return (
      <View>
        <View>
          <Header
            centerComponent={{
              text: "Sports BU",
              style: { fontWeight: "bold", color: "#fff" }
            }}
          />
          <SliderBox images={this.state.images} />
        </View>
        <ScrollView>
          <Text style={{ marginTop: 10, fontWeight: "bold" }}>Match A</Text>
          <ListItem
            style={{ marginTop: 10 }}
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
            titleStyle={{ color: "white", fontWeight: "bold", fontSize: 40 }}
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
          <Text style={{ marginTop: 10, fontWeight: "bold" }}>Match A</Text>
          <ListItem
            style={{ marginTop: 10 }}
            Component={TouchableScale}
            friction={90} //
            tension={100} // These props are passed to the parent component (here TouchableScale)
            activeScale={0.95} //
            linearGradientProps={{
              colors: ["#12c2e9", "#4A00E0"],
              start: [1, 0],
              end: [0.2, 0]
            }}
            ViewComponent={LinearGradient} // Only if no expo
            leftAvatar={{ rounded: true }}
            title="0"
            subtitle="Team A"
            titleStyle={{ color: "white", fontWeight: "bold", fontSize: 40 }}
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
          <Text style={{ marginTop: 10, fontWeight: "bold" }}>Match A</Text>
          <ListItem
            style={{ marginTop: 10 }}
            Component={TouchableScale}
            friction={90} //
            tension={100} // These props are passed to the parent component (here TouchableScale)
            activeScale={0.95} //
            linearGradientProps={{
              colors: ["#bc4e9c", "#f80759"],
              start: [1, 0],
              end: [0.2, 0]
            }}
            ViewComponent={LinearGradient} // Only if no expo
            leftAvatar={{ rounded: true }}
            title="0"
            subtitle="Team A"
            titleStyle={{ color: "white", fontWeight: "bold", fontSize: 40 }}
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
          <Text style={{ marginTop: 10, fontWeight: "bold" }}>Match A</Text>
          <ListItem
            style={{ marginTop: 10 }}
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
            titleStyle={{ color: "white", fontWeight: "bold", fontSize: 40 }}
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
        </ScrollView>
      </View>
    );
  }
}
