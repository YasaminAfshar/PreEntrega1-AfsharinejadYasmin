
//Importar archivos complementarios
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

//Import material de ICONS
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import AddLocationAltRoundedIcon from "@mui/icons-material/AddLocationAltRounded";

//Importa el archivo de CSS
import style from "./Footer.module.css"


const Footer = () => {

  return (
    <div className={style.containerFooter}>
      <div className={style.containerRedes}>
        <div className={style.logotype}>
          <img
            src="https://res.cloudinary.com/dsrdpgpzy/image/upload/v1678320588/MULTIMEDIA/img/logotype_gfq2dz.png"
            alt=""
          />
        </div>
        <div>
          <Typography
            variant="h5"
            sx={{
              fontFamily: "'PT Serif', serif",
              fontSize: "1.4em",
              color: "white",
              textAlign: "center",
              margin: "5px auto",
              padding: "0",
            }}
          >
            Seguinos en nuestras redes
          </Typography>
          ;
          <div className={style.containerFooterImg}>
            <Link href="https://www.facebook.com/" target="_blank">
              <img
                src="https://res.cloudinary.com/dsrdpgpzy/image/upload/v1676764506/MULTIMEDIA/iconos/facebook_axt5pi.png"
                alt=""
                className={style.footerImg}
              />
            </Link>
            <Link href="https://www.instagram.com/?hl=es-la" target="_blank">
              <img
                src="https://res.cloudinary.com/dsrdpgpzy/image/upload/v1676764507/MULTIMEDIA/iconos/instagram_odbdqy.png"
                alt=""
                className={style.footerImg}
              />
            </Link>
            <Link href="https://twitter.com/?lang=es" target="_blank">
              <img
                src="https://res.cloudinary.com/dsrdpgpzy/image/upload/v1676764507/MULTIMEDIA/iconos/twitter_tmch9b.png"
                alt=""
                className={style.footerImg}
              />
            </Link>
          </div>
        </div>
      </div>

      <div className={style.containerInfo}>
        <div className={style.infoContacto}>
          <div className={style.infoBox}>
            <Typography
              variant="h5"
              sx={{
                fontFamily: "'PT Serif', serif",
                fontSize: "1.4em",
                color: "white",
                textAlign: "center",
                margin: "5px auto",
                padding: "0",
                textDecoration: "underline wavy 1px",
              }}
            >
              Más información
            </Typography>
            <ul>
              <li>
                <EmailRoundedIcon
                  sx={{
                    fontSize: 30,
                    marginRight: "10px",
                    marginBottom: "-5px",
                  }}
                />
                mundolana@gmail.com
              </li>
              <li>
                <CallRoundedIcon
                  sx={{
                    fontSize: 30,
                    marginRight: "10px",
                    marginBottom: "-5px",
                  }}
                />
                +54 911 23875518
              </li>
              <li>
                <AddLocationAltRoundedIcon
                  sx={{
                    fontSize: 30,
                    marginRight: "10px",
                    marginBottom: "-5px",
                  }}
                />
                Avenida Santa Fe 1872, Recoleta
              </li>
            </ul>
          </div>
        </div>
        <Typography
          variant="subtitle1"
          component="h2"
          sx={{
            fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
            fontSize: "0.9em",
            color: "white",
            textAlign: "center",
            margin: "10px auto",
            padding: "0",
          }}
        >
          Copyright -Información relacionada al copyright-
        </Typography>
        ;
      </div>
    </div>
  );
}

export default Footer