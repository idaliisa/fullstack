import React, { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import phonebookService from './services/phonebook'
import Notification from './components/Notification'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: '040-1234567'      
   }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')
  const [ notificationMessage, setNotificationMessage] = useState(null)

  useEffect(() => {
    phonebookService
      .getAll()
        .then(initialContacts => {
          setPersons(initialContacts)
        })
  }, [])

  const addContact = (event) => {
      event.preventDefault()
      const newObject = {
          name: newName,
          number: newPhone
      }
      persons.some(n => n.name === newName) ?
      window.alert(`${newName} is already added to phonebook`) :      
      phonebookService.
      create(newObject)
        .then(returnedContact => {
          setPersons(persons.concat(returnedContact))
        }) 

      setNotificationMessage(`Added ${newName}`)
      setTimeout(() => {
        setNotificationMessage(null)
      }, 5000)
        
      setNewName('') 
      setNewPhone('') 
  }


  const deleteContact = (event) => {
    event.preventDefault()
    if (window.confirm(`Delete ${event.target.name}?`)) {
      phonebookService
        .remove(event.target.id)
    }
    
    phonebookService
      .getAll()
        .then(initialContacts => {
          setPersons(initialContacts)
        })

  }

  const handleNameChange = (event) => {
      setNewName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <h3>Add a new contact</h3>
      <Notification message={notificationMessage}/>
      <PersonForm onSubmit={addContact} newName={newName} handleNameChange={handleNameChange} newPhone={newPhone} handlePhoneChange={handlePhoneChange}/>
      <h3>Numbers</h3>
      <Persons handleClick={deleteContact} persons={persons} />
    </div>
  )
}

export default App