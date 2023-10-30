require("./db/db.js");
const express = require('express');
const cors = require('cors');

const { patientRoute } = require('./routers/patient.router.js'); 
const { wardRoute } = require('./routers/ward.router.js'); 
const app = express();
const PORT = process.env.PORT || 3000;




app.use(cors()); 
app.use(express.json()); 

// Routes
app.use('/patients', patientRoute);
app.use('/wards', wardRoute);
app.get("/",(req,res)=>{
  res.send("Hello Express App!!")
})
// Start the server
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});

