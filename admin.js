const { Kafka } = require("kafkajs");

async function init() {
  // create kafka client
  const kafka = new Kafka({
    clientId: "my-app",
    brokers: ["10.18.207.107:9092"]  // change to your Kafka broker IP
  });

  const admin = kafka.admin();
  console.log("Connecting to Kafka...");
  await admin.connect();
  console.log("Connected!");

  // create a topic
  await admin.createTopics({
    topics: [
      {
        topic: "users",
        numPartitions: 1,
      },
    ],
  });

  console.log("Topic created successfully");

  await admin.disconnect();
}

init().catch(console.error);
