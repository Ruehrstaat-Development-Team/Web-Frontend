export const useSession = () => {
  var session_token = useCookie("session_token", {
    path: "/",
    secure: true,
    sameSite: "strict",
  });
  var session_expiresAt = useCookie("session_expires", {
    path: "/",
    secure: true,
    sameSite: "strict",
  });
  const session = {
    token: session_token.value,
    expiresAt: session_expiresAt.value,
    setSession: setSession,
  };

  function setSession(token: SessionToken) {
    session_token = useCookie("session_token", {
      path: "/",
      secure: true,
      expires: new Date(token.expiresAt * 1000),
      sameSite: "strict",
    });
    session_expiresAt = useCookie("session_expires", {
      path: "/",
      secure: true,
      expires: new Date(token.expiresAt * 1000),
      sameSite: "strict",
    });
    session_token.value = token.token;
    session_expiresAt.value = new Date(token.expiresAt * 1000).toISOString();
  }
  return session;
};
