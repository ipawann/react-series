

## Step 1 - create a seperate store folder 
- using configureStore from `@reduxjs/toolkit`
- import the reducer
- export const store = configureStore({reducer : todoReducer}) // syntax to export the store

## Step 2 - Create reducer in separate file
reducers in the redux tool kit are known as slices
- import {createSlice} from `@reduxjs/toolkit`
- define initialSate : {}
- add the functionalites / property
```
export const todoSlice : createslice({
    name: "",
    initialState,
    reducers : { // features of the app 
        addTodo : (state, action) =>{
            const todo = {
                id = nanoid(),
                text = action.payload
            }
            state.todos.push(todo)
        },
        removeTodo : { state.todos.filter(todo) => todo.id !== action.payload}
    }
})
```
- payload is an object
- export all the functionality individually
```
export const {addtodo, removetodo} = todoSlice.actions
```
- exports all the reducers
```
export default todoSlice.reducer
```

## Step 3 - add something to store / useDispatch()
- add some data to the store
- dispatch reducers ko use krte hue store m add/changes krta haii....
```
import {useDispatch} from `react-redux`
function addtodo(){
    const dispatch = useDispatch()
    const addtodohandler = (e) =>{
       dispatch(addtodo(input))
        setInput('')
    }
}
```

## Step 4- Fetch data from Store / useSelector()
- useSelector() have acess to all the states
```
import {useSelector, useDispatch}

function Todo(){
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    return(
        <>
            <div> Todos </div>
            {
                todos.map( (todo) =>(
                    <li> 
                        {todo.text}
                        <button onClick = { () =>dispatch(removeTodo(todo.id))}> X </button>
                    </li>
                ))}  
        </>
    )
}
```
## Step -5  Wrap Up/ Bind Up the Store (Provider)
```
import {Provider} from `react-redux`
import {store}
<Provider store = {store}>
    <AddTodo />
    <Todo/>
</Provider>
```