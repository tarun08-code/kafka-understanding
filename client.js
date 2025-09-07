const { Kafka } = require("kafkajs");

exports.kafka = new Kafka({
  clientId: "dinesh",
  brokers: ["10.18.207.107/24:9092"],
});