import { createStore } from 'vuex'

export default createStore({
  state: {  //데이터
    todos: [
      { id: 1, text: '9시까지 출근하기', checked: false },
      { id: 2, text: '시스템 조사하기(?)', checked: false },
    ]
  },
  getters: {  //computed

  },
  mutations: {  //데이터를 바꾸는 곳
    //첫 번째 인자: state, 두 번째: payload? 사용할 때 넘어오는 데이터
    ADD_TODO(state, value) {
        state.todos.push({
            id: Math.random(),  //중복될 수 있지만 임시로 한 것
            text: value,
            checked: false
        });
    },
    TOGGLE_TODO(state, {id, checked}) {
        const index = state.todos.findIndex(todo => {
            return todo.id === id;
        });
    
        state.todos[index].checked = checked;
    },
    DELETE_TODO(state, todoId) {
        const index = state.todos.findIndex(todo => {
            return todo.id === todoId;
        });
    
        state.todos.splice(index, 1);
        //state.todos = state.todos.filter(todo => todo.id !== id);
    }
  },
  actions: {  //함수, 비동기

  },
  modules: {

  }
})
