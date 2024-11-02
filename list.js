const client = require("./client");

async function init(){
    await client.lpush("messages","hey");
    await client.lpush("messages","hello");
    await client.lpush("messages","hi");
    await client.lpush("messages","heyaa");

    const result = await client.lpop("messages");
    console.log(result);
}

init();