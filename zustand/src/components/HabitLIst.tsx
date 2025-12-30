import React from 'react'
import { useHabitStore } from '../store/store'

const HabitList = () => {
  const { habits , removeHabit} = useHabitStore()

  console.log('habits in list', habits)

  const deleteHabit =(id: string)=>{
            removeHabit(id)
  }
    return (
    <div style={styles.container}>
      <h2 style={styles.title}>Your Habits</h2>
      {habits.length === 0 ? (
        <p style={styles.noHabits}>No habits added yet.</p>
      ) : (
        habits.map((habit) => (
          <div key={habit.id} style={styles.habitCard}>
            <h3 style={styles.habitName}>{habit.name}</h3>
            <p style={styles.frequency}>Frequency: <strong>{habit.frequency}</strong></p>
            <p style={styles.createdAt}>Created: {new Date(habit.createdAt).toLocaleDateString()}</p>
            <p style={styles.completed}>Completed {habit.completedDates.length} times</p>
            <button style={{backgroundColor:"red"}} onClick={()=>{deleteHabit(habit.id)}}>Remove</button>
            <button style={{backgroundColor:"green"}}>Mark as Complete</button>
          </div>
        ))
      )}
    </div>
  )
}

export default HabitList

// 💅 Inline styling (you can extract to a CSS/SCSS file too)
const styles = {
  container: {
    maxWidth: '600px',
    margin: '2rem auto',
    padding: '1rem',
    backgroundColor: '#f5f7fa',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
  },
  title: {
    textAlign: 'center' as const,
    marginBottom: '1rem',
    fontSize: '1.8rem',
    color: '#333'
  },
  noHabits: {
    textAlign: 'center' as const,
    color: '#777'
  },
  habitCard: {
    backgroundColor: '#ffffff',
    padding: '1rem',
    marginBottom: '1rem',
    borderRadius: '8px',
    border: '1px solid #ddd'
  },
  habitName: {
    fontSize: '1.2rem',
    marginBottom: '0.5rem'
  },
  frequency: {
    marginBottom: '0.3rem',
    color: '#555'
  },
  createdAt: {
    marginBottom: '0.3rem',
    color: '#999'
  },
  completed: {
    fontStyle: 'italic',
    fontSize: '0.9rem',
    color: '#666'
  }
}
