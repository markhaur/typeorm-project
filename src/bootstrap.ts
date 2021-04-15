import { getRepository } from "typeorm"
import { Tweet } from "./entity/Tweet";
import { User } from "./entity/User"

export const Bootstrap = async () => {
    const userRepo = getRepository(User);
    const user = userRepo.create({
        firstName: "Alex",
        lastName: "Brooks",
        age: 22
    });

    await userRepo.save(user).catch(err => {
        console.log("Error: ", err);
    });

    console.log("New User saved", user);

    const tweetRepo = getRepository(Tweet);
    const tweet = new Tweet();
    tweet.title = "I finally got a new job";
    tweet.content = "Well after a long time I landed my dream job on netflix";
    tweet.user = Promise.resolve(user);

    await tweetRepo.save(tweet).catch(err => console.log(err));
}

export const find = async () => {
    const userRepo = getRepository(User);

    const user = await userRepo.findOne({ where: { firstName: 'Alex' } }).catch(err => console.log(err));

    if(user){
        // await is added before user.tweets because we are doing lazy loading here.
        // user.tweets is returning Promise of Tweet array.
        console.log('found user: ', user, await user.tweets);
    }
    
    return user;
}