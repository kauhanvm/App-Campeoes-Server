// routes/index.js
const express = require('express');
const router = express.Router();
const championController = require('../controllers/championController');

// Rota para obter todos os campeões
router.get('/', championController.getChampions);

// Rota para obter um campeão específico pelo ID
router.get('/:id', championController.getChampionById);

module.exports = router;
