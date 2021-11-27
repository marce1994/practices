use std::cell::RefCell;
use std::rc::Rc;

struct TreeNode {
    val: i32,
    left: Option<Rc<RefCell<TreeNode>>>,
    right: Option<Rc<RefCell<TreeNode>>>,
}

fn sum_left_leaves(root: Option<Rc<RefCell<TreeNode>>>) -> i32 {
    let mut sum = 0;
    let mut stack = vec![];
    stack.push(root);
    while !stack.is_empty() {
        let node = stack.pop().unwrap();
        if let Some(node) = node {
            let node = node.borrow();
            if node.left.is_none() && node.right.is_none() {
                sum += node.val;
            } else {
                stack.push(node.left.clone());
                stack.push(node.right.clone());
            }
        }
    }
    sum
}

fn main() {
    let root = Some(Rc::new(RefCell::new(TreeNode {
        val: 3,
        left: Some(Rc::new(RefCell::new(TreeNode {
            val: 9,
            left: None,
            right: None,
        }))),
        right: Some(Rc::new(RefCell::new(TreeNode {
            val: 20,
            left: Some(Rc::new(RefCell::new(TreeNode {
                val: 15,
                left: None,
                right: None,
            }))),
            right: Some(Rc::new(RefCell::new(TreeNode {
                val: 7,
                left: None,
                right: None,
            }))),
        }))),
    })));
    println!("{}", sum_left_leaves(root));
}
