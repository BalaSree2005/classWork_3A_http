const http = require('http')

const server = http.createServer((req, res)=>{

    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write(`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Travel Journel</title>
    <link rel="stylesheet" href="./css/style.css">
</head>

<body>
    <header id="nav-bar"></header>

    <nav>
        <a href="./index.html">Home</a>
        <a href="./register.html">Register</a>
        <a href="./login.html">Login</a>
        <a href="./dashboard.html">Dashboard</a>
        <a href="./aboutus.html">About Us</a>
    </nav>
    </header>

    <main>
        <img src="./images/img2.avif" alt="no image" id="bg-img">
        <!-- <form action="#" method="get" class="search-form">
            <input type="text" id="search-box" name="search" placeholder="Search your destination...">
            <button type="submit" id="button">
                <img src="https://cdn-icons-png.flaticon.com/512/149/149852.png" alt="Search" class="search-icon">
            </button>
        </form> -->
        <div id="travel-grid-container">
            <div id="travel-grid-box">
                <!-- Left side: Travel Image -->
                <div id="travel-image">
                    <img src="./images/img1.jpg" alt="Travel Destination">
                </div>
    
                <!-- Right side: Travel Information -->
                <div id="travel-info">
                    <h2>Beautiful Destination</h2>
                    <p>
                        Discover the breathtaking beauty of this incredible place. From its stunning landscapes to its rich cultural heritage, 
                        this destination offers an unforgettable experience for travelers. Enjoy scenic views, immerse yourself in local traditions, 
                        and explore historic landmarks.
                    </p>
                    <p>
                        Whether you're seeking adventure or relaxation, this destination has something for everyone. Visit us today and make memories 
                        that will last a lifetime!
                    </p>
                </div>
            </div>
        </div>
    </main>

    <footer>
        <div class="foot">
            <h6>@ Copyright Reserved..!</h6>
        </div>
        <div class="images" id="logos">
            <!-- <img src="./assetes/images/icon-favicon.png" alt="no image found"> -->
            <img src="./images/icon-facebook.svg" alt="no image found">
            <img src="./images/icon-twitter.svg" alt="no image found">
            <img src="./images/icon-instagram.svg" alt="no image found">
        </div>
    </footer>

</body>

</html>`)
   
    res.end()
})

server.listen(4050, ()=>{
    console.log("Server is running @ http://localhost:4050")
})