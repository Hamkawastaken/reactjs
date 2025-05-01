import { useCounter } from '../hooks/useCounter'

const Counter = () => {

    const { count, like, handleDecrement, handleIncrement, handleReset, handleLike } = useCounter()

    return (
        <>
        <button onClick={handleDecrement}>Kurang</button>
        <p>{count}</p>
        <button onClick={handleIncrement}>Tambah</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleLike}>{like}</button>
        </>
    )
}

export default Counter