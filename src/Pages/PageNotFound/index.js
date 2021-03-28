import React from 'react';
import "./style.css"


function Page() {
    document.title = "Página não encontrada"
    return (
        <main className="page404">
            <div>
                <h1>Página não encontrada</h1>
                <a href="/"><button>Voltar a pagina</button></a>
            </div>
        </main>
    )
}

export default Page