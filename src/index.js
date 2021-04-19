const typeorm = require('typeorm');
var EntitySchema = typeorm.EntitySchema;

typeorm.createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "learning",
    password: "learning",
    database: "social_network",
    synchronize: true,
    entities: [
        new EntitySchema(require('./entity/User')),
        new EntitySchema(require('./entity/Tweet'))
    ]
}).then(async connection => {
    var user = {
        firstName: 'munsif',
        lastName: 'ali',
        age: 25,
        f: 's'
    }

    var userRepo = connection.getRepository("User");
    userRepo.save(user)
        .then(savedUser => {
            console.log("post have been saved: ", savedUser);
            var tweet = {
                title: 'This is munsifali tweet',
                content: 'This tweet is done during typeorm js example',
                user: savedUser
            }
            var tweetRepo = connection.getRepository("Tweet");
            tweetRepo.save(tweet)
                .then(savedTweet => {
                    console.log('tweet have been saved: ', savedTweet);
                })
                .catch(err => {
                    console.log('received error while saving tweet: ', err);
                })
        })
        .catch(err => {
            console.log('received error while saving user: ', err);
        });
}).catch(err => {
    console.log('error while creating connection: ', err);
})