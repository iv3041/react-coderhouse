import Logo from "./Logo";
import ItemListContainer from "./ItemsListContainer";
import CartWidget from "./CartWidget";
import ContainerCart from "./ContainerCart";
import ContextCart from "./ContextCart";

const NavBar = () => {

    return (
        <ContextCart>
            <header>
                <div className="containerLogo">
                    <Logo />
                </div>


                <nav className="containerItemList">
                    <ItemListContainer 
                        itemUno = "iPhone"
                        itemDos = "Mac"
                        itemTres = "Watch"
                        itemCuatro = "Accesorios"
                    />
                </nav>

                <div className="containerCart">
                    <CartWidget />
                </div>
                <ContainerCart />
            </header>
            <h1>
                    El mundo de la Manzana Mordida
                </h1>
        </ContextCart>
    )
}

export default NavBar;