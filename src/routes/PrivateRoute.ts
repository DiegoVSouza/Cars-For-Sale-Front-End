import { isAuthenticated } from './Auth'
import { Navigate } from 'react-router-dom'

var auth = isAuthenticated()

export function PrivateRoute({ children }: any) {
    return auth ? children : Navigate({ to: "/createaccount" });
}