import React, {useState} from 'react'
import {useDispatch} from 'react-redux';
import {loginUser} from '../../../_actions/user_action';

function LoginPage(props) {
    const dispatch = useDispatch();

    const [loginId, setloginId] = useState("")
    const [pwd, setpwd] = useState("")

    const onIDHandler = (evnet) =>{
        setloginId(evnet.currentTarget.value);
    }
    const onPassWordHandler = (event) => {
        setpwd(event.currentTarget.value)
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();
        let body = {
            ID:loginId,
            Password:pwd
        }
        dispatch(loginUser(body))
            .then(response => {
                if (response.payload.loginSuccess) {
                    alert('로그인 성공')
                    props.history.push('/')
                } else {
                    alert('로그인 실패')
                }
            })

       
    }

    return (
        <div style={{
            display:'flex', justifyContent:'center', alignItems:'center', width:'100%', height:'100vh'
        }}>
            <form style={{ display:'flex', flexDirection:'column' }}
                onSubmit={onSubmitHandler}
            >
                <label>ID</label>
                <input type="text" value={loginId} onChange={onIDHandler} />
                <label>PassWord</label>
                <input type="password" value={pwd} onChange={onPassWordHandler} />
                <br />
                <button>
                    Login
                </button>
            </form>
        </div>
    )
}

export default LoginPage;


/*import React from 'react';
import { post } from 'axios'

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loginId: '',
            pwd:''
        }
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        this.addLogin()
            .then((response) => {
                console.log(response.data);
                 this.props.stateRefresh();
            })
        this.setState({
            loginId:'',
            pwd:''
        })
    }

    handleValueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }
    addLogin = () => {
        const url = '/api/users/login';
        const formData = new FormData();
        formData.append('loginId', this.state.loginId);
        formData.append('pwd', this.state.pwd);
        const config = {
            headers: {
                'content-type':'multipart/form-data'
            }
        }
        return post(url, formData, config);
    }

    render() {
         const { classes } = this.props;
        return (
            <div>
                <label >ID</label>
                <input type="text" name="loginId" value={this.state.loginId} onChange={this.handleValueChange} /><br />
                <label >PWD</label>
                <input type="password" name="pwd" value={this.state.pwd} onChange={this.handleValueChange} /><br />
                <button onClick={this.handleFormSubmit}>로그인</button>
            </div>
        )
    }

}

export default Login;*/