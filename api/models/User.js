/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
    name: {
      type: "string"
    },
    fullName: {
      type: "string"
    },
    born: {
      type: "string"
    },
    currentAge: {
      type: "string"
    },
    majorTeams: {
      type: "string"
    },
    playingRole: {
      type: "string"
    },
    battingStyle: {
      type: "string"
    },
    bowlingStyle: {
      type: "string"
    },
    profile: {
      type: "string"
    },
    country: {
      type: "string"
    },
    imageURL: {
      type: "string"
    },
    bowling: {
      type: "string"
    },
    batting: {
      type: "string"
    }
  }
};
