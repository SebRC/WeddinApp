import { FunctionComponent } from "react";
import styles from "./Navbar.module.css";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import { IconLogout } from "../icons/IconLogout";
import { useCurrentUser } from "../../hooks/context/UserProvider";
import { handleSignOut } from "../../firebase/firebase";
import { PageLayout } from "../layout/pageLayout/PageLayout";
import { AdminRoute, AuthRoute, GiftsRoute, GuestRoute, InfoRoute } from "../../routing/routes";
import { Roles } from "../authentication/Roles";
import { Button } from "../button/Button";
import { useLanguage } from "../../hooks/context/LanguageProvider";
import { useTranslator } from "../../translations/useTranslator";

export const Navbar: FunctionComponent = () => {
  const { language, dispatch } = useLanguage();
  const location = useLocation();
  const user = useCurrentUser();
  const navigate = useNavigate();
  const translator = useTranslator();

  const handleLogout = async () => {
    await handleSignOut();
    navigate(AuthRoute.path);
  };

  const handleSetLanguage = () => {
    if (language === "da") {
      dispatch?.("en");
    } else {
      dispatch?.("da");
    }
    console.log(language);
  };

  return (
    <>
      <div className={styles.navbar}>
        {user.authed && (
          <>
            <Link
              to={GuestRoute.path}
              className={location.pathname.includes(GuestRoute.path) ? `${styles.active}` : ""}
            >
              {translator.guest()}
            </Link>
            <Link to={InfoRoute.path} className={location.pathname.includes(InfoRoute.path) ? `${styles.active}` : ""}>
              {translator.info()}
            </Link>
            <Link
              to={GiftsRoute.path}
              className={location.pathname.includes(GiftsRoute.path) ? `${styles.active}` : ""}
            >
              {translator.gifts()}
            </Link>
            {user?.role === Roles.Admin && (
              <Link
                to={AdminRoute.path}
                className={location.pathname.includes(AdminRoute.path) ? `${styles.active}` : ""}
              >
                {translator.admin()}
              </Link>
            )}
          </>
        )}
        <Button text="Change language" onClick={handleSetLanguage} height="3rem" />

        <Link to={AuthRoute.path} style={{ float: "right" }} onClick={handleLogout}>
          <IconLogout />
        </Link>
      </div>
      <PageLayout>
        <Outlet />
      </PageLayout>
    </>
  );
};
