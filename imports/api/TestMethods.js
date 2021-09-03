import { check } from "meteor/check";
import { Test } from "../db/Test";

Meteor.methods({
    "Test.insert"(text) {
      check(text, String);
  
      if (!this.userId) {
        throw new Meteor.Error("Not Authorized.");
      }
  
      Test.insert({
        text,
        createdAt: new Date(),
        userId: this.userId,
      });
    },
  
    "Test.remove"(taskId) {
      check(taskId, String);
  
      if (!this.userId) {
        throw new Meteor.Error("Not Authorized.");
      }
  
      Test.remove(taskId);
    },
  
    "tasks.setIsChecked"(taskId, isChecked) {
      check(taskId, String);
      check(isChecked, Boolean);
  
      if (!this.userId) {
        throw new Meteor.Error("Not Authorized.");
      }
  
      Test.update(taskId, {
        $set: {
          isChecked,
        },
      });
    },
  });
  