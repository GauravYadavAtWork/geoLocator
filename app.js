// const express = require('express');
// const useragent = require('express-useragent');

// const app = express();
// const port = 3000;

// app.use(useragent.express());
// app.set('trust proxy', true);

// app.get('/user-info', (req, res) => {
//     const userAgent = req.useragent;
//     const ip = req.ip;

//     const userInfo = {
//         device: userAgent.isMobile ? 'Mobile' : 'Desktop',
//         browser: {
//             name: userAgent.browser,
//             version: userAgent.version,
//         },
//         IpAddress: ip,
//     };
//     console.log(userInfo);
//     res.json(userInfo);
// });

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });


// const express = require('express');
// const useragent = require('express-useragent');
// const axios = require('axios');

// const app = express();
// const port = 3000;

// app.use(useragent.express());

// app.get('/user-info', async (req, res) => {
//     const userAgent = req.useragent;

//     // Get the client's public IP address by making a request to an external service
//     let ip;
//     try {
//         const response = await axios.get('https://httpbin.org/ip');
//         ip = response.data.origin;
//     } catch (error) {
//         console.error('Error fetching IP address:', error);
//         ip = 'Unknown';
//     }

//     const userInfo = {
//         device: userAgent.isMobile ? 'Mobile' : 'Desktop',
//         browser: {
//             name: userAgent.browser,
//             version: userAgent.version,
//         },
//         IpAddress: ip,
//     };
//     res.json(userInfo);
// });

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });




const express = require('express');
const useragent = require('express-useragent');
const axios = require('axios');

const app = express();
const port = 3000;

app.use(useragent.express());

app.get("/", (req, res) => {
    res.render("welcome.ejs");
})

app.get('/find', async (req, res) => {
    res.render("locationNew.ejs");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});