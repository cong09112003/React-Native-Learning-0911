import { View, Image, Text, StyleSheet } from "react-native";
import NoteAddMore from "../components/NoteAddMore";

const ListProduct = () => {
  return (
    <>
      <NoteAddMore tile="Products" />
      <View style={styles.container}>
        <View>
          <Image
            style={styles.photoItem}
            source={require("../../assets/minhtrang.jpg")}
          />
          <View style={styles.descriptionItem}>
            <Text style={styles.desText}>News 01</Text>
          </View>
          <View style={styles.saleItem}>
            <Text style={{ color: "white", fontSize: 10 }}>Sales 30%</Text>
          </View>
        </View>

        <View>
          <Image
            style={styles.photoItem}
            source={require("../../assets/minhtrangbeauti.jpg")}
          />
          <View style={styles.descriptionItem}>
            <Text style={styles.desText}>News 01</Text>
          </View>
        </View>

        <View>
          <Image
            style={styles.photoItem}
            source={require("../../assets/minhtrangAus.jpg")}
          />
          <View style={styles.descriptionItem}>
            <Text style={styles.desText}>News 01</Text>
          </View>
        </View>

        <View>
          <Image
            style={styles.photoItem}
            source={require("../../assets/minhtrang60.jpg")}
          />
          <View style={styles.descriptionItem}>
            <Text style={styles.desText}>News 01</Text>
          </View>
        </View>

        <View>
          <Image
            style={styles.photoItem}
            source={require("../../assets/news.png")}
          />
          <View style={styles.descriptionItem}>
            <Text style={styles.desText}>News 01</Text>
          </View>
        </View>

        <View>
          <Image
            style={styles.photoItem}
            source={require("../../assets/news.png")}
          />
          <View style={styles.descriptionItem}>
            <Text style={styles.desText}>News 01</Text>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  photoItem: {
    width: 150,
    height: 150,
    zIndex: 100,
  },
  descriptionItem: {
    backgroundColor: "black",
    paddingVertical: 10,
  },
  desText: {
    color: "white",
    textAlign: "center",
  },
  saleItem: {
    backgroundColor: "rgba(0,0,0,0.7)",
    width: 60,
    height: 60,
    position: "absolute",
    padding: 7,
    top: 10,
    right: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
});

export default ListProduct;
