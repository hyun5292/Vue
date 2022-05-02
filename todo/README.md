# 미니 프로젝트 Todo App
## 경로: https://www.youtube.com/watch?v=uYWhN-2IyCQ&list=PLB7CpjPWqHOtYP7P_0Ls9XNed0NLvmkAh&index=21
*사진 다음에 필기 있음*
<img src="https://github.com/hyun5292/Vue/blob/main/todo/src/assets/%EC%99%84%EC%84%B1%EB%B3%B8_%EC%B6%94%EA%B0%80%EC%A0%84.png?raw=true"  width="100%"/><br/>
<img src="https://github.com/hyun5292/Vue/blob/main/todo/src/assets/%EC%99%84%EC%84%B1%EB%B3%B8_%EC%B6%94%EA%B0%80%ED%9B%84.png?raw=true"  width="100%"/><br/>
------
## 제 20장 미니 프로젝트 Todo App 1
- router랑 vuex 없이 프로젝트 제작

- index.html에 bootstrap cdn 추가
```
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
```

**//App.vue**<br/>
```
<template>
  <div id="app" class="container">
    <h1 class="text-center">경원이의 하루</h1>
      <!-- 이 정도면 v-model은 만능인 것인가…? -->
      <input
        v-model="todoText"
        class="w-100 p-2"
        type="text"
        placeholder="Type todo"
        @keyup.enter="addTodo"
      >
      <hr>
      <TodoItem
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
      />
      <!-- :todo는 props -->
  </div>
</template>

<script>
import TodoItem from '@/components/TodoItem.vue';

export default {
  components: {
    TodoItem
  },
  data() {
    return {
      todoText: '',
      todos: [
        { id: 1, text: '9시까지 출근하기', checked: false },
        { id: 2, text: '시스템 조사하기(?)', checked: false },
      ]
    }
  },
  methods: {
    addTodo(e) {
      this.todos.push({
        id: Math.random(),  //중복될 수 있지만 임시로 한 것
        text: e.target.value,
        checked: false
      });
      //input 박스에 내용 입력하고 enter 누르면 빈칸이 되도록 하는 것
      this.todoText = '';
    }
  }
}
</script>

<style>
/* 이건 글씨가 작아서 내가 임의로 추가한 것 */
body { font-size: 1.5rem !important; }
</style>

//TodoItem.vue
<template>
  <div>
    <!-- 제 16장 자식 컴포넌트에서 데이터 보내기(Props) -->
    <input type="checkbox" :checked="todo.checked">
    <span class="m-3">{{ todo.text }}</span>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  }
}
</script>

<style></style>
```

