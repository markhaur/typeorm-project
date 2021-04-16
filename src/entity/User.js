
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
        },
        f: {
            type: 'enum',
            nullable: true,
            enum: [
                'f',
                'd',
                's'
            ]
        }
    },
    relations: {
        tweets: {
            target: 'Tweet',
            type: 'one-to-many'
        }
    }
}