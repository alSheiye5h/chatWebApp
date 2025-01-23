

function Msger2() {

    let msgs = [
    {        
        msg: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        from: "self"
    },
    {        
        msg: "Ipsa perspiciatis facere sunt ex officia,",
        from: "self"
    },
    {        
        msg: "voluptatibus doloribus voluptate aspernatur",
        from: "other"
    },
    {       
        msg: "tempore omnis. Quia provident",
        from: "self"
    },
    {        
        msg: "illum magnam vero aspernatur eos. Accusantium, adipisci optio?",
        from: "other"
    },
    {        
        msg: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        from: "self"
    },
    {        
        msg: "Ipsa perspiciatis facere sunt ex officia,",
        from: "self"
    },
    {        
        msg: "voluptatibus doloribus voluptate aspernatur",
        from: "other"
    },
    {       
        msg: "tempore omnis. Quia provident",
        from: "self"
    },
    {        
        msg: "illum magnam vero aspernatur eos. Accusantium, adipisci optio?",
        from: "other"
    },
    {        
        msg: "illum magnam vero aspernatur eos. Accusantium, adipisci optio?",
        from: "other"
    }
    ]

    let renderMsgs = msgs.map((m, index) => {
        
        if (m.from == "self") {
            return (index != 0 && m.from == msgs.at(index - 1).from) ? <span className="Msger2Self">{m.msg}</span> : <p className="Msger2Self">{m.msg}</p>;
        } else {
            return (index != 0 && m.from == msgs.at(index - 1).from) ? <span className="Msger2Other">{m.msg}</span> : <p className="Msger2Other">{m.msg}</p>;
        }
    })


    return (
        <div className="Msger2">
            {/* <img className="Msger2SelfImg" src="/public/MainAfter.jpg" />
            <img className="Msger2OtherImg" src="/public/MainAfter.jpg" /> */}
            {renderMsgs}
        </div>
    )
}

export default Msger2