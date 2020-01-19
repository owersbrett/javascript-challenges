// Good morning! Here's your coding interview problem for today.

// This problem was asked by Google.

// Implement locking in a binary tree. 
// A binary tree node can be locked or unlocked only if all of its descendants or ancestors are not locked.

// Design a binary tree node class with the following methods:

// is_locked, which returns whether the node is locked
// lock, which attempts to lock the node. If it cannot be locked, then it should return false. 
// Otherwise, it should lock it and return true.
// unlock, which unlocks the node. If it cannot be unlocked, then it should return false.
// Otherwise, it should unlock it and return true.
// You may augment the node to add parent pointers or any other property you would like. 
// You may assume the class is used in a single-threaded program, so there is no need for actual locks or mutexes. 
// Each method should run in O(h), where h is the height of the tree.

class LockingBinaryTree {
    constructor(parent = undefined, left = undefined, right = undefined){
        // this.canLock = 
        this.left = left;
        this.right = right;
        this.parent = parent;
        this.is_locked = false;
    }

    lock(){
        if (this.is_locked){
            console.log("This node already locked!");
            return false;
        }

        if (!this.hasLockedAncestor() && !this.hasLockedDescendent()){
            this.is_locked = true;
            console.log("Lockin up the node!")
        } else {
            if (this.hasLockedAncestor()){
                console.log("An ancestor is locked.")
            } else {
                console.log("A descendent is locked.")
            }
            return false;
        }

    }

    unlock(){

        if ((!this.hasLockedAncestor() || !this.hasLockedDescendent()) && this.is_locked){
            this.is_locked = false;
            console.log("This node has been unlocked!");
            return true;
        } else {
            if (this.hasLockedAncestor()){
                console.log("An ancestor is locked.");
            } else if (this.hasLockedDescendent()){
                console.log("A descendent is locked.");
            } else {
                console.log("This node is already unlocked!")
            }
            return false;
        }

    }

    addNode(){
        if (this.left === undefined){
            this.left = new LockingBinaryTree(this);
            console.log("Node added to left")
        } else if (this.right === undefined){
            this.right = new LockingBinaryTree(this);
            console.log("Node added to right")
        } else {
            console.log("Node unable to be added at this location")
            return false;
        }
    }

    addNodePair(){
        this.addNode()
        this.addNode();
    }

    addNodePairToPairs(){
        this.addNodePair();
        this.left.addNodePair();
        this.right.addNodePair();
    }


    hasLockedDescendent(){ 
        if (this.is_locked){
            return true;
        }
        if (this.left !== undefined){
            if (this.left.hasLockedDescendent()){
                return true;
            } else {
                return false;
            }

        }
        if (this.right !== undefined){
            if (this.right.hasLockedDescendent()){
                return true;
            } else {
                return false;
            }
        }       
    }


    hasLockedAncestor(){
        if (this.parent !== undefined){ // once the parent of the node is undefined we return false, because we made it to parent without return
            if (this.parent.is_locked){
                return true;
            } else {
                if (this.parent.hasLockedAncestor()){
                    return true;
                }
            }
        } else {
            return false;
        }
    }
    
}

let root = new LockingBinaryTree();
root.addNodePairToPairs();

root.left.lock();
root.left.left.lock();
root.left.unlock();
root.lock();
console.log(root.is_locked);

console.log("lock the root");
root.lock();
root.unlock();

// root.lock();
// root.left.left.lock();
// console.log(root.left.left.is_locked);


// test for lock and haslockedancestor method

//proud of this one
//not much more to say