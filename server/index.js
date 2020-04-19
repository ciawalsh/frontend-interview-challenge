var express = require('express');
var graphqlHTTP = require('express-graphql');
const cors = require('cors');
var {buildSchema} = require('graphql');
const {domain, port} = require('./config');

var {plants, devices, users} = require('./data');

const createdNewId = (array) => {
  const highest = array.sort((itemA, itemB) => itemA.id - itemB.id);
  return highest[highest.length - 1].id + 1;
};

const schema = buildSchema(`
  type Plant {
    name: String,
    id: Int
  }

  type Device {
    id: Int,
    type: String,
    label: String,
    plantId: Int
  }

  input DeviceInput {
    label: String,
    type: String,
    plantId: Int
  }

  type Query {
    plants: [Plant],
    devices: [Device]
  }

  type Mutation {
    addDevice(device: DeviceInput): [Device]
  }
`);

const root = {
  plants: () => plants,
  devices: () => devices,
  users: () => users,
  addDevice: ({device}) => {
    devices.push({
      id: createdNewId(devices),
      type: device.type,
      label: device.label,
      plantId: device.plantId,
    });
    return devices;
  },
};

var server = express();
server.use(cors());
server.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  }),
);
server.listen(port);
console.log(`Listening on ${domain}/graphql`);
