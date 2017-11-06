const Entity = require('hestiaa').model.Entity
const ProductValidator = require('./productValidator')

/**
 * @swagger
 * definitions:
 *   Product:
 *     type: object
 *     required: [name, type]
 *     properties:
 *       _id:
 *         readOnly: true
 *         type: string
 *         format: uuid
 *         description: |
 *           Unique identifier (`ObjectId`).
 *           Generated automatically during creation.
 *         example: '507f1f77bcf86cd799439011'
 *       name:
 *         type: string
 *         description: The name of product.
 *         example: Hand saw
 *       type:
 *         type: string
 *         enum: ['other', 'tools', 'materials', 'decoration']
 *         description: The type of product.
 *         example: tools
 *       brand:
 *         type: string
 *         description: The brand of product.
 *         example: Leroy-Merlin
 */
class Product extends Entity {
  /**
   * Embedded {@link Entity} cannot be saved directly.
   * @override
   */
  async save () {
    throw new Error('This model should be saved by calling Box#embed then saving box')
  }

  __getValidator () {
    return ProductValidator
  }
}

module.exports = Product