import { FaLinkedin,FaGithub,FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-200 shadow-md w-auto ">
      <div className="flex text-mixup justify-center gap-10 text-3xl pt-5">
        <a href="https://github.com/Mayank-singh-01" target="_blank">
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/mayank-singh-a76577266/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a href="https://twitter.com/__mayank_singh_" target="_blank">
          <FaTwitter />
        </a>
      </div>
      <p className="text-center text-gray-800 text-sm pt-2 pb-4">
        Copyright © 2024. Nothing are reserved.
      </p>
    </footer>
  );
}