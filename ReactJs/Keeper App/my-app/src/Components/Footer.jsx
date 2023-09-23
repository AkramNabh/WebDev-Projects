import './Public/Main.css'

function Footer(){
    const d = new Date();
    const year = d.getFullYear();

    return(
        <div className="footer">
            <footer>copyright @ {year}</footer>
        </div>
    )
}


export default Footer;