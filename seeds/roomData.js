const { Room } = require('../models/');

const roomdata = [
  {
    name: 'Beach Bungalow',
    description: 'We have 3 Beach Bungalow, each Beach Bungalow has a large double bed or two single beds, with a room area of 36m2. The room is facing the sea, convenient for traveling between swimming pool and sea.'
  },
  {
    name: 'Grande Bungalow',
    description: 'Grande bungalow room is designed in ancient Vietnamese architectural style, has a balcony with a wide garden view. There is a room area of 45m2, the room includes two large beds and large space suitable for small families.',
  },
  {
    name: 'Pool Bungalow',
    description: 'The room is located near the swimming pool, with a room area of 32m2. Room includes two large / small beds.',
  },
  {
    name: 'Superior Bungalow',
    description: 'Superior Bungalow has balcony with garden view, with room area of 30m2. Rooms are arranged in a long row on the resort grounds. There are two types of Superior Bungalow: the room type includes two small / large single beds and the room type includes a double bed.',
  },
  {
    name: 'Deluxe Room',
    description: 'Deluxe room located on a building with balcony overlooking the sea, with an area of 40m2. The room is divided into each floor: ground floor, first floor and second floor. The room includes two large beds.',
  },
  {
    name: 'Superior Room',
    description: 'Superior room is located on a building including ground floor, first floor and second floor, garden view room with room area of 32m2. The room is decorated in a classic style and has a large glass door frame that overlooks the surrounding area. Room includes two single beds.',
  },
];

const seedRooms = () => Room.bulkCreate(roomdata);

module.exports = seedRooms;






