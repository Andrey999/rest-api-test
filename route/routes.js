const getImages = [
    { id: 0,  title: "alpine",       description: "alpine",       url: "img/alpine-road.jpg" },
    { id: 1,  title: "road",         description: "road",         url: "img/amazing-road.jpg" },
    { id: 2,  title: "boat",         description: "boat",         url: "img/boat.jpg" },
    { id: 3,  title: "autumn",       description: "autumn",       url: "img/autumn-colors.jpg" },
    { id: 4,  title: "beach",        description: "beach",        url: "img/beach.jpg" },
    { id: 5,  title: "sunset",       description: "sunset",       url: "img/beautiful-sunset.jpg" },
    { id: 6,  title: "bright",       description: "bright",       url: "img/bright-blue.jpg" },
    { id: 7,  title: "wave",         description: "wave",         url: "img/crushing-wave.jpg" },
    { id: 8,  title: "dunes",        description: "dunes",        url: "img/dunes.jpg" },
    { id: 9,  title: "evening",      description: "evening",      url: "img/evening.jpg" },
    { id: 10, title: "iceland",      description: "iceland",      url: "img/iceland.jpg" },
    { id: 11, title: "italy",        description: "italy",        url: "img/italy.jpg" },
    { id: 12, title: "man",          description: "man",          url: "img/man.jpg" },
    { id: 13, title: "mountains",    description: "mountains",    url: "img/mountains.jpg" },
    { id: 14, title: "san-fran",     description: "san-fran",     url: "img/san-fran.jpg" },
    { id: 15, title: "sf",           description: "sf",           url: "img/san-francisco.jpg" },
    { id: 16, title: "evening",      description: "evening",      url: "img/sunset-evening.jpg" },
    { id: 17, title: "ocean",        description: "ocean",        url: "img/sunset-ocean.jpg" },
    { id: 18, title: "waterfall",    description: "waterfall",    url: "img/waterfall.jpg" },
    { id: 19, title: "texture",      description: "texture",      url: "img/architecture.jpg" },
    { id: 20, title: "winter",       description: "winter",       url: "img/winter-camping.jpg" },
];


const router = app => {
    app.get('/getImages', (request, response) => { // request  route
        response.send(getImages);  // sending data to index.js
    });
};

module.exports = router;  // export  function  router
