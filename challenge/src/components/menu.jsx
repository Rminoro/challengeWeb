import { Link } from "react-router-dom"

export default function menu(){

    return(
        <nav className="menu"> 
            <Link to ='/'>PortoHelp</Link>
            <span>|</span>
            <Link to ='/solicitar'>Solicitar Chamado</Link>
            <span>|</span>
            <Link to ='/objetivos'>Objetivos</Link>
            <span>|</span>
            <Link to ='/ChatBot'>Chatbot</Link>
            <span>|</span>
            <Link to ='/sobrenos'>Sobre Nós</Link>
            <span>|</span>
            




        </nav>


    )
}