import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { actionCreators } from "../state";
import { useActions } from "../hooks/useActions";

const RepositoriesList: React.FC = () => {
    const [term, setTerm] = useState('')
    // const dispatch = useDispatch()
    const {searchRepositories} = useActions()

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        // dispatch(actionCreators.searchRepositories(term))
        searchRepositories(term)
    }
return <div>
    <form onSubmit={onSubmit}>
        <input value={term} onChange={e => setTerm(e.target.value)}/>
        <button>Search</button>
    </form>
</div>
}

export default RepositoriesList;