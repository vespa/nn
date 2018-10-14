const INITIAL_STATE = {};
const LIST_GET_DATA = 'LIST_GET_DATA';
const LIST_REQUEST = 'LIST_REQUEST';
const LIST_LOADED = 'LIST_LOADED';
const LIST_ERROR = 'LIST_LOADED';

function listError() {
  return {
    type: LIST_ERROR,
    loading: false,
    message: 'Alguma coisa deu errada. Por favor, tente novamente em alguns minutos',
  };
}

function listLoaded(list) {
  return {
    type: LIST_LOADED,
    list,
    loading: false,
  };
}

function listRequesst() {
  return {
    type: LIST_REQUEST,
    loading: true,
  };
}

function listGetData() {
  return (dispatch) => {
    dispatch(listRequesst());
    return fetch('http://localhost:3000/api')
      .then(res => res.json())
      .then((value) => {
        dispatch(listLoaded(value));
        return value;
      })
      .catch((err) => {
        dispatch(listError(err));
      });
  };
}

const reducer = (state = INITIAL_STATE, action = { type: 'none' }) => {
  const { type } = action;
  switch (type) {
    case LIST_REQUEST:
      return { ...state, loading: action.loading };

    case LIST_GET_DATA:
      return { ...state, options: action.options };
    case LIST_LOADED:
      return {
        ...state,
        loading: action.loading,
        list: action.list,
      };
    case LIST_ERROR:
      return { ...state, loading: action.message };

    default:
      return state;
  }
};

export {
  LIST_GET_DATA,
  listGetData,
  reducer as list,
};
