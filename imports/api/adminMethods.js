import { check } from "meteor/check";
import { AdminCollection } from "../db/AdminCollection";

Meteor.methods({
  "admin.insert"(text) {
    check(text, String);

    AdminCollection.insert({
      text,
    });
  },

  "admin.check"(username, password) {
    check(username, String);
    check(password, String);
  }
});