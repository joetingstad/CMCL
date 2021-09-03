import { check } from "meteor/check";
import { UsersCollection } from "../db/UsersCollection";

Meteor.methods({
  "users.insert"(username, password) {
    check(username, String);
    check(password, String);

    UsersCollection.insert({
      username,
      password,
      createdAt: new Date(),
    });
  },
});
