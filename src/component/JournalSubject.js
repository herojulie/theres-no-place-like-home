import React from 'react';
import writingSubject from '../data/365-days-of-writing'
import '../css/DefaultComponent.css';

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

const journalSubject = () => {
  console.log('journalSubject')
  let today = new Date()
  let convertedToday = monthNames[today.getMonth()] + '' + today.getDate().toString()
  let subject = writingSubject[convertedToday]['subject']
  let description = writingSubject[convertedToday]['description']
  

  return (
    <div className="defaultComponent">
      <h1>{subject}</h1>
      <p>{description}</p>
    </div>
  )
};

export default journalSubject