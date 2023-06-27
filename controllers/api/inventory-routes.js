const router = require('express').Router();
const { User, Inventory } = require('../../models')


// // Get all items in inventory
router.get('/', async (req, res) => {
    try {
        const inventoryData = await Inventory.findAll({

        })
        res.status(200).json(inventoryData);
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/:id', async (req, res) => {
    try {
        const inventoryData = await Inventory.findByPk(req.params.id, {

        })
        console.log(inventoryData);
        if (!inventoryData) {
            res.status(404).json({ message: 'No item with this id' })
            return;
        }
        res.status(200).json(inventoryData)
    } catch (err) {
        res.status(500).send(err)
    }
})

// Update item in inventory
router.post('/:id', async (req, res) => {
    try {
        console.log(req.body)
        let inventoryData = await Inventory.findByPk(req.params.id)
        if (req.body.increment) {
            inventoryData = await inventoryData.increment("quantity", { by: req.body.increment })
        }
        else if (req.body.decrement) {
            inventoryData = await inventoryData.decrement("quantity", { by: req.body.decrement })
        }
        else if (req.body.quantity !== null && !isNaN (req.body.quantity) ) {
            inventoryData.quantity = req.body.quantity
            inventoryData = await inventoryData.save()
        }

        if (!inventoryData) {
            res.status(404).json({ message: 'No item with this Id' })
            return;
        }
        res.status(200).json(inventoryData)
        // let log = await log.create
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }

})

module.exports = router;