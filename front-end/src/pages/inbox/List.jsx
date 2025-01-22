import ListProfile from "./List/ListProfile"
import ListSearchBar from "./List/ListSearchBar"
import Partie from "./List/Partie"


function List() {



    return (
    <section className="List">
        <ListProfile />
        <ListSearchBar />
        <div className="divParties" >
            <Partie />
            <Partie />
            <Partie />
            <Partie />
            <Partie />
            <Partie />
            <Partie />
        </div>
    </section>   
    )


}

export default List