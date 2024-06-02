import { useEffect, useState } from 'react';

const GoogleSignIn = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    if (typeof window !== 'undefined') {
      window.onSignIn = (googleUser) => {
        const profile = googleUser.getBasicProfile();
        console.log('ID: ' + profile.getId());
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());

        // Optionally, send the ID token to your backend
        const id_token = googleUser.getAuthResponse().id_token;
        console.log("ID Token: " + id_token);
      };

      // Initialize Google Sign-In
      window.gapi.load('auth2', () => {
        window.gapi.auth2.init({
          client_id: '670440755997-pchbccvqlcaft8lji9a4a8ofppdqs219.apps.googleusercontent.com',
        });
      });
    }
  }, []);

  const signOut = () => {
    const auth2 = window.gapi.auth2.getAuthInstance();
    auth2.signOut().then(() => {
      console.log('User signed out.');
    });
  };

  return (
    <div>
      {isClient && (
        <>
          <div className="g-signin2" data-onsuccess="onSignIn"></div>
          <button onClick={signOut}>Sign Out</button>
        </>
      )}
    </div>
  );
};

export default GoogleSignIn;
