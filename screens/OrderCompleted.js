import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import LottieView from "lottie-react-native";
import firebase from "../firebase";
import MenuItems from "../components/restaurantDetail/MenuItems";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function OrderCompleted({ navigation }) {
  const [lastOrder, setLastOrder] = useState({
    items: [
      {
        id: 1,
        title: "Bologna",
        description: "With butter lettuce, tomato and sauce bechamel",
        price: "$13.50",
        image:
          "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
      },
    ],
  });

  const { items, restaurantName } = useSelector(
    (state) => state.cartReducer.selectedItems
  );

  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });

  // useEffect(() => {
  //   const db = firebase.firestore();
  //   const unsubscribe = db
  //     .collection("orders")
  //     .orderBy("id", "desc")
  //     .limit(1)
  //     .onSnapshot((snapshot) => {
  //       snapshot.docs.map((doc) => {
  //         setLastOrder(doc.data());
  //       });
  //     });

  //   return () => unsubscribe();
  // }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      {/* green checkmark */}
      <View
        style={{
          margin: 15,
          alignItems: "center",
          height: "100%",
        }}
      >
        <LottieView
          style={{ height: 100, alignSelf: "center", marginBottom: 30 }}
          source={require("../assets/animations/check-mark.json")}
          autoPlay
          speed={0.5}
          loop={false}
        />
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Your order at {restaurantName} has been placed for {totalUSD}
        </Text>

        <ScrollView>
        <LottieView
            style={{ height: 200, alignSelf: "center" }}
            source={require("../assets/animations/cooking.json")}
            autoPlay
            speed={0.5}
          />
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Text
              style={{
                position:"relative",
                fontSize: 20,
                fontWeight: "bold",
                color: "#00a680",
                textAlign: "center",
                marginTop: 10,
                zIndex:1,
               // marginBottom:30,
              }}
            >
              Take me Home
            </Text>
          </TouchableOpacity>
          <MenuItems
            foods={items}
            hideCheckbox={true}
            marginLeft={10}
          />
          
          {/*  ------------------------------- Home start -------------------------------  */}
          
          {/*  ------------------------------- Home end -------------------------------  */}

        
          <Text></Text>
          </ScrollView>
      </View>
    </SafeAreaView>
  );
}
