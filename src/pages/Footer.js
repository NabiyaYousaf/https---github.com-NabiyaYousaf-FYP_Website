const Footer=()=>{
    return(
        <>
        <footer className="mt-2">
        <div className="waves my-5">
            <div className="wave" id="wave1"></div>
        </div>
            <ul className="social-icon">
                <li><a><ion-icon name="logo-facebook"></ion-icon></a></li>
                <li><a><ion-icon name="logo-instagram"></ion-icon></a></li>
                <li><a><ion-icon name="logo-twitter"></ion-icon></a></li>
                <li><a><ion-icon name="logo-linkedin"></ion-icon></a></li>
            </ul>
            <ul className="menu">
                <li><a>Home</a></li>
                <li><a>About</a></li>
                <li><a>Contact</a></li>
                <li><a>Services</a></li>
            </ul>
            <p>©2022 MathWithKids | All Rights Reserved</p>
        </footer>
        </>
    )
}

export default Footer;