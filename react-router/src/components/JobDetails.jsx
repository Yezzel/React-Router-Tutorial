import React from 'react'
import { useLoaderData } from 'react-router-dom'


const JobDetails = () => {
 const jobDetails = useLoaderData();
  
  return (
    <div className='job-details'>
      <p><b>Job Title:</b>{jobDetails.title}</p>
      <p><b>Salary:</b>{jobDetails.salary}</p>
      <p><b>Job Location:</b>{jobDetails.location}</p>
      <p><b>Description:</b>Are you passionate about creating interactive and user-friendly websites? We are looking for a friendly and talented Web Developer to join our vibrant team! In this role, You'll collabrate with other designers and developers to bring innovative web solutions to life. Your expertise will play a cruital role in enhancing our online presence and creating engaging user experiences.</p>
      <button>Apply Now</button>
    </div>
  )
}

export default JobDetails

export const jobDetailsLoader = async ({params}) => {
   const {id} = params;
   const res = await fetch("http://localhost:8000/jobs/" + id)
   if(!res.ok) {
    throw Error("Could not find job details")
   }
   return res.json()
}
