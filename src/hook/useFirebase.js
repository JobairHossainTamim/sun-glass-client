import  { useEffect, useState } from 'react';
import initializeFirebase from './../component/Firebase/firebase.init';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged , GoogleAuthProvider ,signOut, updateProfile  } from "firebase/auth";
// initialize firebase app
initializeFirebase();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin ,setAdmin]=useState(false);
    const auth = getAuth();


// dataLoad and admin page 
useEffect(()=>{
    fetch(`https://serene-refuge-77261.herokuapp.com/users/${user.email}`)
    .then(res=>res.json())
    .then(data=>setAdmin(data.admin))
},[user.email])
    // stay this page 

     // observer user state
     useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
              
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth])

    // Save To the Database user
     // Save To the Database
     const saveUser=(email, displayName, method)=>{
        const user={email, displayName};
        fetch(`https://serene-refuge-77261.herokuapp.com/users/${user.email}`,{
            method:method,
            headers:{ 
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        }).then()

}
// Check Admin database



   
    // register with email
        const registerUser = (email, password,name,history) =>{
            setIsLoading(true);
            createUserWithEmailAndPassword(auth,  email, password)
            .then((userCredential) => {
                setAuthError('');
                history.replace("/");
                const newUser={email , displayName:name};
                setUser(newUser);
                //save to the Database
                saveUser(email,name,"POST");
                // update name
                updateProfile(auth.currentUser, {
                    displayName: name
                  }).then(() => {
                    
                  }).catch((error) => {
                    setAuthError(error.message);
                  });
            })
            .catch((error) => {
                setAuthError(error.message);
                console.log(error);
            })
            .finally(() => setIsLoading(false));
        }

    // Log out 
    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser({});
        }).catch((error) => {
            // An error happened.
        })
        .finally(() => setIsLoading(false));
    }


    // login user

    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    return (
        {
            logout,
            registerUser,
            user,
            authError,
            loginUser,
            admin

        }
    );
};

export default useFirebase;