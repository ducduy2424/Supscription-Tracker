import express from 'express'
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to Supcription Tracker API');
})

app.listen(3000, () => {
    console.log('Supcrition Tracker API is running on http://localhost:3000');
})

export default app;