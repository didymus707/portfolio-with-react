import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { Contact } from "./pages/contact";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {},
});

export const File = () => (
  <Document >
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>
          <Contact />
        </Text>
      </View>
    </Page>
  </Document>
);
