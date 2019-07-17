import React from "react";
import {View, StyleSheet} from "react-native";
import ListItem from "../ListItem/ListItem";

const PlaceList = props => {
    const placesOutput = props.places.map((place, i) => (
        <ListItem key={i} placeName={place} onItemPressed={ () => alert("Item Pressed")}/>
    ));
    return (
        <View style={styles.listContainer}>
            {placesOutput}
        </View>
    );
};

const styles = StyleSheet.create({
    listContainer: {
        width: "100%"
    }
});

export default PlaceList;