import React from "react";
import PropTypes from "prop-types";
import {View} from "react-native";
import styles from "./styles.js";
import ListFilter from "./ListFilter.js";
import ListSort from "./ListSort.js";

export default function ListControls( {onFilter, onSort, asc} ) {
    return (
        <View style={styles.controls}>
            <ListFilter onFilter={onFilter} />
            <ListSort onSort={onSort} asc={asc}/>
        </View>
    )
}

ListControls.PropTypes = {
    onFilter: PropTypes.func.isRequired,
    onSort: PropTypes.func.isRequired,
    asc: PropTypes.book.isRequired
}