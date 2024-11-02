const client = require('./client');

async function init(){
    const result = await client.get('user3:3');
    console.log("Result -->", result);

    await client.set("msg:1", "Hey! How are you?");
    const result2 = await client.get('msg:1');
    console.log("Message-->", result2);
}

init();