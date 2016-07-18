module.exports.BinarySearchTree = require('./lib/bst');
module.exports.AVLTree = require('./lib/avltree');
if(typeof window !== 'undefined'){
    window.BinarySearchTree = module.exports.BinarySearchTree;
    window.AVLTree = module.exports.AVLTree;
}
