import ListProfile from "./List/ListProfile"
import ListSearchBar from "./List/ListSearchBar"
import Partie from "./List/Partie"


function List() {



    return (
    <section className="List">
        <ListProfile />
        <ListSearchBar />
        <Partie />
    </section>   
    )


}

export default List