import PropTypes from "prop-types";

export const GifGridItem = ({ id, title, url }) => {
    return (
        <div className="card animate__animated animate__fadeIn">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    );
}

GifGridItem.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
};

//UNIT TESTING
/*
configurar enzime
configurar enzime to json
test: debe de mostrar el componente correctamente
    -usar shallow
    -el wrapper debe matchear el snapshot
*/