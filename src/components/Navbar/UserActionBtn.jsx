import Link from "next/link";
import { authUserSession } from "@/libs/auth-libs";

const UserActionBtn = async () => {
  const user = await authUserSession();
  const actionLabel = user ? "Sign Out" : "Sign In";
  const actionURL = user ? "/api/auth/signout" : "/api/auth/signin";

  return (
    <div className="flex md:justify-between justify-center text-color-primary gap-4">
      {user ? (
        <Link
          href={"/users/dashboard"}
          className="bg-color-dark text-color-primary px-3.5 py-2 inline-block rounded-lg font-semibold"
        >
          Dashboard
        </Link>
      ) : null}
      <Link
        href={actionURL}
        className="bg-color-dark text-color-primary px-3 py-2 inline-block rounded-lg font-semibold"
      >
        {actionLabel}
      </Link>
    </div>
  );
};

export default UserActionBtn;
