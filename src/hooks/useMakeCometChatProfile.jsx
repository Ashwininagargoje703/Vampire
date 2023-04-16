import { CometChat } from "@cometchat-pro/chat";

export default function useMakeCometChatProfile() {
  let authKey = "4d5e5287d062275825e36a9a82f4c8204b659f4b";
  const createCommetChatUser = (usertomake) => {
    let uid = usertomake?.username;
    let name = usertomake?.First_Name + " " + usertomake?.last_name;
    let avtar = usertomake?.userpic_url;

    let user = new CometChat.User(uid);
    user.setName(name);
    user.setAvatar(avtar);
    CometChat.createUser(user, authKey).then(
      (user) => {
        console.log("user created", user);
      },
      (error) => {
        console.log("error", error);
      }
    );
  };

  const loginCommetChatUser = (usertomake) => {
    let uid = usertomake?.username;

    return CometChat.login(uid, authKey).then(
      (user) => {
        return user;
      },
      (error) => {
        return error;
      }
    );
  };

  const logoutCommetChatUser = () => {
    return CometChat.logout(authKey).then(
      () => {
        return true;
      },
      (error) => {
        return error;
      }
    );
  };

  return { createCommetChatUser, loginCommetChatUser, logoutCommetChatUser };
}
