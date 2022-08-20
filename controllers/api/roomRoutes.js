const router = require('express').Router();
const { Room } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newRoom = await Room.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newRoom);
  } catch (err) {
    res.status(400).json(err);
  }
});

// update room
router.put("/:id", (req, res) => {
  // update room data
  Room.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((room) => {
      // find all associated tags from roomTag
      return RoomTag.findAll({ where: { room_id: req.params.id } });
    })
    .then((roomTags) => {
      // get list of current tag_ids
      const roomTagIds = roomTags.map(({ tag_id }) => tag_id);
      // create filtered list of new tag_ids
      const newroomTags = req.body.tagIds
        .filter((tag_id) => !roomTagIds.includes(tag_id))
        .map((tag_id) => {
          return {
            room_id: req.params.id,
            tag_id,
          };
        });
      // figure out which ones to remove
      const roomTagsToRemove = roomTags
        .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
        .map(({ id }) => id);

      // run both actions
      return Promise.all([
        RoomTag.destroy({ where: { id: roomTagsToRemove } }),
        RoomTag.bulkCreate(newroomTags),
      ]);
    })
    .then((updatedroomTags) => res.json(updatedroomTags))
    .catch((err) => {
      // console.log(err);
      res.status(400).json(err);
    });
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const roomData = await Room.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!roomData) {
      res.status(404).json({ message: 'No Room found with this id!' });
      return;
    }

    res.status(200).json(RoomData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
