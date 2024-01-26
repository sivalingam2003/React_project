function ExampleComponent() {
    const [data, setData]= useState(null);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typecode.com/todos/1')
        .then(response=> response.json())
        .then(result=> setData(result));
        return ()=>{
        };
    },[]);
    return(
        <div>
            {
                data?(
                    <p>Data:{350N.stringsi(data)}</p>
                ):(
                    <p>Loading...</p>
                )
            }
        </div>
    );
}
