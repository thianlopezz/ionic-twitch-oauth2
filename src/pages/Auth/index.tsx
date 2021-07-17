import {
  IonAvatar,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonLoading,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonLoading,
} from "@ionic/react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Profile from "../../models/profile";
import "./Auth.css";

let defaultProfile = {
  id: "",
  login: "",
  display_name: "",
  profile_image_url: "",
  email: "",
};

const Auth: React.FC = () => {
  const location = useLocation();
  const [profile, setProfile] = useState<Profile>(defaultProfile);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [present] = useIonLoading();

  useEffect(() => {
    getUserInfo();
  }, []);

  let getUserInfo = async () => {
    setIsLoading(true);

    try {
      let accessToken = localStorage.getItem("access_token") || "Sin tokenaa";

      var myHeaders = new Headers();

      myHeaders.append("Authorization", "Bearer " + accessToken);
      myHeaders.append("client-id", "a4xbov22219co9wvy0lir8af738c96");

      var requestOptions = {
        method: "GET",
        headers: myHeaders,
      };

      let response = await fetch(
        "https://api.twitch.tv/helix/users",
        requestOptions
      );

      if (response.ok) {
        let data = await response.json();

        setProfile(data.data[0]);

        setIsLoading(false);
      }
    } catch (e) {
      setError(e.message);
      setIsLoading(false);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">You are in</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonLoading
          cssClass="my-custom-class"
          isOpen={isLoading}
          message={"Loading profile"}
        />

        {!isLoading && (
          <div>
            <div style={{ display: "flex", width: "100%", padding: "2.5rem" }}>
              <IonAvatar style={{ margin: "auto" }}>
                <img height="2.5rem" src={profile.profile_image_url} />
              </IonAvatar>
            </div>
            <IonCard>
              <IonCardHeader>
                <IonCardSubtitle>{profile.email}</IonCardSubtitle>
                <IonCardTitle>{profile.display_name}</IonCardTitle>
              </IonCardHeader>
            </IonCard>
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Auth;
