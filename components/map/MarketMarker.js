import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image, StyleSheet, Text, View } from 'react-native';
import { MapView } from 'expo';

import Icon from 'react-native-vector-icons/FontAwesome';

import distance from '../../utils/distance';

export default class MarketMarker extends Component {

    render() {
        const market = this.props.market;

        let distanceText = '';
        if (this.props.userLocation) {
            distanceText = (<View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Icon name="location-arrow" size={10} color="#000" />
                    <Text style={{ marginLeft: 2, fontSize: 10, backgroundColor: 'white' }}>
                        {
                            (distance(
                                market.coordinates,
                                this.props.userLocation,
                                'K'
                            ) * 1000).toString().split('.')[0]
                        }m
                    </Text>
                </View>
            </View>);
        }

        return (
            <MapView.Marker
                coordinate={market.coordinates}
                style={styles.marker}
            >

                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Image
                        source={{uri: market.image}}
                        style={styles.markerImage}
                    />
                </View>

                <View>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
                        <Text>{market.name}</Text>
                    </View>
                    {distanceText}
                </View>

            </MapView.Marker>
        );
    }

    static propTypes = {
        market: PropTypes.object.isRequired,
        userLocation: PropTypes.object,
    }

}

const styles = StyleSheet.create({
    markerImage: {
        borderRadius: 25,
        borderColor: '#000',
        borderWidth: 1,
        width: 50,
        height: 50,
    },
});
