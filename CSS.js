import React from 'react';

import {
    StyleSheet,
    Dimensions
} from 'react-native';

var header = 65;
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;
var hHeight = Dimensions.get('window').height-header;

var css = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: header
    },
    fill: {
        flex: 1
    },
    thumb: {
        width: hHeight*0.2,
        height: hHeight*0.2
    },
    image: {
        height: 300,
        width: 300
    },
    oneHalf: {
        height: hHeight*0.5
    },
    oneThird: {
        height: hHeight*0.3333
    },
    oneFourth: {
        height: hHeight*0.25
    },
    oneTenth: {
        height: hHeight*0.10
    },
    twoThirds: {
        height: hHeight*0.6667
    },
    oneFifth: {
        height: hHeight*0.2
    },
    twoFifths: {
        height: hHeight*0.4
    },
    threeFifths: {
        height: hHeight*0.6
    },
    fourFifths: {
        height: hHeight*0.8
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    spad: {
        padding: 10
    },
    mpad: {
        padding: 20
    },
    lpad: {
        padding: 30
    },
    vCenter: {
        justifyContent: 'center'
    },
    hCenter: {
        alignItems: 'center'
    },
    textContainer: {
        flexDirection: 'column'
    },
    rowContainer: {
        flexDirection: 'row'
    },
    separator: {
        height: 1,
        backgroundColor: '#dddddd'
    },
    h1: {
        fontSize: 34
    },
    h2: {
        fontSize: 24
    },
    h3: {
        fontSize: 20
    },
    h4: {
        fontSize: 16
    },
    skyblue: {
        color: '#48BBEC'
    },
    black: {
        color: '#000000'
    },
    white: {
        color: '#FFFFFF'
    },
    gray: {
        color: '#656565'
    },
    bkGray: {
        backgroundColor: '#656565'
    },
    bold: {
        fontWeight: 'bold'
    }
});

module.exports = css;