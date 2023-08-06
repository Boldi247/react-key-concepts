export default function Header(props) {
    return (
        <header>
            <img src={props.image} alt={props.altText} />
            <h1>{props.headerText}</h1>
            <p>{props.descriptionText}</p>
        </header>
    );
}