import Input from "../../../components/compos/Input"    
import Button from "../../../components/compos/Button"    


function ListSearchBar() {


    return (
        <div className="ListSearchBar">
            <Input className="SearchBar" placeHolder="search"  />
            <button className="SearchBtn">+</button>
        </div>
    )
}

export default ListSearchBar