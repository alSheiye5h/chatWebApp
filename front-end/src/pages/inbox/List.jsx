import Img from "../../components/compos/Img"

const videoCall = <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
width="64.000000pt" height="64.000000pt" className="videoCallSvg" viewBox="0 0 64.000000 64.000000"
preserveAspectRatio="xMidYMid meet">
    <g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
    fill="#000000" stroke="none">
        <path d="M110 482 l-30 -30 0 -122 c0 -115 1 -122 25 -145 23 -24 28 -25 175
        -25 147 0 152 1 175 25 24 23 25 30 25 144 0 112 -2 122 -24 148 -24 28 -24
        28 -170 31 l-146 3 -30 -29z"/>
        <path d="M548 434 c-27 -14 -28 -17 -28 -104 l0 -90 38 -19 c58 -30 63 -21 60
        110 -3 105 -4 114 -23 116 -11 2 -32 -4 -47 -13z"/>
    </g>
</svg>

const threeP = <svg fill="#000000" height="800px" width="800px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
viewBox="0 0 32.055 32.055" xml:space="preserve" className="threeP">
<g>
<path d="M3.968,12.061C1.775,12.061,0,13.835,0,16.027c0,2.192,1.773,3.967,3.968,3.967c2.189,0,3.966-1.772,3.966-3.967
   C7.934,13.835,6.157,12.061,3.968,12.061z M16.233,12.061c-2.188,0-3.968,1.773-3.968,3.965c0,2.192,1.778,3.967,3.968,3.967
   s3.97-1.772,3.97-3.967C20.201,13.835,18.423,12.061,16.233,12.061z M28.09,12.061c-2.192,0-3.969,1.774-3.969,3.967
   c0,2.19,1.774,3.965,3.969,3.965c2.188,0,3.965-1.772,3.965-3.965S30.278,12.061,28.09,12.061z"/>
</g>
</svg>

function List() {



    return (
    <section className="List">
        <div className="ListProfile">
            <Img src="/public/50px.jpg" />
            <p className="ListUsername">al_shaye5h</p>
            <div>
                {videoCall}
                {threeP}
            </div>
        </div>
    </section>   
    )


}

export default List