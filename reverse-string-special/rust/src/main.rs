#[macro_use] extern crate lazy_static;
extern crate regex;

use regex::Regex;

fn is_letter(c: char) -> bool {
    lazy_static! {
        static ref RE: Regex = Regex::new("[a-zA-Z]").unwrap();
    }
    RE.is_match(&c.to_string())
}

fn revert(string: &str) -> String {
    let string_array = string.chars().rev().collect::<Vec<char>>();
    let mut res = String::new();
    let mut revert_index = string.len() - 1;

    for i in 0..string.len() {
        if !is_letter(string_array[i]) {
            res.push(string_array[i]);
            continue;
        } else {
            while !is_letter(string_array[revert_index]) {
                revert_index -= 1;
            }

            res.push(string_array[revert_index]);
            revert_index -= 1;
        }
    }

    res
}

fn main() {
    let string = "sarasa-$othersarasa-fa55";
    println!("{}", revert(string));
}