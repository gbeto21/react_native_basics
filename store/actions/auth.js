export const SINGUP = 'SIGNUP'
export const LOGIN = 'LOGIN'

export const signup = (email, password) => {
    return async dispatch => {
        const response = await fetch(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBzwO24_LklTKjbP0HlBllWNmDnGRLe0lo',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                    returnSecureToken: true
                })
            }
        )

        if (!response.ok) {
            throw new Error('Something went wrong!')
        }
        const resData = await response.json()

        dispatch({ type: SINGUP })
    }
}

export const login = (email, password) => {
    return async dispatch => {
        const response = await fetch(
            'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBzwO24_LklTKjbP0HlBllWNmDnGRLe0lo',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                    returnSecureToken: true
                })
            }
        )

        if (!response.ok) {
            throw new Error('Something went wrong!')
        }
        const resData = await response.json()

        dispatch({ type: LOGIN })
    }
}

