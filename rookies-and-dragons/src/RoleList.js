import React from 'react'
import { Link, withRouter } from 'react-router-dom'


function RoleList(props) {

  const des = props.RoleDescriptions
  
  

    return (
    <>
        {props.roles.map(role =>
          <div key={role.name}className="role-list">
            <Link to={`/classes/${role.name}`}><p className="rolelist-name" key={role.name}>{role.name}</p></Link>
            {des.filter(name => name.roleName === role.name).map(filteredName => <p>{filteredName.description}</p>)}
            {des.filter(image => image.roleName === role.name).map(filteredImage => <img className="rolelist-images"src={filteredImage.imageUrl}/>)}
          </div>
        )}
        
    </>
   )
  
}
  
export default withRouter(RoleList)
