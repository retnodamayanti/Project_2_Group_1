// const router = require('express').Router();
// const { User, Inventory } = require('../../models')


// // Get all items in inventory
// router.get('/', async (req, res) => {
//     try{
//         const inventoryData = await Inventory.findAll({

//         })
//         res.status(200).json(inventoryData);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// })

// router.get('/:id', async (req, res) => {
//     try{
//         const inventoryData = await Inventory.findByPk(req.params.id, {
        
//         })
//         console.log(inventoryData);
//         if (!inventoryData){
//             res.status(404).json({ message: 'No item with this id'})
//             return;
//         }
//         res.status(200).json(inventoryData)
//     } catch (err) {
//         res.status(500).send(err)
//     }
// })

// // Update item in inventory
// router.put('/:id', async (req, res) => {
//     try {
//         const inventoryData = await Inventory.update(req.body, {
//             where: {
//                 id: req.params.id
//             }
//         })
//         if (!inventoryData){
//             res.status(404).json({ message: 'No item with this Id'})
//             return;
//         }
//         res.status(200).json(inventoryData)
//     } catch (err) {
//         console.log(err)
//         res.status(500).json(err);
//     }
    
// })

// module.exports = router;