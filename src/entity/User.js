
module.exports = {
    name: "User",
    columns: {
        id: {
            primary: true,
            type: 'int',
            generated: true
        },
        firstName: {
            type: 'varchar',
            length: 20
        },
        lastName: {
            type: 'varchar',
            length: 20
        },
        age: {
            type: 'int'
        }
    },
    relations: {
        tweets: {
            target: 'Tweet',
            type: 'one-to-many'
        }
    }
}