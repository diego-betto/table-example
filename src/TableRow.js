export default function TableRow(props) {
    return (
        <tr>
            <td><input type="checkbox" /></td>
            <td>{props.nome}</td>
            <td>{props.razza}</td>
            <td>{props.eta}</td>
            <td>{props.showFoto && <img src={props.image} />}</td>
        </tr>
    );
}