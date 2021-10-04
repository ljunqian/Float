import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, Platform, StyleSheet, Button, TouchableHighlightBase, Model } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import moment from 'moment';
import { ShowThreadMessageInChannelButtonWithContext } from 'stream-chat-react-native-core';

const CustomDatePicker = (props) => {
    const { textStyle } = props;
    const [email, setEmail] = useState();
    return (
        <TouchableOpacity
            activeOpacoty={0}
            onPress={() => console.log('Pressed')}>
            <Text style={textStyle}>{moment().format('YYYY-MM-DD')}</Text>

        </TouchableOpacity>
    )
};

CustomDatePicker.defaultProps = {
    textStyle: {}
};

export default CustomDatePicker;