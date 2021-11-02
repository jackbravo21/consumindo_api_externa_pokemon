const express = require("express");
const app = express();
const api = require("./api");

//informando no server que vamos usar o json;
app.use(express.json());


app.get("/teste", (req, res) => {
    return res.send({ message: "Conectado na API"});
});

app.get("/pokemon", async(req, res) => {
    try {
        const { data } = await api.get("pokemon/1");

        return res.send ({ name: data.name }); 

    } catch (error) {
        res.send({ error: error.message });
    }
});

app.get("/ditto", async(req, res) => {
    try {
        const { data } = await api.get("pokemon/ditto");

        return res.send ({ ditto: data });

    } catch (error) {
        res.send({ error: error.message });        
    }
});

app.get("/ditto/name", async(req, res) => {
    try {
        const { data } = await api.get("pokemon/ditto");

        return res.send ({ name: data.name });

    } catch (error) {
        res.send({ error: error.message });        
    }
});

app.get("/ditto/all", async(req, res) => {
    try {
        const { data } = await api.get("pokemon");

        return res.send ({ name: data });

    } catch (error) {
        res.send({ error: error.message });        
    }
});

//dinamico passando o ID:
app.get("/pokemon/:id", async(req, res) => {
    const { id } = req.params;
    try {
        const { data } = await api.get(`pokemon/${id}`);

        return res.send ({ name: data.name });

    } catch (error) {
        res.send({ error: error.message });        
    }
});


app.listen(3000);