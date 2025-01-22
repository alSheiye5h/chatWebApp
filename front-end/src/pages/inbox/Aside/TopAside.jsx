


function TopAside() {

    let txt = "orem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, tempora repellendus? Possimus dicta, debitis ab id voluptas vitae,";

    return (
        <div className="topAside" >
            <img src="/public/50px.jpg" className="asidePrfImg" alt="" />
            <p className="asidePrfUsn">anyUsernameHer</p>
            <span className="asidePrfBio">{(txt.length > 75) ? txt.slice(0, 75) + "..." : txt }</span>
        </div>
    )
}

export default TopAside