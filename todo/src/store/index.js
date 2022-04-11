import { createStore } from 'vuex';
import todo from './modules/todo';
import user from './modules/user';

export default createStore({
  state: {
    
  },
  modules: {
    todo, //todo: todo와 같음
    user,  //user: user와 같음
  }
})
