const express = require('express');
var cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const port = 5000;

app.get('/', (req, res) => {
    res.send('hello second node app run second time');
})

const users = [
    { id: 0, name: "aftab" },
    { id: 1, name: "uddin" },
    { id: 2, name: "arif" }
]
app.get('/users', (req, res) => {
    const search = req.query.search;

    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search))
        res.send(searchResult);
    }
    else {
        res.send(users);
    }
})
app.post('/users',(req,res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting',req.body);
    res.json(newUser);
})
app.get('/user/:id', (req, res) => {
    const index = req.params.id;
    const user = users[index];
    res.send(user);
})
app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('yammy yeammy tok marka fazli');
})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})