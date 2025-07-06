// controllers/championController.js
const championsData = require('../data/championsData');

exports.getChampions = (req, res) => {
    res.json(championsData);
};

exports.getChampionById = (req, res) => {
    const id = parseInt(req.params.id, 10);  // Obtém o ID da URL e converte para número
    const champion = championsData.find(c => c.id === id);  // Encontra o campeão com o ID correspondente

    if (champion) {
        res.json(champion);  // Retorna o campeão se encontrado
    } else {
        res.status(404).send('Champion not found');  // Se o ID não for válido
    }
};
