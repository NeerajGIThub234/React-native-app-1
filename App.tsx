import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import FancyCards from './components/FancyCards';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';
import PasswordGenerator from './components/PasswordGenerator03';
import BgChanger04 from './components/bgChanger04'; // Make sure the path is correct
import RoleTheDice05 from './components/roleTheDice05';
import TicTacToe from './components/TicTacToe';
import CurrencyConvertor06 from './components/currencyConverter06';
function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <RoleTheDice05 />
        <BgChanger04 />
        <TicTacToe />
        <PasswordGenerator />
        <FlatCards />
        <ElevatedCards />
        <FancyCards />
        <ActionCard />
        <ContactList />
         <CurrencyConvertor06 />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
});

export default App;
