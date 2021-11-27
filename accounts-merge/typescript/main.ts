/*Given a list of accounts where each element accounts[i] is a list of strings, where the first element accounts[i][0] is a name, and the rest of the elements are emails representing emails of the account.
Now, we would like to merge these accounts. Two accounts definitely belong to the same person if there is some common email to both accounts. Note that even if two accounts have the same name, they may belong to different people as people could have the same name. A person can have any number of accounts initially, but all of their accounts definitely have the same name.
After merging the accounts, return the accounts in the following format: the first element of each account is the name, and the rest of the elements are emails in sorted order. The accounts themselves can be returned in any order.*/

// Input: accounts = [["John","johnsmith@mail.com","john_newyork@mail.com"],["John","johnsmith@mail.com","john00@mail.com"],["Mary","mary@mail.com"],["John","johnnybravo@mail.com"]]
// Output: [["John","john00@mail.com","john_newyork@mail.com","johnsmith@mail.com"],["Mary","mary@mail.com"],["John","johnnybravo@mail.com"]]

function accountsMerge(accounts: string[][]): string[][] {
    let graph = new Map<string, Set<string>>()
    
	// Build a graph 
    for(let account of accounts) {
        for(let i = 1; i < account.length; i++) {
            if(i === 0) continue;
            if(!graph.has(account[i])) graph.set(account[i], new Set())
            if(i === account.length - 1) continue; // For if account only have 1 email
            if(!graph.has(account[i+1])) graph.set(account[i+1], new Set())
            graph.get(account[i]).add(account[i+1])
            graph.get(account[i+1]).add(account[i])
        }
    }
    
	// DFS function
    function dfs(emails: string[], email: string, seen: Map<string, boolean>) {
        if(seen.has(email)) return;
        seen.set(email, true)
        emails.push(email)
        let connectedEmails = graph.get(email)
        for(let connectedEmail of connectedEmails.values()) {
            dfs(emails, connectedEmail, seen)
        }
    }
    
    let result = []
	// Seen map for all emails
    let seen = new Map<string, boolean>()
    
    for(let account of accounts) {
        let userName = account[0]
        let emails = []
        for(let i = 1; i < account.length; i++) {
            dfs(emails, account[i], seen)
        }
        if(emails.length === 0) continue; // All these emails in this original account has been merged
        emails.sort() // Sort the emails
        let pushingAccount = [userName, ...emails]
        result.push(pushingAccount)
    }
    
    return result
}