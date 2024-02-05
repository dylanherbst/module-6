function Greet (prop) {
    const { name = 'world', children } = prop;
    return (
        <div className="greet">
   <h2>Helloo <strong>{name}</strong> </h2> 
{children}
</div>
    )

}

export function Greet2 (props) {

    const { name } = props;
    return (
        <div>
            {name ? <p>Name: {name}, HELLO!!</p> : <p>Hello, world!</p>}
        </div>
    )
}
export default Greet

