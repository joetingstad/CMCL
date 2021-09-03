import { Match } from "meteor/check";
import { Meteor } from "meteor/meteor";
import { Quizes } from "../imports/db/Quizes";
import { Modules } from "/imports/db/Modules.js";
import { Accounts } from "meteor/accounts-base";


Meteor.methods({

  "modules.insert"( title, text, timePeriod, videoLink, ageGroup, Q1, Q2, Q3, Q4, Q5, Q1OptionArray, Q2OptionArray, Q3OptionArray, Q4OptionArray, Q5OptionArray, Q1Ans, Q2Ans, Q3Ans, Q4Ans, Q5Ans ) {
    check(title, String);
    check(text, String);
    check(timePeriod, String);
    check(videoLink, String);
    check(ageGroup, String);
    check(Q1, String);
    check(Q2, String);
    check(Q3, String);
    check(Q4, String);
    check(Q5, String);
    check(Q1OptionArray, Array);
    check(Q2OptionArray, Array);
    check(Q3OptionArray, Array);
    check(Q4OptionArray, Array);
    check(Q5OptionArray, Array);
    check(Q1Ans, Array);
    check(Q2Ans, Array);
    check(Q3Ans, Array);
    check(Q4Ans, Array);
    check(Q5Ans, Array);

    Modules.insert({
      title,
      text,
      timePeriod,
      videoLink,
      ageGroup,
      Q1, Q2, Q3, Q4, Q5,
      Q1OptionArray, Q2OptionArray, Q3OptionArray, Q4OptionArray, Q5OptionArray,
      Q1Ans, Q2Ans, Q3Ans, Q4Ans, Q5Ans,
    });
  },

   "modules.find"(){
        const query = Modules.find({}).fetch();
        return query;
    },

  "modules.remove"(moduleId){
    check(moduleId, String);

    if (!this.userId) {
      throw new Meteor.Error("Not Authorized.");
    }

    Modules.remove(moduleId);
  },

  "modules.modify"(moduleID, title, text, timePeriod, videoLink, ageGroup, Q1, Q2, Q3, Q4, Q5, Q1OptionArray, Q2OptionArray, Q3OptionArray, Q4OptionArray, Q5OptionArray, Q1Ans, Q2Ans, Q3Ans, Q4Ans, Q5Ans) {
    check(title, String);
    check(text, String);
    check(timePeriod, String);
    check(videoLink, String);
    check(ageGroup, String);
    check(Q1, String);
    check(Q2, String);
    check(Q3, String);
    check(Q4, String);
    check(Q5, String);
    check(Q1OptionArray, Array);
    check(Q2OptionArray, Array);
    check(Q3OptionArray, Array);
    check(Q4OptionArray, Array);
    check(Q5OptionArray, Array);
    check(Q1Ans, Array);
    check(Q2Ans, Array);
    check(Q3Ans, Array);
    check(Q4Ans, Array);
    check(Q5Ans, Array);

    Modules.update(moduleID, {
      $set: {
        title, text, timePeriod,
        videoLink, ageGroup,
        Q1, Q2, Q3, Q4, Q5,
        Q1OptionArray, Q2OptionArray, 
        Q3OptionArray, Q4OptionArray, Q5OptionArray,
        Q1Ans, Q2Ans, Q3Ans, Q4Ans, Q5Ans,
      }
    });
  },

  "user.update"(id, query){
    Meteor.users.update(id,{$set: query})
  }
});

Meteor.publish('Modules.public', function() {
  return Modules.find({});
})

