// import libs for making components
import React from 'react';
import { Text, View } from 'react-native';

// make component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#d0b783',
    justifyContent: 'center',
    alignItems: 'center',
    height: 120,
    paddingTop: 30,
    shadowColor: '#e5c3c6',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    elevation: 2,
    position: 'relative'
  },

  textStyle: {
    fontSize: 40
  }
};

// make component available to other areas in app
export default Header;
