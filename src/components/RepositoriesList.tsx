import { useState } from "react";
// import { useSelector } from "react-redux";
import { useTypedSelector } from "../hooks/useTypedSelector";
// import { useDispatch } from "react-redux";
// import { actionCreators } from "../state";
import { useActions } from "../hooks/useActions";

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
return <div>
    <form onSubmit={onSubmit}>
        <input value={term} onChange={e => setTerm(e.target.value)}/>
        <button>Search</button>
    </form>
</div>
}

export default RepositoriesList;