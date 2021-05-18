function SignupForm(){
    return(
        <form>
            <label htmlFor="userEmail">Email</label>
            <input id="userEmail" type="email" />
            
            <label htmlFor="userPassword">Senha</label>
            <input id="userPassword" type="password" />
        </form>
    )
}

export default SignupForm