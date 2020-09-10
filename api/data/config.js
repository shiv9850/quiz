// @ts-check

const partitionKey = process.env.partitionKey || "/category";

const config = {
    endpoint: process.env.endpoint ||  "<Your Azure Cosmos account URI>",
    key: process.env.key || "<Your Azure Cosmos account key>",
    databaseId:  "QuizDB",
    containerId: "quizzes",
    partitionKey: { kind: "Hash", paths: [ partitionKey ] }
  };
  
  module.exports = config;