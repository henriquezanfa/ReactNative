import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card'
import CardSection from './CardSection'
import Button from './Button'

const AlbumDetail = ({ album, children }) => {
    const { title, artist, image, thumbnail_image, url } = album;
    const {
        headerContentSyle,
        headerTextStyle,
        thumbnailStyle,
        thumbnailContainerStyle,
        imageStyle
    } = styles;

    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image
                        style={thumbnailStyle}
                        source={{ uri: thumbnail_image }}
                    />
                </View>
                <View style={headerContentSyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image
                    source={{ uri: image }}
                    style={imageStyle}
                />
            </CardSection>

            <CardSection>
                <Button onPress={() => Linking.openURL(url)} >
                    Buy Now
                </Button>
            </CardSection>
        </Card>
    );
};

const styles = {
    headerContentSyle: {
        flexDirections: 'column',
        justifyContent: 'space-around',
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null,
    }
};

export default AlbumDetail;