import React, { useState, useEffect, useCallback } from "react";
import { Entypo } from "@expo/vector-icons";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  RefreshControl,
  Alert,
  Pressable,
} from "react-native";
import AddData from "./AddData";

export default function MonthData({ month }) {
  const [refreshing, setRefreshing] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <View style={styles.container}>
      <View style={styles.addButton}>
        <Entypo
          name="add-to-list"
          size={24}
          color={"black"}
          onPress={openModal}
        />
      </View>
      <ScrollView
        style={styles.main}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.item}>
          <View style={styles.itemDate}>
            <Text
              style={{
                fontSize: 20,
                color: "white",
                fontWeight: "bold",
                alignSelf: "center",
              }}
            >
              Monday, January 1st, 2023
            </Text>
            <Entypo
              name="circle-with-minus"
              size={24}
              color={"black"}
              onPress={() => Alert.alert("Remove Info")}
            />
          </View>
          <View style={styles.itemLabels}>
            <Text style={styles.columnOne}>Title</Text>
            <Text style={styles.columnTwo}>Amount</Text>
            <Text style={styles.columnThree}>Total</Text>
          </View>
          <Pressable onPress={() => Alert.alert("Selected Info")}>
            <View style={styles.itemInfo}>
              <Text style={styles.columnOne}>Target for supplies</Text>
              <Text style={styles.columnTwo}>$20.00</Text>
              <Text style={styles.columnThree}>$119,980.00</Text>
            </View>
          </Pressable>
        </View>
      </ScrollView>
      <AddData visible={modalIsOpen} close={closeModal} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "70%",
    flexDirection: "column",
    padding: 10,
  },
  main: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
  },
  addButton: {
    marginBottom: 10,
  },
  item: {
    height: 90,
    justifyContent: "space-between",
    marginBottom: 5,
    // borderColor: "black",
    // borderBottomWidth: 2,
    // borderTopWidth: 2,
    // borderRightWidth: 2,
    // borderLeftWidth: 2,
  },
  itemDate: {
    padding: 5,
    backgroundColor: "#3E859A",
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "black",
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderLeftWidth: 2,
  },
  itemLabels: {
    padding: 5,
    flexDirection: "row",
    borderColor: "black",
    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderLeftWidth: 2,
  },
  itemInfo: {
    padding: 5,
    flexDirection: "row",
    borderColor: "black",
    borderBottomWidth: 2,
    borderRightWidth: 2,
    borderLeftWidth: 2,
  },
  columnOne: {
    width: "60%",
  },
  columnTwo: {
    width: "20%",
  },
  columnThree: {
    width: "20%",
  },
});
