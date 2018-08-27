import React, { Component } from "react";
import logo from "./logo.svg";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import "./App.css";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    marginTop: 30,
    paddingLeft: 30,
    paddingRight: 30
  },
  section: {
    margin: 30,
    padding: 30,
    flexGrow: 1
  },
  title_section: {
    marginTop: 30
  },
  title: {
    fontSize: 24,
    fontWeight: "bolder",
    marginLeft: 30,
    marginRight: 30,
    textAlign: "center"
  },
  marginalNote: {
    textAlign: "right",
    fontSize: 10
  },
  partiesToLeaseContract_section: {
    paddingTop: 30,
    fontSize: 14,
    textAlign: "justify"
  },
  partiesToLeaseContract: {
    flexDirection: "row",

    textAlign: "justify"
  },
  partiesToLeaseContractBoldText: {
    fontWeight: "bolder"
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginRight: 10,
    marginLeft: 10,
    padding: "10, 10, 10, 10",
    fontSize: 14,
    border: "1px solid black",

    borderStyle: "solid"
  },
  header: {
    backgroundColor: "#c8c8c8"
  },
  tableLegend: {
    textAlign: "left",
    backgroundColor: "#c8c8c8",
    marginRight: 10,
    marginLeft: 10,
    padding: "5, 5, 5, 5",
    border: "1px solid black",
    fontSize: 14,
    borderStyle: "solid"
  }
});

const ThreeColumns = ({ style, firstText, secondText, thirdText }) => (
  <View style={style}>
    <View
      style={{
        flexDirection: "column",
        marginRight: 10
      }}
    >
      <Text render={() => firstText} />
    </View>
    <View style={{ flexDirection: "column", marginRight: 10 }}>
      <Text render={() => secondText} />
    </View>
    <View style={{ flexDirection: "column", marginRight: 10 }}>
      <Text render={() => thirdText} />
    </View>
  </View>
);

const TwoColumns = ({ style, firstText, secondText }) => (
  <View style={style}>
    <View style={{ flexDirection: "column", marginRight: 10 }}>
      <Text render={() => firstText} />
    </View>
    <View style={{ flexDirection: "column", marginRight: 10 }}>
      <Text render={() => secondText} />
    </View>
  </View>
);

const Minors = () => (
  <View style={{ flexDirection: "column" }} wrap>
    <Text style={styles.tableLegend}>MINOR OCCUPANTS</Text>
    <TwoColumns
      style={[styles.row, styles.header]}
      firstText="First Name"
      secondText="Second Name"
    />
    <TwoColumns style={[styles.row]} firstText="Laura" secondText="Kichner" />
  </View>
);

const LeaseSigners = () => (
  <View style={{ flexDirection: "column" }} wrap>
    <Text style={styles.tableLegend}>LEASE SIGNERS - RESIDENT</Text>
    <ThreeColumns
      style={[styles.row, styles.header]}
      firstText="Type of Lease Signer"
      secondText="First Name"
      thirdText="Last Name"
    />
    <ThreeColumns
      style={styles.row}
      firstText="Finantial "
      secondText="Joe"
      thirdText="Doe"
    />
    <ThreeColumns
      style={styles.row}
      firstText="Non Finantial "
      secondText="Felipe"
      thirdText="Castilla"
    />
  </View>
);

const Title = () => (
  <View sytle={styles.title_section}>
    <Text style={styles.title}>Apartment Lease Contract</Text>
    <Text style={styles.title}>Test Property Apartments</Text>
    <Text style={styles.marginalNote}>
      This is a binding document. Please review carefully before signing.{" "}
    </Text>
  </View>
);

const PartiesToLeaseContract = () => (
  <View style={styles.partiesToLeaseContract_section}>
    <Text style={styles.partiesToLeaseContractBoldText}>
      {" "}
      1. PARTIES TO LEASE CONTRACT{" "}
    </Text>
    <Text>
      This Lease Contract (“Lease”) is made on 2018-07-03, by and between: Test
      Property, owner, represented by Elmington Property Management, agent,
      hereinafter called the Landlord, and the Resident as defined below. The
      apartment will be occupied only by the individuals listed below
    </Text>
  </View>
);

// Create Document Component
const MyDocument = () => (
  <Document width={1000} height={1000} title="Lease Contract">
    <Page size="A4" style={styles.page}>
      <Title />
      <PartiesToLeaseContract />
      <View style={{ flexDirection: "row" }}>
        <LeaseSigners />
        <Minors />
      </View>
    </Page>
  </Document>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">PDF Example</h1>
        </header>
        <MyDocument />
      </div>
    );
  }
}

export default App;
