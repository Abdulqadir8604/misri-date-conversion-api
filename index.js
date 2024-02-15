const app = require('express')();
const cors = require('cors');
const main = require('./main');

const port = 8080;

app.use(cors());

app.get('/gregToMisri/:date', (req, res) => {
    const gDate = req.params.date;
    const dateParts = gDate.split("-")
    const day = dateParts[0].padStart(2, '0')
    const month = dateParts[1].padStart(2, '0')
    const year = dateParts[2]
    const mDate = main.GregToMisri(day, month, year);
    res.status(200).json({
        message: 'Gregorian to Misri',
        data: mDate
    });
});

app.get('/misriToGreg/:date', (req, res) => {
    const mDate = req.params.date;
    const dateParts = mDate.split("-")
    const day = dateParts[0].padStart(2, '0')
    const month = dateParts[1].padStart(2, '0')
    const year = dateParts[2]
    const gDate = main.MisriToGreg(day, month, year);
    res.status(200).json({
        message: 'Misri to Gregorian',
        data: gDate
    });
});


app.listen(port, () => {
    console.log(`Server is running on PORT: ${port}`);
});

