const express = require('express');
const router = express.Router();
const { createPoem, getPoems, updatePoem, deletePoem } = require('../controllers/poemController');


router.post('/create-poem', createPoem);
router.get('/poems', getPoems);
router.put('/update-poem/:id', updatePoem);
router.delete('/delete-poem/:id', deletePoem);

module.exports = router;