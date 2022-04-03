import { Button } from 'antd';
import { useState } from 'react'
import { supabase } from '../lib/initSupabase'

// export default function Login() {
//     return (
//     )
// }

// let { user, error } = await supabase.auth.signIn({
//   provider: 'github'
// })


export default function Login(props: { login: any; onLogout: any; }) {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  let login = props.login
  let onLogout = props.onLogout
   console.log(onLogout)
//   const supabase_user =  supabase.auth.user()
//   const [user, setUser] = useState(supabase_user)


//   console.log(user)

  const handleLogout = async () => {
    try{
        let { error } = await supabase.auth.signOut()

      if (error) throw error
      else
        onLogout()
    } catch (error: any) {
      alert(error.error_description || error.message)
    }

  }

  const handleLogin = async () => {
    try {
      setLoading(true)
      let { user, error } = await supabase.auth.signIn({provider: 'google'})
//        setUser(user)
      if (error) throw error
//       alert('Check your email for the login link!')
    } catch (error: any) {
      alert(error.error_description || error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="row flex flex-center">
      <div className="col-6 form-widget">
{/* // <p className="description">Sign in via magic link with your email below</p>

<div>
//           <input
//             className="inputField"
//             type="email"
//             placeholder="Your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>*/}

        <div>
        {!login
                ?             <Button type="primary" shape="round"  size='large'
                                  onClick={(e) => {
                                      e.preventDefault()
                                      handleLogin()
                                  }}
                                  className="button block"
                                  disabled={loading}
                              >

                              <span>{'Login with Google'}</span>
                            </Button>
                : <Button type="primary" shape="round"  size='large'
                                                    onClick={(e) => {
                                                        e.preventDefault()
                                                        handleLogout()
                                                    }}
                                                    className="button block"
                                                    disabled={loading}
                                                >

                                                <span>{'Logout'}</span>
                                              </Button>
         }


        </div>
      </div>
    </div>
  )
}