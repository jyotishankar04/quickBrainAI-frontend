import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E2E8F0",
  },
  section: {
    margin: 10,
    padding: 10,
    width: "100%",
    height: "100%",
  },
});

const PDFViewer = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime perferendis voluptates quibusdam, fugit libero unde aut inventore est dolore consequuntur quas facilis facere explicabo delectus, itaque debitis adipisci neque magni. Possimus facere officia saepe aperiam hic itaque cupiditate. Odit enim consectetur sed et velit impedit similique modi debitis, quae eaque.
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default PDFViewer;