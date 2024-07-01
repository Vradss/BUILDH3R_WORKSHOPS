
program token_f3_vc.aleo {
    record Token {
        owner: address,
        amount: u64,
    }

    transition mint(owner: address, amount: u64) -> Token {
        return Token {
            owner: owner,
            amount: amount,
        };
    }
    
    transition transfer(token: Token, to: address, amount: u64) -> (Token, Token) {
        let my_balance: u64 = token.amount - amount;
        let balance: Token = Token {
            owner: self.caller,
            amount: my_balance,
        };
        let sent: Token = Token {
            owner: to,
            amount: amount,
        };
        return (balance, sent);
    }
}