import AccountHeader from "../components/Account/AccountHeader";
import AccountPosts from "../components/Account/AccountPosts";
import AccountPermissions from "../components/Account/AccountPermissions";
import { parseCookies } from "nookies";
import baseUrl from "../utils/baseUrl";
import axios from "axios";

function Account({ user, posts }) {
  return (
    <>
      <AccountHeader {...user} />
      <AccountPosts posts={posts} />
      {user.role === "root" && <AccountPermissions />}
    </>
  );
}

Account.getInitialProps = async (ctx) => {
  const { token } = parseCookies(ctx);
  if (!token) {
    return { posts: [] };
  }
  const payload = { headers: { Authorization: token } };
  const url = `${baseUrl}/posts/{id}`;
  const response = await axios.get(url, payload);
  return response.data;
};

export default Account;
