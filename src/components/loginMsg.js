import { useParams,Outlet } from "react-router-dom"

export function LoginMsg1(){
    return (
      <div className="error">
        Hi i am login msg 1Hi i am login msg 1Hi i am login msg 1Hi i am login msg 1Hi i am login msg 1Hi i am login msg 1Hi i am login msg 1Hi i am login msg 1Hi i am login msg 1Hi i am login msg 1Hi i am login msg 1Hi i am login msg 1Hi i am login msg 1Hi i am login msg 1Hi i am login msg 1
      </div>
    )
}


export function LoginMsg2(){
    return (
      <div className="error">
        <Outlet/>
        <span>login 2 login 2login 2login 2login 2login 2login 2login 2login 2login 2login 2login 2login 2login 2login 2login 2</span>
      </div>
    )
  }

export function LoginData(){
  const {loginId} = useParams()
  return (
  <div>
    <h2>Hello {loginId}</h2>
  </div>
  )
}  

