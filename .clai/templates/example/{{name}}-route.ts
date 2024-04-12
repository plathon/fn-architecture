import { app } from "./index"

app.get('/{{name}}', (req, res) => {
    res.send('{{name}}')
})