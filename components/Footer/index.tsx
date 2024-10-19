import Link from "next/link";
import { _siteDetails } from "@/lib/config";
import SocialsBlock from "./SocialsBlock";
import { Separator } from "../ui/separator";

export default function Footer() {
  return (
    <footer className="mt-12 bg-primary text-primary-foreground">
      <section className="pSm pb-8 pt-12">
        <div className="maxContainer flexBetween flex-wrap gap-y-8">
          <figure className="flex flex-col gap-y-2">
            <b className="mb-2 text-lg font-bold">Links</b>
            {_siteDetails.menuLinks.map((item) => (
              <Link
                key={item.label}
                href={`${item.link}`}
                className="hover:text-yellow-100 transition-all duration-500 text-xs"
              >
                {item.label}
              </Link>
            ))}
          </figure>

          <figure className="flex flex-col gap-y-2 md:min-w-[16rem]">
            <b className="mb-2 text-lg font-bold"> Social Links </b>
            <SocialsBlock />
          </figure>
          <Separator />
          <p className="md:w-full flexCenter text-xs">
            <span>
              Copyright ©{new Date().getFullYear()} ~ {_siteDetails.name}
            </span>
          </p>
        </div>
      </section>
    </footer>
  );
}
