// TUGAS 4 ============================================================================

let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: 
    {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
};
console.log(data);

data = {...data,
        name: "Ahsinu Wahyu Utomo Galang Ananda",
        email: "galang707@gmail.com",
        hobbies: [
            "read",
            "watch film",
            "sleep"
        ]
};

console.log(data);

const {street, city} = data.address;

console.log(`city : ${city}
street : ${street}`);