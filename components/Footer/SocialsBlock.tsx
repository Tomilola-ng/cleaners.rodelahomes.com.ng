import {
  FACEBOOK_ICON,
  INSTAGRAM_ICON,
  LINKEDIN_ICON,
  TWITTER_ICON,
} from "@/lib/icons";
import Link from "next/link";

export default function SocialsBlock() {
  return (
    <div className="flexBetween gap-x-3">
      <Link
        target="_blank"
        aria-label="Facebook Social Link"
        href="#https://web.facebook.com/profile.php?id="
        className=""
      >
        <FACEBOOK_ICON />
      </Link>

      <Link
        target="_blank"
        aria-label="Instagram Social Link"
        href="#https://instagram.com/"
        className=""
      >
        <INSTAGRAM_ICON />
      </Link>

      <Link
        target="_blank"
        aria-label="Linkedin Social Link"
        href="#https://linkedin.com/company/"
        className=""
      >
        <LINKEDIN_ICON />
      </Link>

      <Link
        target="_blank"
        aria-label="Twitter Social Link"
        href="#https://x.com/"
        className=""
      >
        <TWITTER_ICON />
      </Link>
    </div>
  );
}
