import React from "react"
import facebook from "../Facebook_Icon.png"
import instagram from "../Instagram_Icon.png"
import github from "../GitHub_Icon.png"
import twitter from "../Twitter_Icon.png"

export default function Foot(){
    return(
        <div className="footer">
            <a href="https://www.facebook.com/profile.php?id=100006081196936&mibextid=ZbWKwL">
                <img
                    src={facebook}
                    alt="Facebook"
                    className="face"
                />
            </a>
            <a href="https://www.instagram.com/invites/contact/?i=12ycuesclaiz3&utm_content=86xci37">
                <img
                    src={instagram}
                    alt="instagram"
                    className="insta"
                />
            </a>
            <a href="https://twitter.com/sammykhan590?t=GHuTXROSuGrwLfQfOvu7vw&s=09">
                <img
                    src={twitter}
                    alt="twitter"
                    className="twitter"
                />
            </a>
            <a href="https://github.com/Sammykhan214">
                <img
                    src={github}
                    alt="github"
                    className="github"
                />
            </a>
        </div>
    )
}