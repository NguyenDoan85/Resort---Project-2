const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./roomRoutes');

router.use('/users', userRoutes);
router.use('/rooms', projectRoutes);

module.exports = router;