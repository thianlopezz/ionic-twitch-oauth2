import { IonButton } from "@ionic/react";
import "./LoginContainer.css";

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  let requestAut = async (e: any) => {
    let redirectUri = encodeURIComponent(
      "https://oauth2.twitch.gazoom.io/auth-twitch"
    );
    let clientId = "a4xbov22219co9wvy0lir8af738c96";
    let responseType = "token";
    let scope = "user:read:email";

    window.open(
      `https://id.twitch.tv/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}`
    );
  };

  return (
    <div className="container">
      <IonButton onClick={requestAut} expand="block">
        Login with twitch
      </IonButton>
    </div>
  );
};

export default ExploreContainer;
