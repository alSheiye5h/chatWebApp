

function Msger1() {
    let callSvg = (
        <svg width="20px" height="20px" viewBox="0 0 15 15" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    
    <title>call [#192]</title>
    <desc>Created with Sketch.</desc>
    <defs>

    </defs>
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Dribbble-Light-Preview" transform="translate(-103.000000, -7321.000000)" fill="#ffffff">
                <g id="icons" transform="translate(56.000000, 160.000000)">
                    <path d="M61.7302966,7173.99596 C61.2672966,7175.40296 59.4532966,7176.10496 58.1572966,7175.98796 C56.3872966,7175.82796 54.4612966,7174.88896 52.9992966,7173.85496 C50.8502966,7172.33496 48.8372966,7169.98396 47.6642966,7167.48896 C46.8352966,7165.72596 46.6492966,7163.55796 47.8822966,7161.95096 C48.3382966,7161.35696 48.8312966,7161.03996 49.5722966,7161.00296 C50.6002966,7160.95296 50.7442966,7161.54096 51.0972966,7162.45696 C51.3602966,7163.14196 51.7112966,7163.84096 51.9072966,7164.55096 C52.2742966,7165.87596 50.9912966,7165.93096 50.8292966,7167.01396 C50.7282966,7167.69696 51.5562966,7168.61296 51.9302966,7169.09996 C52.6632966,7170.05396 53.5442966,7170.87696 54.5382966,7171.50296 C55.1072966,7171.86196 56.0262966,7172.50896 56.6782966,7172.15196 C57.6822966,7171.60196 57.5872966,7169.90896 58.9912966,7170.48196 C59.7182966,7170.77796 60.4222966,7171.20496 61.1162966,7171.57896 C62.1892966,7172.15596 62.1392966,7172.75396 61.7302966,7173.99596 C61.4242966,7174.92396 62.0362966,7173.06796 61.7302966,7173.99596" id="call-[#192]">

    </path>
                </g>
            </g>
        </g>
    </svg>
      );

      const videoCall = (<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
        width="50px" height="50px" className="videoCallSvg" viewBox="0 0 64.000000 64.000000"
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
        );

        let help = (
            <svg fill="#ffffff" width="22px" height="22px" viewBox="0 0 36 36" version="1.1"  preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>help-info-solid</title>
                <circle cx="20.75" cy="6" r="4" class="clr-i-solid clr-i-solid-path-1"></circle><path d="M24.84,26.23a1,1,0,0,0-1.4.29,16.6,16.6,0,0,1-3.51,3.77c-.33.25-1.56,1.2-2.08,1-.36-.11-.15-.82-.08-1.12l.53-1.57c.22-.64,4.05-12,4.47-13.3.62-1.9.35-3.77-2.48-3.32-.77.08-8.58,1.09-8.72,1.1a1,1,0,0,0,.13,2s3-.39,3.33-.42a.88.88,0,0,1,.85.44,2.47,2.47,0,0,1-.07,1.71c-.26,1-4.37,12.58-4.5,13.25a2.78,2.78,0,0,0,1.18,3,5,5,0,0,0,3.08.83h0a8.53,8.53,0,0,0,3.09-.62c2.49-1,5.09-3.66,6.46-5.75A1,1,0,0,0,24.84,26.23Z" class="clr-i-solid clr-i-solid-path-2"></path>
                <rect x="0" y="0" width="36" height="36" fill-opacity="0"/>
            </svg>
        );


    return (
        <div className="Msger1">       
            <img src="/public/50px.jpg" className="msger1Img" alt="" /> 
            <p className="Msger1P">
                <span className="Msger1Span1">any username here</span>
                <span className="Msger1Span2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, maiores. Rerum, inventore quo. Laborum eligendi provident quaerat aut. Expedita labore earum aliquid placeat amet ratione mol</span>
            </p>
            <div className="Msger1DivSvg">
                {callSvg}    
                {videoCall}
                {help}
            </div>
        </div>
    )
}

export default Msger1