Meteor.startup(()=>{

  Modules.insert({
    title: "The Battle of Chancellorsville",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum. Phasellus vestibulum lorem sed risus ultricies tristique nulla. Viverra mauris in aliquam sem fringilla ut morbi tincidunt augue. Tincidunt arcu non sodales neque sodales. Urna duis convallis convallis tellus id interdum. Maecenas ultricies mi eget mauris pharetra et ultrices. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in. Molestie nunc non blandit massa enim nec dui nunc. Tellus in hac habitasse platea dictumst. Nunc sed id semper risus in hendrerit gravida rutrum quisque. Nunc id cursus metus aliquam eleifend mi in nulla posuere. Dolor purus non enim praesent elementum. At augue eget arcu dictum varius duis at consectetur. Ullamcorper dignissim cras tincidunt lobortis feugiat. Et malesuada fames ac turpis egestas maecenas pharetra convallis posuere. Gravida quis blandit turpis cursus in hac habitasse platea dictumst. Sem integer vitae justo eget magna fermentum iaculis. Quis commodo odio aenean sed adipiscing diam donec. Malesuada proin libero nunc consequat interdum. Tincidunt tortor aliquam nulla facilisi cras fermentum. Aliquam etiam erat velit scelerisque. Non nisi est sit amet facilisis magna. Tellus integer feugiat scelerisque varius morbi enim nunc faucibus. Accumsan tortor posuere ac ut. Vitae congue eu consequat ac felis donec et odio. Sodales ut eu sem integer vitae justo eget magna fermentum. Sit amet aliquam id diam maecenas. Purus sit amet luctus venenatis. Blandit massa enim nec dui. Bibendum arcu vitae elementum curabitur vitae nunc sed. In metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Suscipit adipiscing bibendum est ultricies integer quis. Eu nisl nunc mi ipsum faucibus vitae. Quis auctor elit sed vulputate mi sit amet mauris commodo. Dui id ornare arcu odio. Felis eget velit aliquet sagittis id consectetur purus ut. Et ligula ullamcorper malesuada proin. Varius duis at consectetur lorem donec massa. Id aliquet lectus proin nibh nisl. Sit amet massa vitae tortor condimentum lacinia. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. Egestas maecenas pharetra convallis posuere morbi. Nulla malesuada pellentesque elit eget gravida cum sociis natoque. Pretium nibh ipsum consequat nisl vel pretium lectus quam id. Dui nunc mattis enim ut tellus elementum sagittis vitae. Ut sem nulla pharetra diam. Elementum integer enim neque volutpat ac. Adipiscing at in tellus integer. Viverra accumsan in nisl nisi. Et netus et malesuada fames ac turpis egestas. Sed vulputate odio ut enim blandit volutpat. Dictum sit amet justo donec enim diam. Tempor id eu nisl nunc. Ornare arcu odio ut sem nulla pharetra. Volutpat est velit egestas dui id ornare arcu. Rhoncus mattis rhoncus urna neque. Dignissim sodales ut eu sem integer vitae justo eget. Suspendisse potenti nullam ac tortor. Ac turpis egestas maecenas pharetra convallis posuere morbi. Id velit ut tortor pretium. Ac felis donec et odio. Leo integer malesuada nunc vel risus commodo viverra. Ut tellus elementum sagittis vitae et leo. Nullam non nisi est sit amet facilisis magna. Nisi quis eleifend quam adipiscing vitae proin. Dui accumsan sit amet nulla facilisi morbi. Enim eu turpis egestas pretium aenean pharetra magna. Purus ut faucibus pulvinar elementum integer enim. Nibh tortor id aliquet lectus proin. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus. Integer quis auctor elit sed vulputate mi sit amet mauris. Nibh sit amet commodo nulla. Purus sit amet volutpat consequat. Vulputate enim nulla aliquet porttitor lacus.",
    timePeriod: "Civil War",
    videoLink: "https://www.youtube.com/watch?v=_7rSuZ5NHSA&ab_channel=RebelRallyPointRebelRallyPoint",
    ageGroup: "Flyweight (K-3rd)",
    Q1: "What year was the battle of Chancellorsville?",
    Q2: "Which side won the battle of Chancellorsville?",
    Q3: "In which state did the battle of Chancellorsville happen?",
    Q4: "How many troops fought at the battle of Chancellorsville?",
    Q5: "What day did the battle of Chancellorsville end?",
    Q1OptionArray: ["1914", "1888", "1863", "1776"],
    Q2OptionArray: ["Union", "Confederates", "West", "East"],
    Q3OptionArray: ["Tennessee", "Virginia", "New York", "Kentucky"],
    Q4OptionArray: ["130,000", "40,000", "90,000", "15,000"],
    Q5OptionArray: ["April 1", "June 20", "September 12", "May 6"],
    Q1Ans: ["off", "off", "on", "off"],
    Q2Ans: ["off", "on", "off", "off"],
    Q3Ans: ["off", "on", "off", "off"],
    Q4Ans: ["on", "off", "off", "off"],
    Q5Ans: ["off", "off", "off", "on"],
  });

  Modules.insert({
    title: "The First Battle of Bull Run",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum. Phasellus vestibulum lorem sed risus ultricies tristique nulla. Viverra mauris in aliquam sem fringilla ut morbi tincidunt augue. Tincidunt arcu non sodales neque sodales. Urna duis convallis convallis tellus id interdum. Maecenas ultricies mi eget mauris pharetra et ultrices. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in. Molestie nunc non blandit massa enim nec dui nunc. Tellus in hac habitasse platea dictumst. Nunc sed id semper risus in hendrerit gravida rutrum quisque. Nunc id cursus metus aliquam eleifend mi in nulla posuere. Dolor purus non enim praesent elementum. At augue eget arcu dictum varius duis at consectetur. Ullamcorper dignissim cras tincidunt lobortis feugiat. Et malesuada fames ac turpis egestas maecenas pharetra convallis posuere. Gravida quis blandit turpis cursus in hac habitasse platea dictumst. Sem integer vitae justo eget magna fermentum iaculis. Quis commodo odio aenean sed adipiscing diam donec. Malesuada proin libero nunc consequat interdum. Tincidunt tortor aliquam nulla facilisi cras fermentum. Aliquam etiam erat velit scelerisque. Non nisi est sit amet facilisis magna. Tellus integer feugiat scelerisque varius morbi enim nunc faucibus. Accumsan tortor posuere ac ut. Vitae congue eu consequat ac felis donec et odio. Sodales ut eu sem integer vitae justo eget magna fermentum. Sit amet aliquam id diam maecenas. Purus sit amet luctus venenatis. Blandit massa enim nec dui. Bibendum arcu vitae elementum curabitur vitae nunc sed. In metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Suscipit adipiscing bibendum est ultricies integer quis. Eu nisl nunc mi ipsum faucibus vitae. Quis auctor elit sed vulputate mi sit amet mauris commodo. Dui id ornare arcu odio. Felis eget velit aliquet sagittis id consectetur purus ut. Et ligula ullamcorper malesuada proin. Varius duis at consectetur lorem donec massa. Id aliquet lectus proin nibh nisl. Sit amet massa vitae tortor condimentum lacinia. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. Egestas maecenas pharetra convallis posuere morbi. Nulla malesuada pellentesque elit eget gravida cum sociis natoque. Pretium nibh ipsum consequat nisl vel pretium lectus quam id. Dui nunc mattis enim ut tellus elementum sagittis vitae. Ut sem nulla pharetra diam. Elementum integer enim neque volutpat ac. Adipiscing at in tellus integer. Viverra accumsan in nisl nisi. Et netus et malesuada fames ac turpis egestas. Sed vulputate odio ut enim blandit volutpat. Dictum sit amet justo donec enim diam. Tempor id eu nisl nunc. Ornare arcu odio ut sem nulla pharetra. Volutpat est velit egestas dui id ornare arcu. Rhoncus mattis rhoncus urna neque. Dignissim sodales ut eu sem integer vitae justo eget. Suspendisse potenti nullam ac tortor. Ac turpis egestas maecenas pharetra convallis posuere morbi. Id velit ut tortor pretium. Ac felis donec et odio. Leo integer malesuada nunc vel risus commodo viverra. Ut tellus elementum sagittis vitae et leo. Nullam non nisi est sit amet facilisis magna. Nisi quis eleifend quam adipiscing vitae proin. Dui accumsan sit amet nulla facilisi morbi. Enim eu turpis egestas pretium aenean pharetra magna. Purus ut faucibus pulvinar elementum integer enim. Nibh tortor id aliquet lectus proin. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus. Integer quis auctor elit sed vulputate mi sit amet mauris. Nibh sit amet commodo nulla. Purus sit amet volutpat consequat. Vulputate enim nulla aliquet porttitor lacus.",
    timePeriod: "Civil War",
    videoLink: "https://www.youtube.com/watch?v=SuSO1DHqPk4&ab_channel=AmericanBattlefieldTrustAmericanBattlefieldTrustVerified",
    ageGroup: "Flyweight (K-3rd)",
    Q1: "What year was The first Battle of Bull Run?",
    Q2: "Which side won The First battle of Bull Run?",
    Q3: "In which state did the First Battle of Bull Run happen?",
    Q4: "How many troops fought at the First Battle of Bull Run?",
    Q5: "What day did the First Battle of Bull Run end?",
    Q1OptionArray: ["1914", "1861", "1863", "1776"],
    Q2OptionArray: ["Union", "Confederates", "West", "East"],
    Q3OptionArray: ["Tennessee", "Virginia", "New York", "Kentucky"],
    Q4OptionArray: ["130,000", "40,000", "33,000", "15,000"],
    Q5OptionArray: ["April 1", "June 20", "September 12", "July 21"],
    Q1Ans: ["off", "on", "off", "off"],
    Q2Ans: ["off", "on", "off", "off"],
    Q3Ans: ["off", "on", "off", "off"],
    Q4Ans: ["off", "off", "on", "off"],
    Q5Ans: ["off", "off", "off", "on"],
  });

  Modules.insert({
    title: "The Battle of Gettysburg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum. Phasellus vestibulum lorem sed risus ultricies tristique nulla. Viverra mauris in aliquam sem fringilla ut morbi tincidunt augue. Tincidunt arcu non sodales neque sodales. Urna duis convallis convallis tellus id interdum. Maecenas ultricies mi eget mauris pharetra et ultrices. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in. Molestie nunc non blandit massa enim nec dui nunc. Tellus in hac habitasse platea dictumst. Nunc sed id semper risus in hendrerit gravida rutrum quisque. Nunc id cursus metus aliquam eleifend mi in nulla posuere. Dolor purus non enim praesent elementum. At augue eget arcu dictum varius duis at consectetur. Ullamcorper dignissim cras tincidunt lobortis feugiat. Et malesuada fames ac turpis egestas maecenas pharetra convallis posuere. Gravida quis blandit turpis cursus in hac habitasse platea dictumst. Sem integer vitae justo eget magna fermentum iaculis. Quis commodo odio aenean sed adipiscing diam donec. Malesuada proin libero nunc consequat interdum. Tincidunt tortor aliquam nulla facilisi cras fermentum. Aliquam etiam erat velit scelerisque. Non nisi est sit amet facilisis magna. Tellus integer feugiat scelerisque varius morbi enim nunc faucibus. Accumsan tortor posuere ac ut. Vitae congue eu consequat ac felis donec et odio. Sodales ut eu sem integer vitae justo eget magna fermentum. Sit amet aliquam id diam maecenas. Purus sit amet luctus venenatis. Blandit massa enim nec dui. Bibendum arcu vitae elementum curabitur vitae nunc sed. In metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Suscipit adipiscing bibendum est ultricies integer quis. Eu nisl nunc mi ipsum faucibus vitae. Quis auctor elit sed vulputate mi sit amet mauris commodo. Dui id ornare arcu odio. Felis eget velit aliquet sagittis id consectetur purus ut. Et ligula ullamcorper malesuada proin. Varius duis at consectetur lorem donec massa. Id aliquet lectus proin nibh nisl. Sit amet massa vitae tortor condimentum lacinia. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. Egestas maecenas pharetra convallis posuere morbi. Nulla malesuada pellentesque elit eget gravida cum sociis natoque. Pretium nibh ipsum consequat nisl vel pretium lectus quam id. Dui nunc mattis enim ut tellus elementum sagittis vitae. Ut sem nulla pharetra diam. Elementum integer enim neque volutpat ac. Adipiscing at in tellus integer. Viverra accumsan in nisl nisi. Et netus et malesuada fames ac turpis egestas. Sed vulputate odio ut enim blandit volutpat. Dictum sit amet justo donec enim diam. Tempor id eu nisl nunc. Ornare arcu odio ut sem nulla pharetra. Volutpat est velit egestas dui id ornare arcu. Rhoncus mattis rhoncus urna neque. Dignissim sodales ut eu sem integer vitae justo eget. Suspendisse potenti nullam ac tortor. Ac turpis egestas maecenas pharetra convallis posuere morbi. Id velit ut tortor pretium. Ac felis donec et odio. Leo integer malesuada nunc vel risus commodo viverra. Ut tellus elementum sagittis vitae et leo. Nullam non nisi est sit amet facilisis magna. Nisi quis eleifend quam adipiscing vitae proin. Dui accumsan sit amet nulla facilisi morbi. Enim eu turpis egestas pretium aenean pharetra magna. Purus ut faucibus pulvinar elementum integer enim. Nibh tortor id aliquet lectus proin. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus. Integer quis auctor elit sed vulputate mi sit amet mauris. Nibh sit amet commodo nulla. Purus sit amet volutpat consequat. Vulputate enim nulla aliquet porttitor lacus.",
    timePeriod: "Civil War",
    videoLink: "https://www.youtube.com/watch?v=7ALyq3seK2g&ab_channel=AmericanBattlefieldTrustAmericanBattlefieldTrustVerified",
    ageGroup: "Flyweight (K-3rd)",
    Q1: "What year was the battle of Gettysburg?",
    Q2: "Which side won the battle of Gettysburg?",
    Q3: "In which state did the battle of Gettysburg happen?",
    Q4: "How many troops fought at the battle of Gettysburg?",
    Q5: "What day did the battle of Gettysburg end?",
    Q1OptionArray: ["1914", "1888", "1863", "1776"],
    Q2OptionArray: ["Union", "Confederates", "West", "East"],
    Q3OptionArray: ["Tennessee", "Virginia", "Pennsylvania", "Kentucky"],
    Q4OptionArray: ["130,000", "40,000", "85,000", "15,000"],
    Q5OptionArray: ["July 3", "June 20", "September 12", "May 6"],
    Q1Ans: ["off", "off", "on", "off"],
    Q2Ans: ["on", "off", "off", "off"],
    Q3Ans: ["off", "off", "on", "off"],
    Q4Ans: ["off", "off", "on", "off"],
    Q5Ans: ["on", "off", "off", "off"],
  });

  Modules.insert({
    title: "The Emancipation Proclamation",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum. Phasellus vestibulum lorem sed risus ultricies tristique nulla. Viverra mauris in aliquam sem fringilla ut morbi tincidunt augue. Tincidunt arcu non sodales neque sodales. Urna duis convallis convallis tellus id interdum. Maecenas ultricies mi eget mauris pharetra et ultrices. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in. Molestie nunc non blandit massa enim nec dui nunc. Tellus in hac habitasse platea dictumst. Nunc sed id semper risus in hendrerit gravida rutrum quisque. Nunc id cursus metus aliquam eleifend mi in nulla posuere. Dolor purus non enim praesent elementum. At augue eget arcu dictum varius duis at consectetur. Ullamcorper dignissim cras tincidunt lobortis feugiat. Et malesuada fames ac turpis egestas maecenas pharetra convallis posuere. Gravida quis blandit turpis cursus in hac habitasse platea dictumst. Sem integer vitae justo eget magna fermentum iaculis. Quis commodo odio aenean sed adipiscing diam donec. Malesuada proin libero nunc consequat interdum. Tincidunt tortor aliquam nulla facilisi cras fermentum. Aliquam etiam erat velit scelerisque. Non nisi est sit amet facilisis magna. Tellus integer feugiat scelerisque varius morbi enim nunc faucibus. Accumsan tortor posuere ac ut. Vitae congue eu consequat ac felis donec et odio. Sodales ut eu sem integer vitae justo eget magna fermentum. Sit amet aliquam id diam maecenas. Purus sit amet luctus venenatis. Blandit massa enim nec dui. Bibendum arcu vitae elementum curabitur vitae nunc sed. In metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Suscipit adipiscing bibendum est ultricies integer quis. Eu nisl nunc mi ipsum faucibus vitae. Quis auctor elit sed vulputate mi sit amet mauris commodo. Dui id ornare arcu odio. Felis eget velit aliquet sagittis id consectetur purus ut. Et ligula ullamcorper malesuada proin. Varius duis at consectetur lorem donec massa. Id aliquet lectus proin nibh nisl. Sit amet massa vitae tortor condimentum lacinia. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. Egestas maecenas pharetra convallis posuere morbi. Nulla malesuada pellentesque elit eget gravida cum sociis natoque. Pretium nibh ipsum consequat nisl vel pretium lectus quam id. Dui nunc mattis enim ut tellus elementum sagittis vitae. Ut sem nulla pharetra diam. Elementum integer enim neque volutpat ac. Adipiscing at in tellus integer. Viverra accumsan in nisl nisi. Et netus et malesuada fames ac turpis egestas. Sed vulputate odio ut enim blandit volutpat. Dictum sit amet justo donec enim diam. Tempor id eu nisl nunc. Ornare arcu odio ut sem nulla pharetra. Volutpat est velit egestas dui id ornare arcu. Rhoncus mattis rhoncus urna neque. Dignissim sodales ut eu sem integer vitae justo eget. Suspendisse potenti nullam ac tortor. Ac turpis egestas maecenas pharetra convallis posuere morbi. Id velit ut tortor pretium. Ac felis donec et odio. Leo integer malesuada nunc vel risus commodo viverra. Ut tellus elementum sagittis vitae et leo. Nullam non nisi est sit amet facilisis magna. Nisi quis eleifend quam adipiscing vitae proin. Dui accumsan sit amet nulla facilisi morbi. Enim eu turpis egestas pretium aenean pharetra magna. Purus ut faucibus pulvinar elementum integer enim. Nibh tortor id aliquet lectus proin. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus. Integer quis auctor elit sed vulputate mi sit amet mauris. Nibh sit amet commodo nulla. Purus sit amet volutpat consequat. Vulputate enim nulla aliquet porttitor lacus.",
    timePeriod: "Civil War",
    videoLink: "https://www.youtube.com/watch?v=v9pjvo1_oto",
    ageGroup: "Flyweight (K-3rd)",
    Q1: "What U.S. President gave the emancipation proclamation?",
    Q2: "What year was the emancipation proclamation given?",
    Q4: "What was the main consequence of the emancipation proclamation?",
    Q3: "What side fought to enforce the emancipation proclamation?",
    Q5: "How did the emancipation proclamation effect black Americans?",
    Q1OptionArray: ["Bush", "Washington", "Lincoln", "Taft"],
    Q2OptionArray: ["1863", "1901", "1776", "1880"],
    Q3OptionArray: ["Tennessee", "Virginia", "Pennsylvania", "Kentucky"],
    Q4OptionArray: ["Nothing", "White people could continue owning slaves", "Freedom from slavery", "COVID"],
    Q5OptionArray: ["Freedom from slavery", "Nothing happened", "They could vote", "They could run away"],
    Q1Ans: ["off", "off", "on", "off"],
    Q2Ans: ["on", "off", "off", "off"],
    Q3Ans: ["off", "off", "on", "off"],
    Q4Ans: ["off", "off", "on", "off"],
    Q5Ans: ["on", "off", "off", "off"],
  });

})