- 결과<br/>
<img src="https://github.com/hyun5292/Vue/blob/main/todo/src/assets/20%EC%9E%A5_%EC%99%84%EC%84%B1%EB%B3%B8.png?raw=true"  width="80%"/><br/>
------
## 제 21장 미니 프로젝트 Todo App 2
- 구조분해
```
const p = {
  kossie: 1,
  coder: 2
}
const {kossie} = p;
p.kossie -> 1
kossie -> 1
```
- bootstrap cdn을 수정했다
```
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
```
**//App.vue**<br/>
```
<template>
  <div id="app" class="container">
    <h1 class="text-center">경원이의 하루</h1>
      <!-- 이 정도면 v-model은 만능인 것인가…? -->
      <input
        v-model="todoText"
        class="w-100 p-2"
        type="text"
        placeholder="Type todo"
        @keyup.enter="addTodo"
      >
      <hr>
      <TodoItem
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        @toggle-checkbox="toggleCheckbox"
        @click-delete="deleteTodo"
      />
      <!-- :todo는 props -->
  </div>
</template>

<script>
import TodoItem from '@/components/TodoItem.vue';

export default {
  components: {
    TodoItem
  },
  data() {
    return {
      todoText: '',
      todos: [
        { id: 1, text: '9시까지 출근하기', checked: false },
        { id: 2, text: '시스템 조사하기(?)', checked: false },
      ]
    }
  },
  methods: {
    addTodo(e) {
      this.todos.push({
        id: Math.random(),  //중복될 수 있지만 임시로 한 것
        text: e.target.value,
        checked: false
      });
      //input 박스에 내용 입력하고 enter 누르면 빈칸이 되도록 하는 것
      this.todoText = '';
    },
    toggleCheckbox({id, checked}) {
      const index = this.todos.findIndex(todo => {
        return todo.id === id;
      });
      this.todos[index].checked = checked;
    },
    //deleteTodo(id) {
    //  const index = this.todos.findIndex(todo => {
    //    return todo.id === id;
    //  });
    //  this.todos.splice(index, 1);
    //}
    deleteTodo(id) {
      this.todos = this.todos.filter(todos => todo.id !== id);
    }
  }
}
</script>

<style>
/* 이건 글씨가 작아서 내가 임의로 추가한 것 */
body { font-size: 1.5rem !important; }
</style>
```
**//TodoItem.vue**<br/>
```
<template>
  <div class="mb-2 d-flex form-inline">
    <!-- 제 16장 자식 컴포넌트에서 데이터 보내기(Props) -->
    <input 
      type="checkbox" 
      :checked="todo.checked"
      @change="toggleCheckbox"
    >
    <span 
      class="m-3 flex-grow-1"
      :class="todo.checked ? 'text-muted': ''"
      :style="todo.chekced ? 'text-decoration: line-through': ''"
    >
     {{ todo.text }}
    </span>
    <button
      class="btn btn-danger btn-sm ml-2"
      @click="clickDelete"

    >
      Delete
    </button>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  methods: {
    toggleCheckbox(e) {
      this.$emit('toggle-checkbox', {
        id: this.todo.id,
        checked: e.target.checked
      });
    },
    clickDelete() {
      this.$emit('click-delete', this.todo.id);
    }
  }
}
</script>
```
------
## 제 22장 Vuex 준비 및 설치
: Vuex를 사용하면 어느 컴포넌트에서든지 데이터에 접근할 수 있음

**1. vuex 설치**<br/>
```
npm install vuex
```

- vuex 설치 오류
해결방법: https://iancoding.tistory.com/154

**2. store 폴더 생성**<br/>

**3. index.js 파일 생성**<br/>
```
import Vue from 'vue';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},  //데이터
  mutations: {},  //데이터를 바꾸는 곳
  actions: {},  //함수, 비동기
  getters: {}  //computed
});
```

**4. main.js 파일 수정**<br/>
```
import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
```
- Vuex store 前<br/>
<img src="https://github.com/hyun5292/Vue/blob/main/todo/src/assets/22%EC%9E%A5_store%EC%A0%84.png?raw=true"  width="80%"/><br/>
- Vuex store 後<br/>
<img src="https://github.com/hyun5292/Vue/blob/main/todo/src/assets/22%EC%9E%A5_store%ED%9B%84.png?raw=true"  width="80%"/><br/>
------
## 제 23장 Vuex State
- 이전 강의에서 했던 vuex 설치 대신 초기 프로젝트 제작 시 vuex 설정으로 바꿔줌

**//index.js**<br/>
```
import { createStore } from 'vuex'

export default createStore({
  state: {  //데이터
    todos: [
      { id: 1, text: '9시까지 출근하기', checked: false },
      { id: 2, text: '시스템 조사하기(?)', checked: false },
    ]
  },
  getters: {},  //computed
  mutations: {},  //데이터를 바꾸는 곳
  actions: {},  //함수, 비동기
  modules: {}
})
```
**//TodoList.js**<br/>
```
<template>
…
</template>

<script>
…
export default {
  components: { TodoItem },
  computed: {
    todos() {
      return this.$store.todos;
    }
  },
  methods: {
    ...
  }
}
</script>
```
------
**제 24장 Vuex Mutations**<br/>
- 생각해보니 강의 자체가 vuejs2인데 3로 만들어버려따…

