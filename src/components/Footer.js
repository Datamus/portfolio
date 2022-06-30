import React from "react";
import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <div className="flex items-center justify-center flex-col bg-primaryBlack h-40">
      <div className="flex mb-4">
        <a href="https://github.com/Datamus" target="_blank" rel="noreferrer">
          <Icon
            icon="akar-icons:github-fill"
            color="white"
            width="25"
            height="25"
            style={{ marginRight: 20 }}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/mathias-simonsen-6723541a3/"
          target="_blank"
          rel="noreferrer"
        >
          <Icon
            icon="akar-icons:linkedin-box-fill"
            color="white"
            width="25"
            height="25"
          />
        </a>
      </div>

      <div>
        <p className="text-white">Copyright &copy; Mathias Simonsen</p>
      </div>
    </div>
  );
}
