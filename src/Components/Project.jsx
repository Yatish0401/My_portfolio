
import style from "./project.module.css"
import emppng from "../Video/game.png"
import ecom from "../Video/Food.png"
import moto from "../Video/song.png"
const Project = () => {
  return (
    <div id={style.maindiv}>
    <div id={style.outeronediv}>
        <div id={style.upperonediv}>
            <div id={style.hometouchdiv}>
                <p><a href="">Home</a> &gt;&nbsp;</p><p>Projects</p>
            </div>
            <h1 id={style.gettouch}>My <span className={style.redtxt}> Projects</span></h1>
            <hr />
        </div>
        <div id={style.loweronediv}>
          <div id={style.projectdiv1} className={style.projectdiv}>
          <a href="https://yatish0401.github.io/Tic_Tac_Toy/"> <img src={emppng} alt="" /></a>
            <div className={style.infocard}>

              <p>Tic_Tac_Toy</p>
              <p><a href="https://yatish0401.github.io/Tic_Tac_Toy/"><i class="fa-brands fa-github"></i> GitHub</a></p>
            </div>
          </div>
          <div id={style.projectdiv2} className={style.projectdiv}>
          <a href="https://yatish0401.github.io/Spotify_Song_Page/"> <img src={moto} alt="" /></a>
          <div className={style.infocard}>
          <p>Spotify_song_page</p>
              <p><a href="https://yatish0401.github.io/Spotify_Song_Page/"><i class="fa-brands fa-github"></i> GitHub</a></p>
          </div>
          </div>
          <div id={style.projectdiv3} className={style.projectdiv}>
         <a href="https://yatish0401.github.io/Food_Order/"> <img src={ecom} alt="" /></a>
          <div className={style.infocard}>
          <p>Food_Order</p>
              <p><a href="https://yatish0401.github.io/Food_Order/"><i class="fa-brands fa-github"></i> GitHub</a></p>
          </div>
          </div>
        
        </div>
    </div>
    </div>
  )
}

export default Project