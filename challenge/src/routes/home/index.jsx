import { Link } from 'react-router-dom'
export default function Home(){

    return(
        <main>
            <h1>Home</h1>
            <div id="Container1">
            <p>Com a Porto Help você pode mais!
                <h2> Buscamos criar um layout simples interativo mas sem 
                    deixar de lado um design atrativo e intessante
                </h2>
            </p>
            </div>
        {/* container a direita com botão infos de chamao*/} 
        <div>
            <h1>Aqui você poderá realizar o chamado de um modal de forma rápida e prática!</h1>
            <p>A Porto Help visa auxiliar nossos clientes com o objetivo de realizar um atendimento eficaz e com praticidade,
                buscando o melhor para todos os usuários, independente ed faixa etária/conhecimento. Para isso iremos utilizar
                de métodos com fácil utilização e que atendam todas as necessidades
            </p>
            <Link to ="/solicitar">
                <button>Realizar Chamado</button>
            </Link>
        </div>

        <div> 
            <p>Entenda um pouco mais sobre o projeto Porto Help </p>
            <Link to ="/objetivos">
                <button>Objetivos</button>
            </Link>
        </div>

        <div>
            <p>Visamos atender o chamado de veículos pesados, buscando relizar o chmado para as seguintes categorias:</p>
            <p>Caminhões</p><p>Ônibus</p><p>Trailers</p>
        </div>
        </main>
    )
}