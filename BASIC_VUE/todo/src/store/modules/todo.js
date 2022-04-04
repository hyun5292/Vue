export default {
    namespaced: true,
    state: {
      todos: [
        { id: 1, text: '9시까지 출근하기', checked: false },
        { id: 2, text: '시스템 조사하기(?)', checked: false },
      ]
    },
    getters: {
      numberOfCompletedTodo: state => {
        return state.todos.filter(todo => todo.checked).length;
      }
    },
    mutations: {
      ADD_TODO(state, value) {
          state.todos.push({
              id: Math.random(),
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
      }
    },
    actions: {
      addTodo({ commit }, value) {
        setTimeout(function() {
          commit('ADD_TODO', value);
        }, 2000);
      },
      toggleTodo({ commit }, payload) {
        setTimeout(function() {
          commit('TOGGLE_TODO', payload);
        }, 500);
      },
      deleteTodo({ commit }, todoId) {
        setTimeout(function() {
          commit('DELETE_TODO', todoId);
        }, 500);
      },
    }
}