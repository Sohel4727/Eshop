import { Button, Dialog, TextField } from "@mui/material";
import './Login.css'
import { useState } from "react";
import axios from "axios";
// import DialogBox from "./DialogBox";
// import { useNavigate } from "react-router-dom";
const Login = () => {
   
    const [dialogBox, setDialogBox] = useState(true)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const loginApi = () => {
        let item = { email, password };
        axios.post('https://reqres.in/api/login', item)
            .then((res) => {
                alert("Welcome")
                // setToken(res.data.token)
                console.log('this is then ::==> ', res.data.token)
            localStorage.setItem("Token",res.data.token)
                
            }).catch((err) => {
                console.log("this is catch ::==>", err)
                alert('wrong email password')
            })
    };
    // const navigate=useNavigate()
console.log("===>",dialogBox);
    // const handleClick = () => {
    //     setDialogBox(true)
    // }

    // useEffect(()=>{

    // },[dialogBox])
    const handleClose=()=>{
        setDialogBox(false)
    }
    
    return (
        <>
            {/* <Button onClick={() => handleClick()} variant='outlined'>login</Button> */}
            <div>
                <Dialog open={dialogBox}
                // onClose={handleClose}
                >
                    <div className='main_container'>
                        <div className="side_image">
                            <div className="side_login_heading">
                                <h2> Login </h2>
                                <p>Get access to your Orders,</p>
                                <p>Wishlist and Recommendations</p>
                            </div>
                            <img className="login_side_image" src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png" alt="my pic" />
                        </div>
                        <div className='center'>
                            <div className="inputs">
                                <TextField name='email' type='email'
                                    onChange={(e) => setEmail(e.target.value)} className='input' id="UserNameInput" label="User Name" variant="standard" />
                                <TextField name='password' type='password'
                                    onChange={(e) => setPassword(e.target.value)} className='input' id="PasswordInput" label="Password" variant="standard" />
                            </div>
                            <Button
                                className='login_button'
                                onClick={() => {loginApi(); handleClose();}}
                                // disabled={!email || !password} variant="contained" 
                                >
                                Login
                            </Button>

                            {/* "email": "eve.holt@reqres.in",
                                "password": "pistol" */}

                        </div>
                    </div>
                </Dialog>
            </div>
        </>
    )
}
export default Login;