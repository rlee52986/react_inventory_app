type Item {
    id: ID;
    name: String;
    date: String;
    location: String;
    amount: Int;
};

type Activity {
    id: ID
    name: String!
    date: String
    description: String
}

query {
    getItems(id: ID): Item {
        
    }
}

mutation {
    createItem(name: "Miles", date: "11/21/2021", location: "Kitchen", amount: 4): Item {
        name
        date
        amount
    }
}