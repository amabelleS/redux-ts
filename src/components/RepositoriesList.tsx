import { useState } from "react";
// import { useSelector } from "react-redux";
import { useTypedSelector } from "../hooks/useTypedSelector";
// import { useDispatch } from "react-redux";
// import { actionCreators } from "../state";
import { useActions } from "../hooks/useActions";

import './RepositoriesList.css'

const RepositoriesList: React.FC = () => {
    const [term, setTerm] = useState('')
    // const dispatch = useDispatch()
    const {searchRepositories} = useActions()
    const {data, loading, error} = useTypedSelector((state) => state.repositories)
    // console.log(state);
    

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        // dispatch(actionCreators.searchRepositories(term))
        searchRepositories(term)
    }
return <div className="list">
    <form onSubmit={onSubmit}>
        <input className="search-input" value={term} onChange={e => setTerm(e.target.value)}/>
        <button className="button">Search</button>
    </form>
    <div className="list-items">
    {error && <h3>{error}</h3>}
    {loading && <h3>Loading...</h3>}
    {!error && !loading && data.map(name => <div key={name}>{name}</div>)}</div>
</div>
}

export default RepositoriesList;