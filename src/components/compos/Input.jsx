



function Input(props) {

    const {placeholder, className, type } = props

    return(
        <input type={type} placeholder={placeholder} className={className} />
    )
}

export default Input