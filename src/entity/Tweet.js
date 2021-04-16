module.exports = {
    name: 'Tweet',
    columns: {
        id: {
            primary: true,
            type: 'int',
            generated: true
        },
        title: {
            type: 'varchar',
            length: 80
        },
        content: {
            type: 'varchar',
            length: 300
        }
    },
    relations: {
        user: {
            target: "User",
            type: "many-to-one"
        }
    }
}