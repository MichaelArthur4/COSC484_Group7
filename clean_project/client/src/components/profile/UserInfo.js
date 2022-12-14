import {FaEdit} from 'react-icons/fa'
import {useState, useContext, useEffect} from 'react'
import UserContext from '../../context/UserContext'
import { AuthContext } from '../../context/AuthContext'

function UserInfo(){

    
    const {curUser} = useContext(AuthContext)
    const {editData} = useContext(UserContext)
    const [tempBio, setTempBio] = useState("")
    const [editBool,setEditBool] = useState(false)
    const [bio, setBio] = useState(curUser.bio)
    const auth = useContext(AuthContext)

    useEffect(() => {
        auth.getCurrentUser(curUser._id)
        console.log('in use effect: ' +curUser)

        }
    , [])
    //need use effect or something to update values

    const onEdit = () => {
        setEditBool(!editBool)
    }

    const onCancel = () => {
        setEditBool(false)
    }

    const getTempBio = (e) => {
        setTempBio(e.target.value)
    }

    const changeBio = () => {
        setEditBool(false)
        editData({
            username: curUser.username,
            bio: tempBio
        })
        if(curUser._id != undefined){
            auth.getCurrentUser(curUser._id)
            setBio(tempBio)
            console.log('logged editdata')
        }
        
    }

    var url1 = "https://st3.depositphotos.com/7486768/17806/v/600/depositphotos_178065822-stock-illustration-profile-anonymous-face-icon-gray.jpg?forcejpeg=true"

    

    <div class="profile">
            <h2 >{user.username}</h2>

            
      
            <img src = {user.url} alt = "me" height = {200} width = {200}/>

            

            
            <h3>Bio {<button onClick = {onEdit} className = 'edit'>
                <FaEdit color = 'black' />
            </button>}</h3>

        <div class="bio">
            {!editBool && <><p>{user.bio}</p> </>}
            {editBool && 
                <>
                <input onChange = {{}} type = 'text'></input> <br></br>
                <button onClick = {{}}>Change</button>
                <button onClick = {{}}>Cancel</button>
                </>
            }
            </div>
        </div>
    )
}

export default UserInfo
