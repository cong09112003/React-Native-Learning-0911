import React from "react";
import { Image, SectionList, StyleSheet, Text, View } from "react-native";

const NYC = () => {
  const dataFake = [
    {
      title: "A",
      data: [
        {
          id: 1,
          name: "Ánh",
          image:
            "https://scontent.fsgn2-11.fna.fbcdn.net/v/t31.18172-8/23736019_1894009477581525_8983091271394183622_o.jpg?_nc_cat=105&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeEB-u2HgpwE_zePsW5JPPt-RAXeiGRB5JxEBd6IZEHknEQLUOpJPiRheC2ZSDZTAwdmw82-eJK5vKtsQmRo8FJ7&_nc_ohc=QIXgaHmnmPcQ7kNvgFy9Nmp&_nc_ht=scontent.fsgn2-11.fna&oh=00_AYCYFRO3BJ98H10ZOvY89UMoJIGcZo90_7NzTq_YS1FA-A&oe=6701417A",
        },
        {
          id: 2,
          name: "Ân",
          image:
            "https://scontent.fsgn2-11.fna.fbcdn.net/v/t31.18172-8/23736019_1894009477581525_8983091271394183622_o.jpg?_nc_cat=105&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeEB-u2HgpwE_zePsW5JPPt-RAXeiGRB5JxEBd6IZEHknEQLUOpJPiRheC2ZSDZTAwdmw82-eJK5vKtsQmRo8FJ7&_nc_ohc=QIXgaHmnmPcQ7kNvgFy9Nmp&_nc_ht=scontent.fsgn2-11.fna&oh=00_AYCYFRO3BJ98H10ZOvY89UMoJIGcZo90_7NzTq_YS1FA-A&oe=6701417A",
        },
      ],
    },
    {
      title: "B",
      data: [
        {
          id: 3,
          name: "Bích",
          image:
            "https://scontent.fsgn2-11.fna.fbcdn.net/v/t31.18172-8/23736019_1894009477581525_8983091271394183622_o.jpg?_nc_cat=105&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeEB-u2HgpwE_zePsW5JPPt-RAXeiGRB5JxEBd6IZEHknEQLUOpJPiRheC2ZSDZTAwdmw82-eJK5vKtsQmRo8FJ7&_nc_ohc=QIXgaHmnmPcQ7kNvgFy9Nmp&_nc_ht=scontent.fsgn2-11.fna&oh=00_AYCYFRO3BJ98H10ZOvY89UMoJIGcZo90_7NzTq_YS1FA-A&oe=6701417A",
        },
        {
          id: 4,
          name: "Bông",
          image:
            "https://scontent.fsgn2-11.fna.fbcdn.net/v/t31.18172-8/23736019_1894009477581525_8983091271394183622_o.jpg?_nc_cat=105&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeEB-u2HgpwE_zePsW5JPPt-RAXeiGRB5JxEBd6IZEHknEQLUOpJPiRheC2ZSDZTAwdmw82-eJK5vKtsQmRo8FJ7&_nc_ohc=QIXgaHmnmPcQ7kNvgFy9Nmp&_nc_ht=scontent.fsgn2-11.fna&oh=00_AYCYFRO3BJ98H10ZOvY89UMoJIGcZo90_7NzTq_YS1FA-A&oe=6701417A",
        },
        {
          id: 5,
          name: "Băng",
          image:
            "https://scontent.fsgn2-11.fna.fbcdn.net/v/t31.18172-8/23736019_1894009477581525_8983091271394183622_o.jpg?_nc_cat=105&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeEB-u2HgpwE_zePsW5JPPt-RAXeiGRB5JxEBd6IZEHknEQLUOpJPiRheC2ZSDZTAwdmw82-eJK5vKtsQmRo8FJ7&_nc_ohc=QIXgaHmnmPcQ7kNvgFy9Nmp&_nc_ht=scontent.fsgn2-11.fna&oh=00_AYCYFRO3BJ98H10ZOvY89UMoJIGcZo90_7NzTq_YS1FA-A&oe=6701417A",
        },
        {
          id: 6,
          name: "Bống",
          image:
            "https://scontent.fsgn2-11.fna.fbcdn.net/v/t31.18172-8/23736019_1894009477581525_8983091271394183622_o.jpg?_nc_cat=105&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeEB-u2HgpwE_zePsW5JPPt-RAXeiGRB5JxEBd6IZEHknEQLUOpJPiRheC2ZSDZTAwdmw82-eJK5vKtsQmRo8FJ7&_nc_ohc=QIXgaHmnmPcQ7kNvgFy9Nmp&_nc_ht=scontent.fsgn2-11.fna&oh=00_AYCYFRO3BJ98H10ZOvY89UMoJIGcZo90_7NzTq_YS1FA-A&oe=6701417A",
        },
      ],
    },
    {
      title: "C",
      data: [
        {
          id: 7,
          name: "Châu",
          image:
            "https://scontent.fsgn2-11.fna.fbcdn.net/v/t31.18172-8/23736019_1894009477581525_8983091271394183622_o.jpg?_nc_cat=105&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeEB-u2HgpwE_zePsW5JPPt-RAXeiGRB5JxEBd6IZEHknEQLUOpJPiRheC2ZSDZTAwdmw82-eJK5vKtsQmRo8FJ7&_nc_ohc=QIXgaHmnmPcQ7kNvgFy9Nmp&_nc_ht=scontent.fsgn2-11.fna&oh=00_AYCYFRO3BJ98H10ZOvY89UMoJIGcZo90_7NzTq_YS1FA-A&oe=6701417A",
        },
        {
          id: 8,
          name: "Chi",
          image:
            "https://scontent.fsgn2-11.fna.fbcdn.net/v/t31.18172-8/23736019_1894009477581525_8983091271394183622_o.jpg?_nc_cat=105&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeEB-u2HgpwE_zePsW5JPPt-RAXeiGRB5JxEBd6IZEHknEQLUOpJPiRheC2ZSDZTAwdmw82-eJK5vKtsQmRo8FJ7&_nc_ohc=QIXgaHmnmPcQ7kNvgFy9Nmp&_nc_ht=scontent.fsgn2-11.fna&oh=00_AYCYFRO3BJ98H10ZOvY89UMoJIGcZo90_7NzTq_YS1FA-A&oe=6701417A",
        },
        {
          id: 9,
          name: "Châm",
          image:
            "https://scontent.fsgn2-11.fna.fbcdn.net/v/t31.18172-8/23736019_1894009477581525_8983091271394183622_o.jpg?_nc_cat=105&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeEB-u2HgpwE_zePsW5JPPt-RAXeiGRB5JxEBd6IZEHknEQLUOpJPiRheC2ZSDZTAwdmw82-eJK5vKtsQmRo8FJ7&_nc_ohc=QIXgaHmnmPcQ7kNvgFy9Nmp&_nc_ht=scontent.fsgn2-11.fna&oh=00_AYCYFRO3BJ98H10ZOvY89UMoJIGcZo90_7NzTq_YS1FA-A&oe=6701417A",
        },
      ],
    },
    {
      title: "D",
      data: [
        {
          id: 10,
          name: "Dương",
          image:
            "https://scontent.fsgn2-11.fna.fbcdn.net/v/t31.18172-8/23736019_1894009477581525_8983091271394183622_o.jpg?_nc_cat=105&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeEB-u2HgpwE_zePsW5JPPt-RAXeiGRB5JxEBd6IZEHknEQLUOpJPiRheC2ZSDZTAwdmw82-eJK5vKtsQmRo8FJ7&_nc_ohc=QIXgaHmnmPcQ7kNvgFy9Nmp&_nc_ht=scontent.fsgn2-11.fna&oh=00_AYCYFRO3BJ98H10ZOvY89UMoJIGcZo90_7NzTq_YS1FA-A&oe=6701417A",
        },
        {
          id: 11,
          name: "Dung",
          image:
            "https://scontent.fsgn2-11.fna.fbcdn.net/v/t31.18172-8/23736019_1894009477581525_8983091271394183622_o.jpg?_nc_cat=105&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeEB-u2HgpwE_zePsW5JPPt-RAXeiGRB5JxEBd6IZEHknEQLUOpJPiRheC2ZSDZTAwdmw82-eJK5vKtsQmRo8FJ7&_nc_ohc=QIXgaHmnmPcQ7kNvgFy9Nmp&_nc_ht=scontent.fsgn2-11.fna&oh=00_AYCYFRO3BJ98H10ZOvY89UMoJIGcZo90_7NzTq_YS1FA-A&oe=6701417A",
        },
      ],
    },
    {
      title: "T",
      data: [
        {
          id: 10,
          name: "Trang",
          image:
            "https://scontent.fsgn2-11.fna.fbcdn.net/v/t31.18172-8/23736019_1894009477581525_8983091271394183622_o.jpg?_nc_cat=105&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeEB-u2HgpwE_zePsW5JPPt-RAXeiGRB5JxEBd6IZEHknEQLUOpJPiRheC2ZSDZTAwdmw82-eJK5vKtsQmRo8FJ7&_nc_ohc=QIXgaHmnmPcQ7kNvgFy9Nmp&_nc_ht=scontent.fsgn2-11.fna&oh=00_AYCYFRO3BJ98H10ZOvY89UMoJIGcZo90_7NzTq_YS1FA-A&oe=6701417A",
        },
        {
          id: 11,
          name: "Trương",
          image:
            "https://scontent.fsgn2-11.fna.fbcdn.net/v/t31.18172-8/23736019_1894009477581525_8983091271394183622_o.jpg?_nc_cat=105&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeEB-u2HgpwE_zePsW5JPPt-RAXeiGRB5JxEBd6IZEHknEQLUOpJPiRheC2ZSDZTAwdmw82-eJK5vKtsQmRo8FJ7&_nc_ohc=QIXgaHmnmPcQ7kNvgFy9Nmp&_nc_ht=scontent.fsgn2-11.fna&oh=00_AYCYFRO3BJ98H10ZOvY89UMoJIGcZo90_7NzTq_YS1FA-A&oe=6701417A",
        },
      ],
    },
  ];

  return (
    <>
      <Text
        style={{
          backgroundColor: "gray",
          color: "white",
          textAlign: "center",
          fontSize: 26,
        }}
      >
        List of NYC
      </Text>

      <SectionList
        showsVerticalScrollIndicator={false}
        sections={dataFake}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image
              source={{
                uri: "https://scontent.fsgn2-11.fna.fbcdn.net/v/t31.18172-8/23736019_1894009477581525_8983091271394183622_o.jpg?_nc_cat=105&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeEB-u2HgpwE_zePsW5JPPt-RAXeiGRB5JxEBd6IZEHknEQLUOpJPiRheC2ZSDZTAwdmw82-eJK5vKtsQmRo8FJ7&_nc_ohc=QIXgaHmnmPcQ7kNvgFy9Nmp&_nc_ht=scontent.fsgn2-11.fna&oh=00_AYCYFRO3BJ98H10ZOvY89UMoJIGcZo90_7NzTq_YS1FA-A&oe=6701417A",
              }}
              style={styles.avt}
            />
            <Text style={{ fontSize: 18, marginLeft: 15 }}>{item.name}</Text>
          </View>
        )}
        renderSectionHeader={({ section }) => (
          <Text style={{ backgroundColor: "red", color: "white" }}>
            {section.title}
          </Text>
        )}
        keyExtractor={(item) => `basiclistEntry-${item.id}`}
      />

      {/* <View style={styles.item}>
        <Image
          source={{
            uri: "https://scontent.fsgn2-11.fna.fbcdn.net/v/t31.18172-8/23736019_1894009477581525_8983091271394183622_o.jpg?_nc_cat=105&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeEB-u2HgpwE_zePsW5JPPt-RAXeiGRB5JxEBd6IZEHknEQLUOpJPiRheC2ZSDZTAwdmw82-eJK5vKtsQmRo8FJ7&_nc_ohc=QIXgaHmnmPcQ7kNvgFy9Nmp&_nc_ht=scontent.fsgn2-11.fna&oh=00_AYCYFRO3BJ98H10ZOvY89UMoJIGcZo90_7NzTq_YS1FA-A&oe=6701417A",
          }}
          style={styles.avt}
        />
        <Text style={{ fontSize: 18, marginLeft: 15 }}>Nguyễn Minh Trang</Text>
      </View> */}
    </>
  );
};

const styles = StyleSheet.create({
  avt: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  item: { flexDirection: "row", alignItems: "center", margin: 15 },
});
export default NYC;
