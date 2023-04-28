

import React from 'react'
import './user.css'
const UserTable = ({userdata}) => {
    console.log(userdata);
  return (
    <div className='tablediv'>
       <table className='tablediv' width={1500}  cellPadding={5} >
            <thead > 
                <tr>
                    <td style={{fontSize:"25px",fontWeight:"600"}}>Image</td>
                    <td style={{fontSize:"25px",fontWeight:"600"}}>Name</td>
                    <td style={{fontSize:"25px",fontWeight:"600"}}>User Name</td>
                    <td style={{fontSize:"25px",fontWeight:"600"}}>Gender</td>
                </tr>
            </thead>

            <tbody>
                {
                    userdata.map((e)=>(
                        <tr>
                        <img width={100} height={100} src={e.picture.large} alt="" />    
                        <td>{e.name.first}</td>
                        <td>{e.email}</td>
                        <td>{e.gender}</td>
                    </tr>
                    ))
                }
                
            </tbody>
          </table>
    </div>
  )
}

export default UserTable