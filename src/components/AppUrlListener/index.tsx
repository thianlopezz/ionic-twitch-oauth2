import { useEffect } from "react";
import { useHistory, useLocation } from "react-router";
import { App } from "@capacitor/app";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function getParameterByName(name: string, url = window.location.href) {
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

const AppUrlListener: React.FC<any> = () => {
  let query = useQuery();

  let history = useHistory();
  useEffect(() => {
    App.addListener("appUrlOpen", (data: any) => {
      let url = data.url.replace("#", "?");
      let access_token = getParameterByName("access_token", url);
      localStorage.setItem("access_token", access_token || "");
      const slug = data.url.split(".io").pop();
      if (slug) {
        history.push(slug);
      }
      // If no match, do nothing - let regular routing
      // logic take over
    });
  }, []);

  return null;
};

export default AppUrlListener;
