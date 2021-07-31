import React from "react";
import "./Footer.css";
import tmdbIcon from "./assets/tmdb.svg";

function Footer() {
  return (
    <div className="footer">
			<img src={tmdbIcon} />
			<p>
				<a href="https://nirdeshkumar02portfolio.web.app">@nirdeshkumar02 </a> | <a href="https://github.com/nirdeshkumar02"> GitHub</a>
			</p>
		</div>
  )
}
export default Footer;