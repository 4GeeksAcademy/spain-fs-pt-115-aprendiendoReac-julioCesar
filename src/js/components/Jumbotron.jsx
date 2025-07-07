export const Jumbotron = (props) => {
    return (
        <div >
            <div className="card mb-3" >
                <div className="card-body">
                    <h1 className="card-title">Bienvenido a este casino</h1>
                    <p className="card-text">Te puedes apuntar a la mesa que quieras, te deseo suerte!!</p>
                    <a href={props.buttonURL} className="btn btn-danger" target="_blank">Apostar</a>
                </div>
            </div>
        </div>
    )
}