import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link href="/" className="font-semibold tracking-tight">
      Rodela <span className="text-primary">Cleaners</span>
    </Link>
  );
}
