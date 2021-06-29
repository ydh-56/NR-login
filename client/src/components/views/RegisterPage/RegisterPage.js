import React, {useState} from 'react'
import {useDispatch} from 'react-redux';
import {JoinUser} from '../../../_actions/user_action';


function RegisterPage(props) {

    const dispatch = useDispatch();

    const [loginId, setloginId] = useState("")
    const [pwd, setpwd] = useState("")
    const [ConfirmPWD, setConfirmPWD] = useState("")

    const onIDHandler = (event) =>{
        setloginId(event.currentTarget.value);
    }
    const onPassWordHandler = (event) => {
        setpwd(event.currentTarget.value)
    }
    const onConfirmPassWordHandler = (event) => {
        setConfirmPWD(event.currentTarget.value)
    }
    const onSubmitHandler = (event) => {
        event.preventDefault();
        if(pwd !== ConfirmPWD){
            return alert('비밀번호 같지 않음')
        }
        let body = {
            ID:loginId,
            Password:pwd,
            ConfirmPWD:ConfirmPWD
        }
        dispatch(JoinUser(body))
            .then(response => {
                if(response.payload.joinSuccess) {
                    props.history.push('/')
                    alert('회원가입 성공')
                } else {
                    alert('회원가입 실패')
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
                <label>Confirm PassWord</label>
                <input type="password" value={ConfirmPWD} onChange={onConfirmPassWordHandler} />
                <br />
                <button >
                    JOIN
                </button>
            </form>
        </div>
    )
}

export default RegisterPage