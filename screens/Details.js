import React from "react";
import { LinearGradient, View, Text, ScrollView } from "react-native";
import { Header, ListItem } from "react-native-elements";
import { SliderBox } from "react-native-image-slider-box";
import TouchableScale from "react-native-touchable-scale";
class Details extends React.Component {
  state = {};
  render() {
    return (
      <View >
          <View style={{ backgroundColor: "ghostwhite" }}>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Header
            leftComponent={{ icon: "home", color: "#fff" }}
            centerComponent={{
              text: "Details",
              style: { fontWeight: "bold", color: "#fff" }
            }}
          />
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontWeight: "bold", fontSize: 30 }}>
            Match History
          </Text>
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
        </ScrollView>
        </View>
      </View>
    );
  }
}

export default Details;
