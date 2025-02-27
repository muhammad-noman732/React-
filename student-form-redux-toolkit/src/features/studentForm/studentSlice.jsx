import { createSlice } from '@reduxjs/toolkit'

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
      AddStudent :(state , actions)=>{
        state.push({
            id: actions.payload.id,
            name:actions.payload.name,
            email:actions.payload.email,
            rollNumber: actions.payload.rollNumber,
            classes: actions.payload.classes,
            completed: false
        
        })
      },

      DeleteStudent : (state , actions)=>{
           return state.filter(state => state.id !== actions.payload.id)
      },

      ToggleStudent : (state , action)=>{
        const student = state.find(state => state.id === action.payload.id);

        if(student){
            student.completed = !student.completed
        }
      },

       UpdateStudent : (state , actions)=>{
        const student =  state.find(state=> state.id === actions.payload.id);

        if(student){            
              student.id =  actions.payload.id,
              student.name = actions.payload.name,
              student.email = actions.payload.email,
              student.rollNumber= actions.payload.rollNumber,
              student.classes = actions.payload.classes
            }}
           }
})

export const { AddStudent, DeleteStudent  , ToggleStudent  , UpdateStudent} = todosSlice.actions
export default todosSlice.reducer