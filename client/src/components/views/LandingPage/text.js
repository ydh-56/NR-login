


// import React from "react";

// class Join extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             loginId: '',
//             pwd:''
//         }

//     }

//     home = (e) => {
//         window.location.replace('/');
//     };
//     onChange = (e) => {
//         this.setState({
//             [e.target.name] : e.target.value
//         });
//         //console.log(this.state.loginId + this.state.pwd);
//     }
//     onSubmit = (e) => {
//         e.preventDefault();
//         const data = {
//             loginId: this.state.loginId,
//             pwd: this.state.pwd
//         };
        
//             fetch('/api/users/create', {
//                 method: 'post',
//                 headers: {'Content-Type' : 'application/json'},
//                 body: JSON.stringify(data),
//             })
        
//     }

//     render() {
//         return (
//             <div>
//                 <label >ID</label>
//                 <input type="text" name="loginId" value={this.state.loginId} onChange={this.onChange} /><br />
//                 <label >PWD</label>
//                 <input type="password" name="pwd" value={this.state.pwd} onChange={this.onChange} /><br />
//                 <button onClick={this.onSubmit}>회원가입</button>
//             </div>
//         )
//     }

// }

// export default Join;