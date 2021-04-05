interface RepositoriesState {
    loading: boolean;
    error: string | null;
    data: string[];
}

interface SearchRepositoriesAction {
    type: 'search-repositories';
   }
interface SearchRepositoriesSuccsessAction {
    type: 'search-repositories-success';
    payload: string[];
   }
interface SearchRepositoriesErrorAction {
    type: 'search-repositories-error';
    payload: string;
   }

const reducer = (
    state: RepositoriesState, 
    action: 
    SearchRepositoriesAction | SearchRepositoriesSuccsessAction | SearchRepositoriesErrorAction): RepositoriesState => {
switch (action.type) {
    case 'search-repositories':
        return {loading: true, error: null, data: []}
    case 'search-repositories-success':
        return {loading: false, error:null, data:action.payload}
    case 'search-repositories-error':
        return { loading: false, error: action.payload, data: []}
    default:
        return state;
}
}

export default reducer