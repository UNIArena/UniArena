import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Avatar, Text } from 'react-native-elements';
import { StatusBar } from 'react-native';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';
import { Colors, Helpers, Spacing, Fonts } from '@/styles';
import * as Icons from '@/components/icons';
import spacing from '@/styles/spacing';

export default function Profile() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent />
      <Avatar
        size="xlarge"
        rounded
        source={{
          uri: 'https://www.betikblog.com/Gungor.png',
        }}
        containerStyle={styles.avatar}
      />
      <Text style={styles.name}>Margin20</Text>

      <View style={styles.header}>
        <View style={styles.status}>
          <Icons.Cup color={Colors.PrimaryDisable} height={30} width={30} />
          <Text style={styles.count}>33</Text>
        </View>
        <View style={styles.status}>
          <Icons.Bolt color={Colors.PrimaryDisable} height={30} width={30} />
          <Text style={styles.count}>85</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    ...Helpers.fill,
    backgroundColor: Colors.White,
    paddingHorizontal: spacing.small,
  },
  avatar: {
    marginTop: Spacing.medium,
    ...Helpers.selfCenter,
  },
  header: {
    ...Helpers.row,
    marginTop: Spacing.medium,
    ...Helpers.mainSpaceAround,
  },
  status: {
    ...Helpers.rowCross,
  },
  count: {
    ...Fonts.style.normal,
    marginLeft: spacing.tiny,
    color: Colors.Dark,
    fontWeight: 'bold',
  },
  name: {
    color: Colors.Dark,
    fontWeight: 'bold',
    ...Fonts.style.h3,
    ...Helpers.textCenter,
    marginTop: Spacing.small,
  },
});
