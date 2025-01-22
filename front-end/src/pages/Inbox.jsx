import List from "./inbox/List"
import Msger from "./inbox/Msger"
import Aside from "./inbox/Aside"

function Inbox() {

    return (
        <article className="articleInbox">
            <List />
            <Msger />
            <Aside />
        </article>
    )



}

export default Inbox