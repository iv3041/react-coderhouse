import { Link } from "react-router-dom";

const ItemListContainer = (props) => {
    return(
        <ul>
            <li>
                <Link to="category/iPhone"> 
                    {props.itemUno} 
                </Link>
            </li>

            <li>
                <Link to="category/Mac">
                    {props.itemDos}
                </Link>
            </li>

            <li>
                <Link to="category/Watch">
                    {props.itemTres}
                </Link>
            </li>

            <li>
                <Link to="category/Accesorios">
                    {props.itemCuatro}
                </Link>
            </li>
        </ul>
    )
}

export default ItemListContainer;