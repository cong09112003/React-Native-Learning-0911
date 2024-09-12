import React from "react";
import { FlatList, Image, ScrollView, Text, View } from "react-native";

const Demo2 = () => {
  const dataFake = [
    {
      id: 1,
      name: "minhtrang1",
      image:
        "https://scontent.fsgn2-8.fna.fbcdn.net/v/t1.6435-9/121792899_2766696150312849_8395100318522132687_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=dd6889&_nc_eui2=AeE5l6akkAEbx4xul8AU4STzbH97Y1xABytsf3tjXEAHKxoGocW14dc7t-IbDK4gHhaf9PDyv-Meu9tkWVay47Ml&_nc_ohc=i7DIUSGgzR8Q7kNvgH85CYh&_nc_ht=scontent.fsgn2-8.fna&oh=00_AYC27guYPVPhOEaLzhHa8PUdKchjcQjU6Djh1JdrB0RCTA&oe=67014BA4",
    },
    {
      id: 2,
      name: "minhtrang2",
      image:
        "https://scontent.fsgn2-8.fna.fbcdn.net/v/t1.6435-9/121792899_2766696150312849_8395100318522132687_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=dd6889&_nc_eui2=AeE5l6akkAEbx4xul8AU4STzbH97Y1xABytsf3tjXEAHKxoGocW14dc7t-IbDK4gHhaf9PDyv-Meu9tkWVay47Ml&_nc_ohc=i7DIUSGgzR8Q7kNvgH85CYh&_nc_ht=scontent.fsgn2-8.fna&oh=00_AYC27guYPVPhOEaLzhHa8PUdKchjcQjU6Djh1JdrB0RCTA&oe=67014BA4",
    },
    {
      id: 3,
      name: "minhtrang3",
      image:
        "https://scontent.fsgn2-8.fna.fbcdn.net/v/t1.6435-9/121792899_2766696150312849_8395100318522132687_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=dd6889&_nc_eui2=AeE5l6akkAEbx4xul8AU4STzbH97Y1xABytsf3tjXEAHKxoGocW14dc7t-IbDK4gHhaf9PDyv-Meu9tkWVay47Ml&_nc_ohc=i7DIUSGgzR8Q7kNvgH85CYh&_nc_ht=scontent.fsgn2-8.fna&oh=00_AYC27guYPVPhOEaLzhHa8PUdKchjcQjU6Djh1JdrB0RCTA&oe=67014BA4",
    },
    {
      id: 4,
      name: "minhtrang4",
      image:
        "https://scontent.fsgn2-8.fna.fbcdn.net/v/t1.6435-9/121792899_2766696150312849_8395100318522132687_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=dd6889&_nc_eui2=AeE5l6akkAEbx4xul8AU4STzbH97Y1xABytsf3tjXEAHKxoGocW14dc7t-IbDK4gHhaf9PDyv-Meu9tkWVay47Ml&_nc_ohc=i7DIUSGgzR8Q7kNvgH85CYh&_nc_ht=scontent.fsgn2-8.fna&oh=00_AYC27guYPVPhOEaLzhHa8PUdKchjcQjU6Djh1JdrB0RCTA&oe=67014BA4",
    },
  ];
  return (
    <>
      <Text style={{ backgroundColor: "red", padding: 10 }}>
        Demo Flat List
      </Text>
      <FlatList
        data={dataFake}
        renderItem={({ item }) => (
          <View style={{ margin: 15 }}>
            <Text>{item.name}</Text>
            <Image
              source={{ uri: item.image }}
              style={{ width: 200, height: 200 }}
            />
          </View>
        )}
      />
    </>
  );
};
export default Demo2;
