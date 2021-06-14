import React from "react";
import PropTypes from "prop-types";
import {View, TextInput} from "react-native";
import styles from "./styles.js";

export default function ListFilter ( {onFilter} ) {
    return (
        <View>
            <TextInput 
              autoFocus
              placeholder="Search"
              style={styles.filter}
              onChangeText={onFilter}
            />
        </View>
    );
}

ListFilter.PropTypes = {
    onFilter: PropTypes.func.isRequired
};