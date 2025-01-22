import Input from '../../../components/compos/Input'

function Msger3() {


    let imageSvg = (
        <svg width="23px" height="23px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 10V6C4 4.89543 4.89543 4 6 4H12M4.02693 18.329C4.18385 19.277 5.0075 20 6 20H18C19.1046 20 20 19.1046 20 18V14.1901M4.02693 18.329C4.00922 18.222 4 18.1121 4 18V15M4.02693 18.329L7.84762 14.5083C8.52765 13.9133 9.52219 13.8481 10.274 14.3494L10.7832 14.6888C11.5078 15.1719 12.4619 15.1305 13.142 14.5864L15.7901 12.4679C16.4651 11.9279 17.4053 11.8855 18.1228 12.3484C18.2023 12.3997 18.2731 12.4632 18.34 12.5301L20 14.1901M20 14.1901V6C20 4.89543 19.1046 4 18 4H17M11 9C11 10.1046 10.1046 11 9 11C7.89543 11 7 10.1046 7 9C7 7.89543 7.89543 7 9 7C10.1046 7 11 7.89543 11 9Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    )

    let cameraSvg = (
        <svg fill="#ffffff" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
    	 width="24px" height="24px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
            <g>
                <circle cx="50.041" cy="53.256" r="9.513"/>
                <path d="M86.778,24.2v-0.037H70.111v-2.792c0-2.056-1.667-3.722-3.722-3.722H33.611c-2.056,0-3.723,1.666-3.723,3.722v2.792H13.221
                    V24.2c-2.056,0-3.721,1.666-3.721,3.722v50.669c0,2.056,1.665,3.722,3.721,3.722v0.037h73.557v-0.037
                    c2.055,0,3.722-1.667,3.722-3.722V27.922C90.5,25.866,88.833,24.2,86.778,24.2z M50.247,72.542
                    c-10.651,0-19.286-8.634-19.286-19.286c0-10.651,8.635-19.286,19.286-19.286c10.652,0,19.287,8.635,19.287,19.286
                    C69.535,63.908,60.899,72.542,50.247,72.542z M85.513,39.145H70.773v-9.957h14.739V39.145z"/>
            </g>
        </svg>
    )

    let microphone = (
        <svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	    width="18px" height="18px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve">
        <g>
            <path fill="#ffffff" d="M32,44c6.629,0,12-5.371,12-12V12c0-6.629-5.371-12-12-12S20,5.371,20,12v20C20,38.629,25.371,44,32,44z"/>
            <path fill="#ffffff" d="M52,28c-2.211,0-4,1.789-4,4c0,8.836-7.164,16-16,16s-16-7.164-16-16c0-2.211-1.789-4-4-4s-4,1.789-4,4
                c0,11.887,8.656,21.73,20,23.641V60c0,2.211,1.789,4,4,4s4-1.789,4-4v-4.359C47.344,53.73,56,43.887,56,32
                C56,29.789,54.211,28,52,28z"/>
        </g>
        </svg>
    )


    return (
        <div className="Msger3">
            <div className='Msger3Svg'>
                {imageSvg}
                {cameraSvg}
                {microphone}
            </div>
            <Input placeholder="Type a message" className="Msger3Inp" />
            <button className='Msger3Btn' >Send</button>
        </div>
    )
}

export default Msger3