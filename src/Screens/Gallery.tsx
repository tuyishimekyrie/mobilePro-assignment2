import React, { useEffect, useState } from "react";
import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Modal,
} from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import * as ImagePicker from "react-native-image-picker";
import * as MediaLibrary from "expo-media-library";
import ImageViewer from "react-native-image-viewing";
import { MaterialIcons } from "@expo/vector-icons";

const App = () => {
  const [response, setResponse] = useState<any>(null);
  const [galleryContent, setGalleryContent] = useState<any>([]);
  const [visible, setVisible] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    (async () => {
      const permissionResponse = await MediaLibrary.requestPermissionsAsync();
      if (permissionResponse.granted) {
        const imagesData = await MediaLibrary.getAssetsAsync();
        console.log("Images Data:", imagesData); // Debugging
        const listOfGalleryContent = [];
        if (imagesData.assets) {
          for (let imageElt in imagesData.assets) {
            const imageInfo = await MediaLibrary.getAssetInfoAsync(
              imagesData.assets[imageElt]
            );
            console.log("Image Info:", imageInfo); // Debugging
            if (imageInfo.localUri) {
              const formatted = { uri: imageInfo.localUri };
              listOfGalleryContent.push(formatted);
            }
          }
        }
        console.log("Gallery Content:", listOfGalleryContent); // Debugging
        setGalleryContent(listOfGalleryContent);
      }
    })();
  }, []);

  const onButtonPress = React.useCallback((type: string, options: any) => {
    if (type === "capture") {
      ImagePicker.launchCamera(options, setResponse);
    } else {
      ImagePicker.launchImageLibrary(options, setResponse);
    }
  }, []);

  const takePhotoOptions = {
    title: "Take Photo",
    mediaType: "photo",
    includeBase64: false,
    includeExif: true,
    quality: 0.8,
    saveToPhotos: true,
    maxWidth: 1000,
    maxHeight: 1000,
    storageOptions: {
      skipBackup: true,
      path: "images",
    },
  };

  const accessGalleryOptions = {
    title: "Access Gallery",
    mediaType: "photo",
    includeBase64: false,
    includeExif: true,
    quality: 0.8,
    maxWidth: 1000,
    maxHeight: 1000,
  };

  const renderItem = ({ item, index }: { item: any; index: any }) => (
    <TouchableOpacity onPress={() => openImageViewer(index)}>
      <Image source={{ uri: item.uri }} style={styles.image} />
    </TouchableOpacity>
  );

  const openImageViewer = (index: any) => {
    setSelectedImageIndex(index);
    setVisible(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonItem}>
            <Button
              title="Take Photo"
              onPress={() => onButtonPress("capture", takePhotoOptions)}
            />
          </View>
          <View style={styles.buttonItem}>
            <Button
              title="Access Gallery"
              onPress={() => onButtonPress("library", accessGalleryOptions)}
            />
          </View>
        </View>
        <View style={styles.responseContainer}>
          <Text style={styles.responseText}>{response}</Text>
        </View>
        {galleryContent.length > 0 ? (
          <FlatList
            data={galleryContent}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            numColumns={2}
            contentContainerStyle={styles.imageGrid}
          />
        ) : (
          <Text>Loading...</Text>
        )}
        <Modal visible={visible} transparent={true}>
          <ImageViewer
            images={galleryContent}
            imageIndex={selectedImageIndex}
            presentationStyle="overFullScreen"
            onRequestClose={() => setVisible(false)}
            visible={true}
          />
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "aliceblue",
    paddingTop: 40,
  },
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    marginVertical: 8,
  },
  buttonItem: {
    marginVertical: 4,
  },
  responseContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  responseText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  imageContainer: {
    marginVertical: 24,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 150,
    aspectRatio: 1, // Maintain aspect ratio
    borderRadius: 6,
    margin: 5,
  },
  imageGrid: {
    justifyContent: "space-between",
    padding: 5,
  },
});

export default App;
