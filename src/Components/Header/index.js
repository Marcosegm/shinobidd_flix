import "./Header.css"

const Header = (props) => {

    const {btnTexto, click} = props

    const location = window.location.pathname
    const btnHeader = () => {
        if (location === "/") {
            return <a  className="btnHeader" href="/nuevo-video" onClick={click} >{btnTexto}</a>
        } else {
        return <></>
        }
    }

    return (
        <header className="header">
            
            <a href="/">
                <img className="logo" src="/img/logo.png" alt="logo"/>
                <img className="logo2" src="/img/icon-naruto.svg" alt="logo"/>
            </a>
            {btnHeader()}
        </header>
    )
} 

export { Header }