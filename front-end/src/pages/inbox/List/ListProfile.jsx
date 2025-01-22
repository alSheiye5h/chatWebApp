import Img from "../../../components/compos/Img"

const videoCall = <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
width="22px" height="22px" className="videoCallSvg" viewBox="0 0 64.000000 64.000000"
preserveAspectRatio="xMidYMid meet">
    <g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
    fill="#ffffff" stroke="none">
        <path d="M110 482 l-30 -30 0 -122 c0 -115 1 -122 25 -145 23 -24 28 -25 175
        -25 147 0 152 1 175 25 24 23 25 30 25 144 0 112 -2 122 -24 148 -24 28 -24
        28 -170 31 l-146 3 -30 -29z"/>
        <path d="M548 434 c-27 -14 -28 -17 -28 -104 l0 -90 38 -19 c58 -30 63 -21 60
        110 -3 105 -4 114 -23 116 -11 2 -32 -4 -47 -13z"/>
    </g>
</svg>

const threeP = <svg fill="#ffffff" height="22px" width="22px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
viewBox="0 0 32.055 32.055" xml:space="preserve" className="threeP">
<g>
<path d="M3.968,12.061C1.775,12.061,0,13.835,0,16.027c0,2.192,1.773,3.967,3.968,3.967c2.189,0,3.966-1.772,3.966-3.967
   C7.934,13.835,6.157,12.061,3.968,12.061z M16.233,12.061c-2.188,0-3.968,1.773-3.968,3.965c0,2.192,1.778,3.967,3.968,3.967
   s3.97-1.772,3.97-3.967C20.201,13.835,18.423,12.061,16.233,12.061z M28.09,12.061c-2.192,0-3.969,1.774-3.969,3.967
   c0,2.19,1.774,3.965,3.969,3.965c2.188,0,3.965-1.772,3.965-3.965S30.278,12.061,28.09,12.061z"/>
</g>
</svg>

const newMsg = <svg fill="#ffffff" width="22px" height="22px" version="1.1" viewBox="144 144 512 512" xmlns="http://www.w3.org/2000/svg">
<g>
 <path d="m601.52 198.48c-12.598-12.598-29.129-18.895-45.66-18.895s-33.062 6.2969-45.656 18.895l-173.18 173.18v91.316h91.316l173.18-173.18c25.188-25.191 25.188-66.129 0-91.316zm-22.043 68.484-164.52 164.53h-46.445v-46.445l164.52-164.53c6.2969-6.2969 14.168-9.4453 23.617-9.4453 9.4453 0 17.32 3.1484 23.617 9.4453 11.805 13.383 11.805 33.852-0.78906 46.445z"/>
 <path d="m557.44 545.63c0 23.617-19.68 43.297-43.297 43.297l-259.77-0.003907c-23.617 0-43.297-19.68-43.297-43.297v-259.77c0-23.617 19.68-43.297 43.297-43.297h129.89v-31.488h-129.89c-40.938 0-74.785 33.848-74.785 74.785v258.99c0 41.723 33.852 74.785 74.785 74.785h258.99c41.723 0 74.785-33.852 74.785-74.785v-129.1h-31.488v129.89z"/>
</g>
</svg>


function ListProfile() {
    return (
        <div className="ListProfile">
        <Img src="/public/50px.jpg" />
        <p className="ListUsername">al_shaye5h</p>
            <div className="ListProfileNest">
            {threeP}
            {videoCall}
            {newMsg}
            </div>
      </div>
    )
}
export default ListProfile