/* eslint-disable react/no-unescaped-entities */
import { Building2, Users, ThumbsUp, UserCheck } from "lucide-react";
import Link from "next/link";
import { WHATSAPP_ICON } from "@/lib/icons";

export default function AboutUsSection() {
  return (
    <section
      id="about-us"
      className="bg-primary text-primary-foreground py-16 mt-8 md:mt-4 pSm"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="grid grid-cols-2 gap-8 mb-8 lg:mb-0 lg:w-1/2">
            <StatCard
              icon={<Building2 className="w-8 h-8" />}
              value="100+"
              label="Projects Completed"
            />
            <StatCard
              icon={<Users className="w-8 h-8" />}
              value="5+"
              label="Years of Excellence"
            />
            <StatCard
              icon={<ThumbsUp className="w-8 h-8" />}
              value="90+"
              label="Happy Clients"
            />
            <StatCard
              icon={<UserCheck className="w-8 h-8" />}
              value="25+"
              label="Expert Cleaners"
            />
          </div>
          <div className="lg:w-1/2 lg:pl-12">
            <h2 className="text-xl md:text-2xl font-semibold md:font-bold mb-6">
              About Our Cleaning Agency
            </h2>
            <p className="mb-6 text-xs md:text-sm">
              It started back in 2019, when we earned our place quick as a top
              name in both commercial and home cleaning. What we do is made for
              tackling light to tough dirt problems that people, families, and
              companies deal with every day. At Rodela Cleaners, things ain't
              the same anymore in the cleaning world—we're changing how it’s
              done in Lagos and even further. Our excellent services reach homes
              and workplaces all over places like Victoria Island, Lekki, Ikoyi,
              and the Mainland. Lagos is a busy place, and we totally get how
              tough it can be to keep spaces clean. Whether it's the dusty
              harmattan air or rainy days, we know the challenges here. Our crew
              is full of skilled folks who use eco-friendly stuff, making sure
              your space stays not only clean but also safe. Be it after a party
              clean-up or keeping your Ikeja GRA office tidy week by week,
              Rodela Cleaners will always be here for all the cleaning you need
              in Lagos.
            </p>

            <Link
              href="https://wa.me/+2348060900713"
              style={{ color: "black" }}
              className="bg-white text-primary hover:bg-primary-foreground flexCenter w-fit gap-x-2 h-10 rounded-md px-8 bg-primary shadow"
            >
              Book Now <WHATSAPP_ICON />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="bg-white text-primary p-6 rounded-lg shadow-lg text-center">
      <div className="flex justify-center mb-4">{icon}</div>
      <div className="text-2xl font-bold mb-2">{value}</div>
      <div className="text-sm">{label}</div>
    </div>
  );
}
