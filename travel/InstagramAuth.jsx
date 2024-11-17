import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const InstagramAuth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");

    if (code) {
      // Exchange code for access token
      fetch("https://api.instagram.com/oauth/access_token", {
        method: "POST",
        body: new URLSearchParams({
          client_id: "YOUR_INSTAGRAM_CLIENT_ID",
          client_secret: "YOUR_INSTAGRAM_CLIENT_SECRET",
          grant_type: "authorization_code",
          redirect_uri: "http://localhost:3000/instagram-auth",
          code: code,
        }),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.access_token) {
            console.log("Instagram Access Token:", data.access_token);
            // Here you can save the access token and user data to your database
            navigate("/home");
          } else {
            console.error("Error exchanging code:", data);
          }
        })
        .catch((error) => console.error("Error during token exchange:", error));
    }
  }, [navigate]);

  return <p>Loading Instagram authentication...</p>;
};

export default InstagramAuth;
