"use client"

export default function Page() {

  function login() {
    //@ts-expect-error
    window.location.href = process.env.NEXT_PUBLIC_LOGIN_URI;
  }
  return (
    <div className="text-center">
      <p className="text-4xl">Tunestats</p>
      <br/>
      <button className="btn btn-primary" onClick={login}>Login with Spotify</button>
      <br/>
      <br/>
      <p className="text-2xl">View your top songs, artists, and recently played songs!</p>
      <p className="text-2xl">Please login with your preferred music account using the button above to begin</p>
      <br/>
    </div>
  );
}