**//index.js**<br/>
```
import { createStore } from 'vuex'

export default createStore({
  state: {  //데이터
    todos: [
      { id: 1, text: '9시까지 출근하기', checked: false },
      { id: 2, text: '시스템 조사하기(?)', checked: false },
    ]
  },
  getters: {},  //computed
  mutations: {  //데이터를 바꾸는 곳
    //첫 번째 인자: state, 두 번째 인자: payload, 사용할 때 넘어오는 데이터
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
  actions: {},  //함수, 비동기
  modules: {}
})
```
**//App.vue**<br/>
```
<template>
  <div id="app" class="container">
    <h1 class="text-center">경원이의 하루</h1>
      <CompletedTodo />
      <AddTodo />
      <hr>
      <TodoList />
  </div>
</template>

<script>
  …
  data() {
    return {
      todoText: ''
      //todos 삭제
    }
  },
  //methods는 삭제
</script>
```
**//TodoList.vue**<br/>
```
<template>
…
</template>

<script>
…
computed: {
  todos() {
    return this.$store.state.todos;
  }
},
…
</script>
```
**//TodoItem.vue**<br/>
```
<template>
…
</template>

<script>
…
methods: {
  toggleCheckbox(e) {
    this.$store.commit('TOGGLE_TODO', {
      id: this.todo.id,
      checked: e.target.checked
    });
  },
  clickDelete() {
    this.$store.commit('DELETE_TODO', this.todo.id);
  }
}
</script>
```
**//AddTodo.vue**<br/>
```
<template>
…
</template>

<script>
…
methods: {
  addTodo(e) {
    this.$store.commit('ADD_TODO', e.target.value);
    this.todoText = '';
  }
}
</script>
```
**//CompletedTodo.vue**<br/>
```
<template>
…
</template>

<script>
  computed: {
    todos() {
      return this.$store.state.todos;
    },
    …
  }
</script>
```
------
## 제 25장 Vuex Actions
- DB에 내용 추가 하듯 내용 추가 및 비동기 형식을 setTimeout으로 표현
**//index.js**<br/>
```
…
export default {
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
    }
  }
 …
}
```
**//AddTodo.vue**<br/>
```
…
export default {
  …
  methods: {
    addTodo(e) {
      this.$store.dispatch('addTodo', e.target.value);
    }
  }
}
```
**//TodoItem.vue**<br/>
```
…
<script>
export default {
  …
  methods: {
    toggleCheckbox(e) {
      this.$store.dispatch('toggleTodo', {
        id: this.todo.id,
        checked: e.target.checked
      });
    },
    clickDelete() {
      this.$store.dispatch('deleteTodo', this.todo.id);
    }
  }
}
</script>
```
- jsonplaceholder 페이지 데이터 가져오기(참고: https://jsonplaceholder.typicode.com/)
**//UserList.vue 추가**<br/>
```
<template>
  <div>
    User List
    <div v-for="user in users" :key="user.id">
      {{ user.name }}
    </div>
  </div>
</template>

<script>
//import axios from 'axios';
  export default {
  //  data() {
  //    return {
  //      user: []
  //    }
    },
    created() {
    // axios.get('hptts://jsonplaceholder.typicode.com/users')
    //      .then(res => {
    //        this.users = res.data;
    //      });
    //      /*
    //      const a = 1;
    //      console.log(a);
    //      가 있다고 치면 axios로 부르고 밑에 작업들 먼저 하고
       //         응답오면 다시 .then() 안에 작업들 수행
    //      */
      this.getUsers();
    },
    computed: {
      users() {
        return this.$store.state.users;
      }
    },
    methods: {
      getUsers() {
      // axios.get('hptts://jsonplaceholder.typicode.com/users')
      //    .then(res => {
      //      this.users = res.data;
      //    });
      //    /*
        this.$store.dispatch('getUsers');
      }
    }
  }
</script>
```
**//App.vue**<br/>
```
<template>
  <div id="app" class="container">
    …
    <UserList />
  </div>
</template>

<script>
…
import UserList from '@/components/UserList.vue';

export default {
  components: {
    …
    UserList
  },
  …
}
</script>

<style></style>
```
**//index.js**<br/>
```
…
import axios from 'axios';

export default createStore({
  state: {  //데이터
    …
    users: []
  },
  …
  mutations: {  //데이터를 바꾸는 곳
    SET_USERS(state, users) {
      state.users = users;
    }
    …
  },
  actions: {  //함수, 비동기
    getUsers({ commit }) {
      axios.get('hptts://jsonplaceholder.typicode.com/users')
           .then(res => {
             commit('SET_USRS', res.data);
           });
    },
    …
  }
})
```
------
## 제 26장 Vuex Getters & Map 헬퍼
**//index.js**<br/>
```
…
export default createStore({
  …
  getters: {
    numberOfCompletedTodo: state => {
      return state.todos.filter(todo => todo.checked).length;
    }
  },
  …
})

//CompletedTodo.vue
…
<script>
export default {
  computed: {
    //todos() {
    //  return this.$store.state.todos;
    //},
    numberOfCompletedTodo() {
      //return this.todos.filter(todo => todo.checked).length;
      return this.$store.getters.numberOfCompletedTodo;
    }
  }
}
</script>
…
```
- Map 헬퍼<br/>
**//UserList.vue**<br/>
```
<template>
…
  <!--<div v-for ="user in users" :key="user.id">-->
  <div v-for ="user in people" :key="user.id">
...
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  …
  computed: {  //mapState랑 mapGetters는 여기 안에
    //...mapState(['users'])
    ...mapState({ people: 'users' })
    //users() {
    //  return this.$store.state.users;
    //}
  },
  methods: {  //mapActions는 여기 안에
    ...mapActions([ 'getUsers' ])
    //getUsers() {
    //  this.$store.dispatch('getUsers');
    //}
  }
}
</script>
```
------
## 제 27장 Vuex Modules
- store 폴더 안에 modules 폴더 생성<br/>
**//todo.vue**<br/>
```
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
```
**//user.js**<br/>
```
import axios from 'axios';

export default {
    namespaced: true,
    state: {
        users: []
    },
    mutations: {
        SET_USERS(state, users) {
            state.users = users;
        },
    },
    actions: {
        getUsers({ commit }) {
            axios.get('https://jsonplaceholder.typicode.com/users')
                  .then(res => {
                      commit('SET_USERS', res.data);
                  });
        },
    }
}
```
**//index.js**<br/>
```
…
export default createStore({
  modules: {
    todo,  //'todo: todo'와 같음
    user,  //'user: user'와 같음
  }
})

//TodoList.vue
…
computed: {
  todos() {
    return this.$store.state.todo.todos;
  }
}
…
```
**//TodoItem.vue**<br/>
```
…
computed: {
  numberOfCompletedTodo() {
    return this.$store.getters['todo/numberOfCompletedTodo'];
  }
},
methods: {
  this.$store.dispatch('todo/toggleTodo', {
  …
  },
  clickDelete() {
    this.$store.dispatch('todo/deleteTodo', this.todo.id);
  }
}

//completedTodo.vue
…
computed: {
  numberOfCompletedTodo() {
    return this.$store.getters['todo/numberOfCompletedTodo'];
  }
}
…
```
**//AddTodo.vue**<br/>
```
…
methods: {
  addTodo(e) {
    this.$store.dispatch('todo/addTodo', e.target.value);
  }
}
…
```
**//UserList.vue**<br/>
```
…
computed: {
  ...mapState('user', ['users'])
  //...mapState('user', {
  //  users: state => state.users  //state.user.users
  //})
},
methods: {
  ...mapActions('user', ['getUsers'])
}
…
```
