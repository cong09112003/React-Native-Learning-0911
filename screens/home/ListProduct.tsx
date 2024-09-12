import {
  View,
  Image,
  Text,
  StyleSheet,
  FlatList,
  AccessibilityInfo,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import NoteAddMore from "../components/NoteAddMore";
import { useEffect, useState } from "react";
import Waiting from "../Waiting";
import { useNavigation } from "@react-navigation/native";

const ListProduct = () => {
  // const listPro = [
  //   {
  //     id: 1,
  //     name: "Minh Trang 1",
  //     image:
  //       "https://scontent.fsgn2-11.fna.fbcdn.net/v/t31.18172-8/23736019_1894009477581525_8983091271394183622_o.jpg?_nc_cat=105&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeEB-u2HgpwE_zePsW5JPPt-RAXeiGRB5JxEBd6IZEHknEQLUOpJPiRheC2ZSDZTAwdmw82-eJK5vKtsQmRo8FJ7&_nc_ohc=QIXgaHmnmPcQ7kNvgGp3Qhw&_nc_ht=scontent.fsgn2-11.fna&oh=00_AYD4sujTlUXO3X0gnB2T55Bj-RonGZJP04zPVU_X3DIiAw&oe=6701EA3A",
  //   },
  //   {
  //     id: 2,
  //     name: "Minh Trang 2",
  //     image:
  //       "https://scontent.fsgn2-11.fna.fbcdn.net/v/t31.18172-8/23736019_1894009477581525_8983091271394183622_o.jpg?_nc_cat=105&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeEB-u2HgpwE_zePsW5JPPt-RAXeiGRB5JxEBd6IZEHknEQLUOpJPiRheC2ZSDZTAwdmw82-eJK5vKtsQmRo8FJ7&_nc_ohc=QIXgaHmnmPcQ7kNvgGp3Qhw&_nc_ht=scontent.fsgn2-11.fna&oh=00_AYD4sujTlUXO3X0gnB2T55Bj-RonGZJP04zPVU_X3DIiAw&oe=6701EA3A",
  //   },
  //   {
  //     id: 3,
  //     name: "Minh Trang 3",
  //     image:
  //       "https://scontent.fsgn2-11.fna.fbcdn.net/v/t31.18172-8/23736019_1894009477581525_8983091271394183622_o.jpg?_nc_cat=105&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeEB-u2HgpwE_zePsW5JPPt-RAXeiGRB5JxEBd6IZEHknEQLUOpJPiRheC2ZSDZTAwdmw82-eJK5vKtsQmRo8FJ7&_nc_ohc=QIXgaHmnmPcQ7kNvgGp3Qhw&_nc_ht=scontent.fsgn2-11.fna&oh=00_AYD4sujTlUXO3X0gnB2T55Bj-RonGZJP04zPVU_X3DIiAw&oe=6701EA3A",
  //   },
  //   {
  //     id: 4,
  //     name: "Minh Trang 4",
  //     image:
  //       "https://scontent.fsgn2-11.fna.fbcdn.net/v/t31.18172-8/23736019_1894009477581525_8983091271394183622_o.jpg?_nc_cat=105&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeEB-u2HgpwE_zePsW5JPPt-RAXeiGRB5JxEBd6IZEHknEQLUOpJPiRheC2ZSDZTAwdmw82-eJK5vKtsQmRo8FJ7&_nc_ohc=QIXgaHmnmPcQ7kNvgGp3Qhw&_nc_ht=scontent.fsgn2-11.fna&oh=00_AYD4sujTlUXO3X0gnB2T55Bj-RonGZJP04zPVU_X3DIiAw&oe=6701EA3A",
  //   },
  //   {
  //     id: 5,
  //     name: "Minh Trang 5",
  //     image:
  //       "https://scontent.fsgn2-11.fna.fbcdn.net/v/t31.18172-8/23736019_1894009477581525_8983091271394183622_o.jpg?_nc_cat=105&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeEB-u2HgpwE_zePsW5JPPt-RAXeiGRB5JxEBd6IZEHknEQLUOpJPiRheC2ZSDZTAwdmw82-eJK5vKtsQmRo8FJ7&_nc_ohc=QIXgaHmnmPcQ7kNvgGp3Qhw&_nc_ht=scontent.fsgn2-11.fna&oh=00_AYD4sujTlUXO3X0gnB2T55Bj-RonGZJP04zPVU_X3DIiAw&oe=6701EA3A",
  //   },
  //   {
  //     id: 6,
  //     name: "Minh Trang 6",
  //     image:
  //       "https://scontent.fsgn2-11.fna.fbcdn.net/v/t31.18172-8/23736019_1894009477581525_8983091271394183622_o.jpg?_nc_cat=105&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeEB-u2HgpwE_zePsW5JPPt-RAXeiGRB5JxEBd6IZEHknEQLUOpJPiRheC2ZSDZTAwdmw82-eJK5vKtsQmRo8FJ7&_nc_ohc=QIXgaHmnmPcQ7kNvgGp3Qhw&_nc_ht=scontent.fsgn2-11.fna&oh=00_AYD4sujTlUXO3X0gnB2T55Bj-RonGZJP04zPVU_X3DIiAw&oe=6701EA3A",
  //   },
  //   {
  //     id: 7,
  //     name: "Minh Trang 7",
  //     image:
  //       "https://scontent.fsgn2-11.fna.fbcdn.net/v/t31.18172-8/23736019_1894009477581525_8983091271394183622_o.jpg?_nc_cat=105&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeEB-u2HgpwE_zePsW5JPPt-RAXeiGRB5JxEBd6IZEHknEQLUOpJPiRheC2ZSDZTAwdmw82-eJK5vKtsQmRo8FJ7&_nc_ohc=QIXgaHmnmPcQ7kNvgGp3Qhw&_nc_ht=scontent.fsgn2-11.fna&oh=00_AYD4sujTlUXO3X0gnB2T55Bj-RonGZJP04zPVU_X3DIiAw&oe=6701EA3A",
  //   },
  //   {
  //     id: 8,
  //     name: "Minh Trang 8",
  //     image:
  //       "https://scontent.fsgn2-11.fna.fbcdn.net/v/t1.6435-9/122052426_2764665167182614_3990806484983398729_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeFl4tjTp7eO2hVn0dbXR2u-kO3_bVLjxcyQ7f9tUuPFzGDfuMxwzZUx_7RCz0E8UDLC3OwxTtky2H1BuiBsNz9_&_nc_ohc=Jl_kD8npYasQ7kNvgE4mObG&_nc_ht=scontent.fsgn2-11.fna&_nc_gid=Am8pA6cWUsKB450othWwKCU&oh=00_AYBs8RofV90NPk8u-LPJOg0zRER7V8Vh-YkJ1DVukDBkeg&oe=6701F03F",
  //   },
  //   {
  //     id: 9,
  //     name: "Minh Trang 9",
  //     image:
  //       "https://scontent.fsgn2-11.fna.fbcdn.net/v/t31.18172-8/23736019_1894009477581525_8983091271394183622_o.jpg?_nc_cat=105&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeEB-u2HgpwE_zePsW5JPPt-RAXeiGRB5JxEBd6IZEHknEQLUOpJPiRheC2ZSDZTAwdmw82-eJK5vKtsQmRo8FJ7&_nc_ohc=QIXgaHmnmPcQ7kNvgGp3Qhw&_nc_ht=scontent.fsgn2-11.fna&oh=00_AYD4sujTlUXO3X0gnB2T55Bj-RonGZJP04zPVU_X3DIiAw&oe=6701EA3A",
  //   },
  //   {
  //     id: 10,
  //     name: "Minh Trang 10",
  //     image:
  //       "https://scontent.fsgn2-11.fna.fbcdn.net/v/t31.18172-8/23736019_1894009477581525_8983091271394183622_o.jpg?_nc_cat=105&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeEB-u2HgpwE_zePsW5JPPt-RAXeiGRB5JxEBd6IZEHknEQLUOpJPiRheC2ZSDZTAwdmw82-eJK5vKtsQmRo8FJ7&_nc_ohc=QIXgaHmnmPcQ7kNvgGp3Qhw&_nc_ht=scontent.fsgn2-11.fna&oh=00_AYD4sujTlUXO3X0gnB2T55Bj-RonGZJP04zPVU_X3DIiAw&oe=6701EA3A",
  //   },
  //   {
  //     id: 11,
  //     name: "Minh Trang 11",
  //     image:
  //       "https://scontent.fsgn2-11.fna.fbcdn.net/v/t31.18172-8/23736019_1894009477581525_8983091271394183622_o.jpg?_nc_cat=105&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeEB-u2HgpwE_zePsW5JPPt-RAXeiGRB5JxEBd6IZEHknEQLUOpJPiRheC2ZSDZTAwdmw82-eJK5vKtsQmRo8FJ7&_nc_ohc=QIXgaHmnmPcQ7kNvgGp3Qhw&_nc_ht=scontent.fsgn2-11.fna&oh=00_AYD4sujTlUXO3X0gnB2T55Bj-RonGZJP04zPVU_X3DIiAw&oe=6701EA3A",
  //   },
  // ];
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation();
  // const getApi = () => {
  //   return fetch("https://66db1fe0f47a05d55be72411.mockapi.io/games")
  //     .then((response) => response.json().then((data) => setGames(data)))
  //     .catch((err) => console.log(err));
  // };

  const getApi = async () => {
    try {
      const response = await fetch(
        "https://66db1fe0f47a05d55be72411.mockapi.io/games"
      );
      const data = await response.json();
      setGames(data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  // const getAPI = async () => {}
  useEffect(() => {
    getApi();
  }, []);

  return (
    <>
      <NoteAddMore tile="Products" />
      <View style={{ backgroundColor: "rgba(240, 240, 240,0.2)" }}>
        {/* {listPro.map((item) => {
          return (
            <View style={styles.item}>
              <Image style={styles.photoItem} source={{ uri: item.image }} />
              <View style={styles.descriptionItem}>
                <Text style={styles.desText}>{item.name}</Text>
              </View>
              <View style={styles.saleItem}>
                <Text style={{ color: "white", fontSize: 10 }}>Sales 30%</Text>
              </View>
            </View>
          );
        })} */}

        {/* {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={games}
            scrollEnabled={false}
            numColumns={2}
            columnWrapperStyle={styles.row}
            renderItem={({ item }: any) => (
              <View style={styles.item}>
                <Image
                  style={styles.photoItem}
                  source={require("../../assets/minhtrang.jpg")}
                />
                <View style={styles.descriptionItem}>
                  <Text style={styles.desText}>{item.name}</Text>
                </View>
                <View style={styles.saleItem}>
                  <Text
                    style={{
                      color: "white",
                      fontSize: 10,
                      textAlign: "center",
                      padding: 7,
                    }}
                  >
                    Sales 30%
                  </Text>
                </View>
              </View>
            )}
          /> 
        )}*/}

        {isLoading ? (
          <Waiting />
        ) : (
          <FlatList
            data={games}
            scrollEnabled={false}
            numColumns={2}
            columnWrapperStyle={styles.row}
            renderItem={({ item }: any) => (
              <View style={styles.item}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("DetailItem", { item });
                  }}
                >
                  <Image
                    style={styles.photoItem}
                    source={require("../../assets/minhtrang.jpg")}
                  />
                </TouchableOpacity>

                {/* <View style={styles.descriptionItem}>
                  <Text style={styles.desText}>{item.name}</Text>
                </View> */}
                <View style={styles.saleItem}>
                  <Text
                    style={{
                      color: "yellow",
                      textAlign: "center",
                    }}
                  >
                    30%
                  </Text>
                  <Text
                    style={{
                      color: "white",
                      textAlign: "center",
                      fontWeight: "bold",
                    }}
                  >
                    sales
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: 10,
                  }}
                >
                  <View>
                    <Text style={{ color: "black", paddingBottom: 15 }}>
                      {item.name}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text style={{ color: "#e21f6d" }}>đ30.000</Text>
                    <Text>Selled : 20</Text>
                  </View>
                </View>
              </View>
            )}
          />
        )}
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
    width: "100%",
    height: 150,
    // zIndex: 100,
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
    top: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: "column",
  },
  item: {
    marginBottom: 10,
    width: "45%",
    // borderWidth: 1,
    backgroundColor: "#fff",
  },
  row: {
    flex: 1,
    justifyContent: "space-between",
  },
});

export default ListProduct;
