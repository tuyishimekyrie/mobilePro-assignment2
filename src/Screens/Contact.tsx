import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import * as Contacts from "expo-contacts";
import { TouchableOpacity } from "react-native-gesture-handler";

const ContactScreen = () => {
  const [contacts, setContacts] = useState<any>([]);

  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === "granted") {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.Emails],
        });

        if (data.length > 0) {
          const listOfContacts = data.map((contact: any) => ({
            name: `${contact.firstName} ${contact.lastName}`,
            email: contact.emails
              ? contact.emails.map((e: any) => e.email)
              : [],
            thumbnail: contact.image ? contact.image.uri : null,
            id: contact.id,
          }));
          setContacts(listOfContacts);
        }
      }
    })();
  }, []);

  const renderItem = ({ item }: { item: any }) => (
    <TouchableOpacity style={styles.contactItem}>
      <Text style={styles.contactName}>{item.name}</Text>
      {item.email.length > 0 && (
        <Text style={styles.contactEmail}>{item.email[0]}</Text>
      )}
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>Contacts List</Text>
        <FlatList
          data={contacts}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#1d78d6",
  },
  contactItem: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingVertical: 10,
  },
  contactName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  contactEmail: {
    fontSize: 16,
    color: "#666",
  },
});

export default ContactScreen;
