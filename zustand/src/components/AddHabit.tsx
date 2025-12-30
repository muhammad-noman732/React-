import React, { useState } from 'react'
import { useHabitStore } from '../store/store'

const AddHabit = () => {
  const [name, setName] = useState<string>("")
  const [frequency, setFrequency] = useState<'daily' | 'weekly'>("daily")

   const {habits , addHabit} = useHabitStore()
   console.log("habits" , habits);
   
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(name.trim()){
        addHabit(name , frequency);
        setName("")
       setFrequency("daily")
    }
    
  
  }

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label htmlFor="name" style={styles.label}>Habit Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />

        <label htmlFor="frequency" style={styles.label}>Frequency:</label>
        <select
          id="frequency"
          value={frequency}
          onChange={(e) => setFrequency(e.target.value as 'daily' | 'weekly')}
          style={styles.select}
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
        </select>

        <button type="submit" style={styles.button}>Add Habit</button>
      </form>
    </div>
  )
}

export default AddHabit

// 💅 Inline styles (can be extracted to CSS file)
const styles = {
  container: {
    padding: '2rem',
    maxWidth: '400px',
    margin: '0 auto',
    backgroundColor: '#f4f4f4',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)'
  },
  form: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '1rem'
  },
  label: {
    fontWeight: 'bold'
  },
  input: {
    padding: '0.5rem',
    fontSize: '1rem'
  },
  select: {
    padding: '0.5rem',
    fontSize: '1rem'
  },
  button: {
    padding: '0.75rem',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontWeight: 'bold',
    cursor: 'pointer'
  }
}
